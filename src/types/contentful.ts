export interface FaqCategory {
    id: string;
    title: string;
    order: number;
}

export interface FaqQuestion {
    id: string;
    question: string;
    answer: any;
    categories: string[];
    order: number;
}

export interface FaqCategoryWithQuestions extends FaqCategory {
    questions: FaqQuestion[];
}

export interface GalleriImage {
    id: string;
    title: string;
    image: string;
    order: number;
}

export interface GalleriImageSet {
    id: string;
    title: string;
    images: GalleriImage[];
    order: number;
}

