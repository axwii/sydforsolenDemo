export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      artists: {
        Row: {
          created_at: string
          day_id: number | null
          description1: string
          description2: string
          description3: string
          id: number
          image: string
          name: string
          secondary_image: string
          slug: string | null
          updated_at: string
          video_embed_url: string | null
        }
        Insert: {
          created_at?: string
          day_id?: number | null
          description1: string
          description2: string
          description3: string
          id?: number
          image: string
          name: string
          secondary_image: string
          slug?: string | null
          updated_at?: string
          video_embed_url?: string | null
        }
        Update: {
          created_at?: string
          day_id?: number | null
          description1?: string
          description2?: string
          description3?: string
          id?: number
          image?: string
          name?: string
          secondary_image?: string
          slug?: string | null
          updated_at?: string
          video_embed_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artists_day_id_fkey"
            columns: ["day_id"]
            isOneToOne: false
            referencedRelation: "music_days"
            referencedColumns: ["id"]
          },
        ]
      }
      faq_categories: {
        Row: {
          created_at: string
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      faq_questions: {
        Row: {
          answer: string
          category_id: string | null
          created_at: string
          id: string
          question: string
          updated_at: string
        }
        Insert: {
          answer: string
          category_id?: string | null
          created_at?: string
          id: string
          question: string
          updated_at?: string
        }
        Update: {
          answer?: string
          category_id?: string | null
          created_at?: string
          id?: string
          question?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "faq_questions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "faq_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      festival_lineups: {
        Row: {
          artists: string[]
          created_at: string
          day_display: string
          day_of_week: string
          id: number
          year_id: number | null
        }
        Insert: {
          artists: string[]
          created_at?: string
          day_display: string
          day_of_week: string
          id?: number
          year_id?: number | null
        }
        Update: {
          artists?: string[]
          created_at?: string
          day_display?: string
          day_of_week?: string
          id?: number
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "festival_lineups_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "festival_years"
            referencedColumns: ["id"]
          },
        ]
      }
      festival_years: {
        Row: {
          created_at: string
          id: number
          year: number
        }
        Insert: {
          created_at?: string
          id?: number
          year: number
        }
        Update: {
          created_at?: string
          id?: number
          year?: number
        }
        Relationships: []
      }
      music_days: {
        Row: {
          bg_color: string
          created_at: string
          day: string
          description: string
          id: number
          section_class: string
          text_color: string
          updated_at: string
        }
        Insert: {
          bg_color: string
          created_at?: string
          day: string
          description: string
          id?: number
          section_class: string
          text_color: string
          updated_at?: string
        }
        Update: {
          bg_color?: string
          created_at?: string
          day?: string
          description?: string
          id?: number
          section_class?: string
          text_color?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
