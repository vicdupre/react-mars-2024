const PlanetsList = (props) => {
  const { planets, page, goToNextPage, goToPreviousPage } = props;
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
