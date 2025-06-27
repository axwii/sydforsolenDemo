# Environment Variables

This project requires the following environment variables to be set in your Vercel deployment:

## Required Environment Variables

### Contentful Configuration

- `CONTENTFUL_SPACE_ID` - Your Contentful space ID
- `CONTENTFUL_ACCESS_TOKEN` - Your Contentful access token
- `CONTENTFUL_ENVIRONMENT` - Your Contentful environment (default: master)

### OpenAI Configuration

- `OPENAI_API_KEY` - Your OpenAI API key (required for the chat functionality)

### Supabase Configuration (if using Supabase)

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key

## How to Set Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add each variable with its corresponding value
5. Redeploy your application

## Local Development

Create a `.env.local` file in your project root with the same variables for local development.
