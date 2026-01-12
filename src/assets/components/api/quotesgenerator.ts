import axios from 'axios';

export interface Quote {
  id: number;
  content: string;
  originator: {
    id: number;
    name: string;
    url: string;
  };
}

export const fetchQuote = async (): Promise<Quote> => {
  const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    params: {
      language_code: 'en'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_Api_Key,
      'x-rapidapi-host': import.meta.env.VITE_Host,
    }
  };

  try {
    const response = await axios.request<Quote>(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}