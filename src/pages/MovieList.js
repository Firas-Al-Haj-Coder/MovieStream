// Angezeigte Movie Liste - die Main 
import { useEffect } from "react";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

export default function MovieList({ apiPath , title }) {
  /* Fetch Anfrage */
  const { data } = useFetch(apiPath);

  //console.log(data)

  useTitle(title);
  
  return (
    <main>
      <section className="py-7">
        <div className="flex justify-center flex-wrap">
          {/* Mappe via jsx Ausdruck */}
          {/* each Movie ist eins vom results und beinhaltet alles */}
          {/* destructer results (resp) in result (movie)  */}
          {data && data.length > 0 ? (
            data.map((result) => (
              <Card key={result.id} title={result.title} movie={result} />
            ))
          ) : (
            <p>Loading...</p> // Fallback, wenn data noch nicht geladen ist
          )}
        </div>
      </section>
    </main>
  );
}