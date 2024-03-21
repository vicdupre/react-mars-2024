import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PlanetsList from "../ui/PlanetsList";

const Planetes = () => {
  const { planets, page, pageNumber } = useLoaderData() as any;
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate(`/planetes?page=${pageNumber + 1}`);
  };
  const goToPreviousPage = () => {
    navigate(`/planetes?page=${pageNumber - 1}`);
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
