import { NextResponse } from 'next/server';
import { fetchGalleriEntry } from '@/lib/contentful';
import { createClient } from 'contentful';

export async function GET() {
    try {
        // TEMP: Log raw Contentful response for debugging
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID || '',
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
            environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
        });
        const entries = await client.getEntries({ content_type: 'galleri', order: ['fields.order'] });
        console.log('RAW GALLERI ENTRIES:', JSON.stringify(entries, null, 2));

        // Now use your normal function
        const galleriData = await fetchGalleriEntry();
        return NextResponse.json(galleriData);
    } catch (error: any) {
        console.error('Error in galleri API route:', error.message, error.stack);
        return NextResponse.json(
            { error: 'Failed to fetch galleri data', details: error.message },
            { status: 500 }
        );
    }
}