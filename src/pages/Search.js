import { useLocation, useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

export default function Search({ apiPath }) {
  const location = useLocation(); // Aktuellen Pfad erhalten
  const [searchParams] = useSearchParams(); // Query-Parameter aus der URL extrahieren
  const queryTerm = searchParams.get('query'); // Spezifischen Query-Parameter erhalten

  console.log(apiPath);
  console.log(queryTerm);
  console.log(location); // Den aktuellen Pfad und andere Informationen ausgeben

  const { data } = useFetch(apiPath, queryTerm);

  useTitle(`Search Result for ${queryTerm}`)

  return (
    <main>
      <section className="py-7">
        <div className="flex justify-center flex-wrap">
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