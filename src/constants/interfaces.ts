export interface GenreItem {
  id: number,
  genre: string;
  value: string;
}

export interface ApiResponse {
  apiResponse: object[];
}

export interface SearchParams {
  intitle?: string;
  inauthor?: string;
  subject?: string[];
  filter?: string;
  download?: string;
  maxResults?: number;
  langRestrict?: string[];
  startIndex?: number;
  orderBy?: string;
  keywords?: string[];
}