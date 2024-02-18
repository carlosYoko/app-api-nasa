const API_KEY: string = 'f3QlYud2GF4eoC7LIVWbovD04RoZJXXLRJcmwPci';
const API_URL: string = 'https://api.nasa.gov/planetary/apod';

export default async (urlParams?: string) => {
  try {
    const paramsString = urlParams ? urlParams : '';
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${paramsString}`,
    );
    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
