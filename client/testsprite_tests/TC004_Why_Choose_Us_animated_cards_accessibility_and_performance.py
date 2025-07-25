import asyncio
from playwright import async_api

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:5000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # Scroll down to the 'Why Choose Us' section to observe animations and accessibility features.
        await page.mouse.wheel(0, 800)
        

        # Assertion: Confirm smooth animations in 'Why Choose Us' cards by checking transition CSS properties
        cards = await page.query_selector_all('section#why-choose-us .card')
        assert len(cards) > 0, "No cards found in 'Why Choose Us' section"
        for card in cards:
            # Check if card has transition property for smooth animation
            transition = await card.evaluate('(el) => window.getComputedStyle(el).transition')
            assert transition and transition != 'all 0s ease 0s', "Card does not have smooth transition animation"
            # Optionally check if card is visible and not hidden
            visible = await card.is_visible()
            assert visible, "Card is not visible"
        # Assertion: Verify keyboard navigation and ARIA labels for accessibility
        for card in cards:
            # Check ARIA label presence and non-empty
            aria_label = await card.get_attribute('aria-label')
            assert aria_label and aria_label.strip() != '', "Card missing ARIA label or label is empty"
        # Keyboard navigation: tab through each card and check focus
        for i in range(len(cards)):
            await page.keyboard.press('Tab')
            focused_element = await page.evaluate('document.activeElement')
            # Check if focused element is one of the cards
            focused_card = await page.evaluate('(el, cards) => cards.includes(el)', focused_element, cards)
            assert focused_card, f"Card {i+1} is not reachable by keyboard navigation"
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    