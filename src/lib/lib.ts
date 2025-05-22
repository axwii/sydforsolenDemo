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

export async function getArtistBySlug(slug: string) {
  return await supabase
    .from('artists')
    .select('*')
    .eq('slug', slug)
    .single();
}

export async function getAllArtists() {
  return await supabase
    .from('artists')
    .select('*');
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

export async function getFestivalLineupsByYear(year: number) {
  const { data: yearData } = await supabase
    .from('festival_years')
    .select('id')
    .eq('year', year)
    .single();

  if (!yearData) return null;

  return await supabase
    .from('festival_lineups')
    .select('*')
    .eq('year_id', yearData.id)
    .order('day_display');
}

export async function getPartners() {
  return await supabase
    .from('partners')
    .select('*')
    .order('id');
}
export async function getDataSamarbejde() {
  return await supabase
      .from('data_samarbejde')
      .select('*')
    .order('id');
}

