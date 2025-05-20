import { Tables } from "@/types/supabase";

type FaqCategory = Tables<'faq_categories'> & {
    faq_questions: Tables<'faq_questions'>[];
};

type FaqQuestion = Tables<'faq_questions'>;

export type { FaqCategory, FaqQuestion };