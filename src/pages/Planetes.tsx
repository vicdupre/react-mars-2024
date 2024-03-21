import { Link } from "react-router-dom";
import PlanetsList from "../ui/PlanetsList";
import { useEffect, useState } from "react";

const Planetes = () => {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState({
    next: null,
    previous: null,
  });
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://swapi.dev/api/planets/?page=${pageNumber}`
      );
      const data = await response.json();
      setPlanets(data.results);
      setPage({
        next: data.next,
        previous: data.previous,
      });
    })();
  }, [pageNumber]);

  const goToNextPage = () => {
    setPageNumber((prev) => prev + 1);
  };
  const goToPreviousPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  return (
    <main>
      <h1>Les planètes</h1>
      <PlanetsList
        planets={planets}
        page={page}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
      <Link to="/">Retour</Link>
    </main>
  );
};

export default Planetes;
