interface NewsSource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface NewsAPIResponse {
  status: 'ok' | 'error';
  sources?: NewsSource[];
  code?: string;
  message?: string;
}

export interface NewsSource, interface NewsAPIResponse;