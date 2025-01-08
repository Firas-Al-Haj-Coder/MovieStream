import { useEffect, useState } from 'react';

export const useFetch = (apiPath, queryTerm = '') => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`;
      const headers = {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'accept': 'application/json'
      };

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: headers
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        setData(json.results);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [apiPath, queryTerm]);

  return { data };
};