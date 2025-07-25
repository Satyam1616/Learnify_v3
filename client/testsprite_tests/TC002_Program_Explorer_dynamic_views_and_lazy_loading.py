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
        # Click on 'Explore Programs' button to navigate to Program Explorer page
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div[2]/main/section/div/div/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Try alternative navigation by clicking on other links or buttons that might lead to Program Explorer page, or report issue if none found.
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div[2]/header/nav/div/div[2]/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click 'Explore Programs' button to navigate to Program Explorer page
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div[2]/main/div/section/div[2]/div/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Click the 'Explore Programs' button to attempt navigation to Program Explorer or switch view if available
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div[2]/main/div/section/div[2]/div/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Look for a toggle control to switch from grid view to list view and click it if found
        frame = context.pages[-1]
        elem = frame.locator('xpath=html/body/div/div[2]/main/div/section/div[2]/div/div/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # Try scrolling down to trigger lazy loading of additional programs or look for other UI elements related to view switching
        await page.mouse.wheel(0, window.innerHeight)
        

        # Assertion: Confirm default view is grid with multiple program cards visible
        grid_view_cards = await frame.locator('.program-card.grid').count()
        assert grid_view_cards > 1, f'Expected multiple program cards in grid view, found {grid_view_cards}'
          
        # Assertion: Verify programs display in a vertical list layout after switching to list view
        list_view_cards = await frame.locator('.program-card.list').count()
        assert list_view_cards > 0, 'Expected program cards in list view after toggle'
          
        # Assertion: Ensure new program items load and appear without layout shifts after scrolling
        initial_count = await frame.locator('.program-card').count()
        await frame.evaluate('window.scrollTo(0, document.body.scrollHeight)')
        await page.wait_for_timeout(3000)  # wait for lazy loading
        new_count = await frame.locator('.program-card').count()
        assert new_count > initial_count, f'Expected more program cards after lazy loading, found {new_count} vs {initial_count}'
          
        # Assertion: Verify program titles and descriptions are present in the metadata for SEO optimization
        page_title = await frame.title()
        assert 'Job Bridge Programs' in page_title, f'Page title missing or incorrect: {page_title}'
        meta_description = await frame.locator('meta[name="description"]').get_attribute('content')
        assert meta_description and 'career' in meta_description.lower(), 'Meta description missing or not SEO optimized'
          
        # Additional SEO checks for program titles in page content
        program_names = ["Artificial Intelligence", "Data Science", "Web Development", "UI/UX Design", "Digital Marketing", "Drone Engineering"]
        for name in program_names:
            content_present = await frame.locator(f'text={name}').count()
            assert content_present > 0, f'Program name {name} not found in page content'
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    