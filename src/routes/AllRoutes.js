// Bevor wir mit den Routes anfangen müssen wir den Server stoppen
// dann npm install react-router-dom@6 also React Router DOM installieren
// danach brauchen wir ein Wrapper für unserer src/index.js also die Hauptseite 
// da wird die App umgewickelt gewrappt mit dem BrowserRouter Komponente 
// Um BrowserRouter korrekt zu verwenden, müssen Sie die App-Komponente mit BrowserRouter umwickeln (s. src/index.js)


// Wir wollen durch unsere Pages navigieren, somit müssen die pages hier importiert werden 
import { Routes, Route } from "react-router-dom"; // Routes kann nested Route einnehmen
import {MovieDetails, MovieList, PageNotFound, Search} from "../pages/index"


// Jetzt kommt die Überlegung welche ist unsere Hompage etc..

// 2te Route: lt. der API wird popular, Top, Upcomming rausgenommen vom Server und angezeigt in die MovieList Seite

// Nach der Definition von den Routen muss dann die default app.js da die Route importiert werden
export default function AllRoutes() {
    return (
      <div className="dark:bg-slate-800">
        <Routes>
          <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} /> {/** Pass Props to Other Components */}
          <Route path="movie/:id" element={<MovieDetails title="Details" />} />
          <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
          <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"  title="Top Rated" />} />
          <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
          <Route path="search" element={<Search apiPath="search/movie" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }

  // Nachdem wir die Routes definiert haben, können wir Tailwind CSS installieren als Dependency (s.package.json ganz unten)
  // https://tailwindcss.com/docs/installation // dazu wird die Datei tailwind.config.js erstellt und code eingefügt da und in index.css