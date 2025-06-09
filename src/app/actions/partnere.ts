"use server";

import { fetchPartnereEntry } from '../../lib/contentful';
import { Partnere } from '@/types/contentful';

export async function getPartners(): Promise<Partnere[]> {
  
  try {
    const partners = await fetchPartnereEntry();
    return partners;
  } catch (error) {
    console.error('Error fetching partners:', error);
    return [];
  }
} 