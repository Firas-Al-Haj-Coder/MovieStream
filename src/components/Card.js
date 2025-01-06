// als Element drin gibt es noch die Karte eines Filmes, nur eins erstllen
import { Link } from 'react-router-dom'
import React from 'react'
import backup from '../assets/backup.png'


export default function Card({movie}) {


  const {id, original_title, overview, poster_path} = movie; // wir brauchen die id für 2 Gründe, bildPath, und MovieDetail

  const image_path = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : backup ;


  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`movie/${id}`}>
            <img className="rounded-t-lg" src={image_path} alt="" />  {/*src des Bildes der Karte*/}
        </Link>
        <div className="p-5">
            <Link to={`movie/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {original_title} </h5>
            </Link>
            <p className="mb-3 font-sans text-base text-gray-700 dark:text-gray-400">{overview}</p>
        </div>
    </div>
  )
}
