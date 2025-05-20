import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getDaysWithArtists() {
  return await supabase
    .from('music_days')
    .select(`
      *,
      artists (*)
    `);
}

export async function getArtistsByDay(dayId: number) {
  return await supabase
    .from('artists')
    .select('*')
    .eq('day_id', dayId);
}

export async function getCategoriesWithQuestions() {
  return await supabase
    .from('faq_categories')
    .select(`
      *,
      faq_questions (*)
    `);
}

export async function getQuestionsByCategory(categoryId: string) {
  return await supabase
    .from('faq_questions')
    .select('*')
    .eq('category_id', categoryId);
}
