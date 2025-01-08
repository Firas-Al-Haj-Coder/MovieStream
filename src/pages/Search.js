import { useLocation, useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import { useNavigate } from "react-router-dom";

export default function Search({ apiPath }) {
  const location = useLocation(); // Aktuellen Pfad erhalten
  const [searchParams] = useSearchParams(); // Query-Parameter aus der URL extrahieren
  const queryTerm = searchParams.get('query'); // Spezifischen Query-Parameter erhalten

  console.log(apiPath);
  console.log(queryTerm);
  console.log(location); // Den aktuellen Pfad und andere Informationen ausgeben

  const { data } = useFetch(apiPath, queryTerm);

  useTitle(`Search Result for ${queryTerm}`)

  const navigate = useNavigate();
    // Definiere eine Funktion, um die Navigation zu handhaben, wenn auf eine Karte geklickt wird
    const handleCardClick = (id) => {
      navigate(`/movie/${id}`);
    };

  return (
    <main>
      <section className="py-7">
        <div className="flex justify-center flex-wrap">
          {/* Überprüfe, ob Daten vorhanden sind und mappe über die Ergebnisse */}
          {data && data.length > 0 ? (
            data.map((result) => (
              // Verwende ein div-Element, um die Karte zu umschließen und den onClick-Handler hinzuzufügen
              <div key={result.id} onClick={() => handleCardClick(result.id)}>
                {/* Render die Card-Komponente und übergebe die notwendigen Props */}
                <Card title={result.title} movie={result} />
              </div>
            ))
          ) : (
            // Zeige eine Ladeanzeige, wenn keine Daten vorhanden sind
            <p>Loading...</p>
          )}
        </div>
      </section>
    </main>
  );
}