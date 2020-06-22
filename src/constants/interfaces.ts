export interface GenreItem {
  id: number,
  genre: string;
}

export interface ApiResponse {
  apiResponse: object[];
}

export interface SearchParams {
  intitle?: string;
  inauthor?: string;
  inpublisher?: string;
  subject?: string[];
}

export interface AdvancedRequest {
  bookTitle: string;
  bookAuthor: string;
  category?: string;
  payment?: string;
  download?: string;
  language?: string;
  pagination?: string;
}