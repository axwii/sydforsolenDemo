'use server';

import { fetchGalleriEntry } from '@/lib/contentful';
import { GalleriImageSet } from '@/types/contentful';

export async function getGalleryData(): Promise<GalleriImageSet[]> {
    try {
        const data = await fetchGalleriEntry();
        return data;
    } catch (error) {
        console.error('Error in getGalleryData:', error);
        throw error;
    }
} 