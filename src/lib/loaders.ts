export const getPlanets = async ({ request }) => {
  const url = new URL(request.url);
  const pageNumber = url.searchParams.get("page") || 1;
  const response = await fetch(
    `https://swapi.dev/api/planets/?page=${pageNumber}`
  );
  const data = await response.json();
  return {
    planets: data.results,
    page: { next: data.next, previous: data.previous },
    pageNumber: Number(pageNumber),
  };
};

export const getPlanet = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`https://swapi.dev/api/planets/${id}`);
  const data = await response.json();
  return data;
};

export const getUsers = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/45632563e08444ada4c86bbd071f705e/users"
  );
  const data = await response.json();
  return data;
};

export const getUser = async ({ params }) => {
  const response = await fetch(
    `https://crudcrud.com/api/45632563e08444ada4c86bbd071f705e/users/${params.id}`
  );
  const data = await response.json();
  return data;
};
