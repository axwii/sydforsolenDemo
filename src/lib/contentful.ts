import { createClient } from 'contentful';
import { FaqCategory, FaqQuestion, FaqCategoryWithQuestions, GalleriImageSet } from '@/types/contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

export async function fetchFaqCategories(): Promise<FaqCategory[]> {
    const entries = await client.getEntries({ content_type: 'faqCategory', order: ['fields.order'] });
    return entries.items.map((item: any) => ({
      id: item.fields.id,
      title: item.fields.title,
      order: item.fields.order ?? 0,
    }));
  }

  export async function fetchGalleriEntry(): Promise<GalleriImageSet[]> {
    const entries = await client.getEntries({ content_type: 'galleri', order: ['fields.order'] });
    return entries.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      order: item.fields.order ?? 0,
      images: [
        item.fields.leftImage && {
          id: item.fields.leftImage.sys.id,
          title: item.fields.leftImage.fields.title,
          image: item.fields.leftImage.fields.file.url,
          order: 0,
        },
        item.fields.middleImage && {
          id: item.fields.middleImage.sys.id,
          title: item.fields.middleImage.fields.title,
          image: item.fields.middleImage.fields.file.url,
          order: 1,
        },
        item.fields.rightImage && {
          id: item.fields.rightImage.sys.id,
          title: item.fields.rightImage.fields.title,
          image: item.fields.rightImage.fields.file.url,
          order: 2,
        },
      ].filter(Boolean),
    }));
  }

export async function fetchFaqQuestions(): Promise<FaqQuestion[]> {
    const entries = await client.getEntries({ content_type: 'faqQuestion', order: ['fields.order'], include: 2 });
    return entries.items.map((item: any) => ({
      id: item.sys.id,
      question: item.fields.question,
      answer: item.fields.answer,
      categories: Array.isArray(item.fields.category)
        ? item.fields.category.map((cat: any) => cat.fields.id)
        : [],
      order: item.fields.order ?? 0,
    }));
  }
/* export async function getFaqCategories(): Promise<FaqCategoryWithQuestions[]> {
    const entries = await client.getEntries<FaqCategory>({
        
 */
