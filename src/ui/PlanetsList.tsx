import React, { useEffect, useState } from "react";

const PlanetsList = () => {
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
    <div>
      <ol>
        {planets.map((planet) => (
          <li key={planet.url}>{planet.name}</li>
        ))}
      </ol>
      {page.previous && <button onClick={goToPreviousPage}>Previous</button>}
      {page.next ? <button onClick={goToNextPage}>Next</button> : null}
    </div>
  );
};

export default PlanetsList;
