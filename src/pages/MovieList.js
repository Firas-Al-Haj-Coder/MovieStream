// Importiere notwendige Module und Komponenten
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";

// Definiere die MovieList-Komponente
export default function MovieList({ apiPath, title }) {
  // Verwende den useFetch-Hook, um Daten von der API abzurufen
  const { data } = useFetch(apiPath);

  // Verwende den useNavigate-Hook, um die Navigation zu handhaben
  const navigate = useNavigate();

  // Setze den Seitentitel mit dem useTitle-Hook
  useTitle(title);

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