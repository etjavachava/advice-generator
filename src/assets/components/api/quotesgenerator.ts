import axios from 'axios';


export const fetchQuote = async () => {
  const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    params: {
      language_code: 'en'
    },
    headers: {
      'x-rapidapi-key':import.meta.env.VITE_Api_Key,
      'x-rapidapi-host': import.meta.env.VITE_Host,
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}