import { NextResponse } from 'next/server';
import { fetchFaqCategories, fetchFaqQuestions } from '@/lib/contentful';

export async function GET() {
    const categories = await fetchFaqCategories();
    const questions = await fetchFaqQuestions();

    const categoriesWithQuestions = categories.map(category => ({
        ...category,
        questions: questions.filter(q => q.categories.includes(category.id)),
      }));
    
    return NextResponse.json(categoriesWithQuestions);
}
