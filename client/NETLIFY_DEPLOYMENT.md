# Deploying to Netlify

This guide explains how to deploy the Learnify frontend to Netlify using the Netlify CLI.

## Prerequisites

- Node.js and npm installed
- Netlify account
- Git repository set up

## Setup

1. The project is already configured with the necessary Netlify files:
   - `netlify.toml` - Configuration for build settings
   - `public/_redirects` - URL redirect rules for the SPA

2. The package.json includes the following scripts:
   - `build:client` - Builds just the frontend
   - `deploy:netlify` - Deploys to Netlify as a draft
   - `deploy:netlify:prod` - Deploys to Netlify as production

## First-time Setup

1. Install Netlify CLI globally (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize your site (run from the client directory):
   ```bash
   cd client
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Choose a site name or accept the generated one

## Deployment

### Deploy a Draft Version

To deploy a preview version:

```bash
npm run deploy:netlify
```

This will build your site and deploy it to a unique URL for testing.

### Deploy to Production

To deploy to production:

```bash
npm run deploy:netlify:prod
```

## API Configuration

The `_redirects` file is set up to proxy API requests to your backend server. Update the backend URL in the `_redirects` file:

```
/api/*  https://your-backend-url.com/api/:splat  200
```

Replace `https://your-backend-url.com` with your actual backend URL.

## Environment Variables

If your frontend needs environment variables, you can set them in the Netlify dashboard:

1. Go to your site settings in Netlify
2. Navigate to "Build & deploy" > "Environment"
3. Add your environment variables

## Continuous Deployment

For continuous deployment:

1. Connect your repository to Netlify in the Netlify dashboard
2. Configure build settings:
   - Build command: `npm run build:client`
   - Publish directory: `dist`

This will automatically deploy your site when you push to your repository.