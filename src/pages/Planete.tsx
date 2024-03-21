import { Link, useLoaderData } from "react-router-dom";

const Planet = () => {
  const planet = useLoaderData() as any;
  return (
    <>
      <h1>{planet.name}</h1>
      <Link to=".." relative="path">
        Retour
      </Link>
    </>
  );
};

export default Planet;
