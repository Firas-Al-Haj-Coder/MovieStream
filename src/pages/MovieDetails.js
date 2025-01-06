import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import backup from '../assets/backup.png'
import useTitle from '../hooks/useTitle';


export default function MovieDetails({title}) {
  // Zugriff auf den URL-Parameter :id nach dem Klicken auf einen Film
  const params = useParams();

  //console.log(params) // Ausgabe des Parameters in der Konsole

  const [movie_d, setDetails] = useState({}); // beginnt als leeres Objekt, was wir aus dem  useFetch erhalten

  useEffect( () => { // definiere eine async Funktion zum fetchen, rohe JS 

      async function fetchDetails() {

        const url = `https://api.themoviedb.org/3/movie/${params.id}`; // 

        const headers = {
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, 
          'accept': 'application/json'
        };
  
        const response = await fetch(url, {
          method: 'GET',
          headers: headers
        });
        
        const json = await response.json();
        
        //console.log(json);

        // sette das Objekt in movie_d
        setDetails(json);
      }
      // Call the fetch Function everytime I press on a movie
      fetchDetails();
    }
    ,[params.id]); // Abhängigkeitsarray enthält params.id, um den Effekt auszuführen, wenn sich die ID ändert

    useEffect(() => {
      console.log(movie_d);
    }, [movie_d]);

    const image_path = movie_d.poster_path ? `https://image.tmdb.org/t/p/w500${movie_d.poster_path}` : backup ;



    useTitle(movie_d.title);

  return (
    <main>
      <section className='flex justify-around ml-5 flex-wrap py-4'> {/** Sektion aufteilt in 2 Flexboxen */}
        
        <div className='max-w-sm'>

          <img src={image_path} alt={movie_d.title} />
          
        </div>

        <div className='max-w-sm text-gray-300 text-lg dark:text-white ml-8'>
          <h1 className='text-4xl font-bold my-4'>{movie_d.title}</h1>
          <p className='my-4 text-sm'> {movie_d.overview}</p>

          {/**{ movie_d.genres ? (
            <p className='my-5 flex flex-wrap gap-2'>

              {movie_d.genres.map( genre => (
                <span className='border rounded border-gray-200 dark:border-gray-600 text-sm
                mr-2 p-2'> {genre.name}</span>
              )
              )}
            </p>
          ) : "" } */} 

          {/** iteriere über die genres wenn sie existieren ansonsten zeige keine  */}


          {(() => {
            try {
              if (movie_d.genres) {
                return (
                  <p className='my-5 flex flex-wrap gap-2'>
                    {movie_d.genres.map(genre => (
                      <span key={genre.id} className='border rounded border-gray-200 dark:border-gray-600 text-sm mr-2 p-2'>
                        {genre.name}
                      </span>
                    ))}
                  </p>
                );
              } else {
                return null;
              }
            } catch (error) {
              console.error("Error iterating genres:", error);
              return null;
            }
          })()} {/** Selbstausführende Arrow Funktion  */}


          <div class="flex items-center">
              <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{movie_d.vote_average}</p>
              <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{movie_d.vote_count} reviews</span>
          </div>

          <p className='my-2'>
            <span className='mr-2 font-bold text-sm'>Runtime: </span> <span className='text-sm'> {movie_d.runtime} Min.</span>
          </p>
          <p className='my-2'>
            <span className='mr-1 font-bold text-sm'>Budget: </span> <span className='text-sm'> {movie_d.budget}</span>
          </p>
          <p className='my-2'>
            <span className='mr-1 font-bold text-sm'>Revenue: </span> <span className='text-sm'> {movie_d.revenue}</span>
          </p>
          <p className='my-2'>
            <span className='mr-1 font-bold text-sm'>Release Date: </span> <span className='text-sm'> {movie_d.release_date}</span>
          </p>
          <p className='my-2'>
            
            <span className='mr-1 font-bold text-sm'>IMDB-Code: </span> <a className='' href={`www.imdb.com/title/${movie_d.imdb_id}`}> {movie_d.imdb_id}</a>
          </p>

        </div>


        
      </section>


      
    </main> // kommt in main rein, weil sie eine Seite aus main Seite ist
  )
}