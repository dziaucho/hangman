export interface NewsSource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface NewsAPIResponse {
  status: 'ok' | 'error';
  sources?: NewsSource[];
  code?: string;
  message?: string;
}