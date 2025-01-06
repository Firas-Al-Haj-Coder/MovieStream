import { useEffect, useState } from 'react';

export const useFetch = (apiPath, queryTerm) => { // useFetch mit Query nur 
  // Überprüfe, ob apiPath korrekt ist
  //console.log(apiPath); 
  //console.log(queryTerm); 


  const url = `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`; // apiPath in die URL einfügen
  //const url = 'https://api.themoviedb.org/3/search/movie?query=avatar';

  //console.log(url);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchNowPlayingMovies() {
      const headers = {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, 
        'accept': 'application/json'
      };

      const response = await fetch(url, {
        method: 'GET',
        headers: headers
      });

      const json = await response.json();
      setData(json.results);
    }

    fetchNowPlayingMovies();
  }, [url]);

  return { data };
};