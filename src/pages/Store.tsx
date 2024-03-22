import { useQuery } from "@tanstack/react-query";

const Store = () => {
  const { data, error, isLoading, isStale, refetch } = useQuery({
    queryKey: ["store"],
    queryFn: async () => {
      console.log("fetching data");
      return await (await fetch("https://fakestoreapi.com/products")).json();
    },
    staleTime: 5000,
    gcTime: 60000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Store</h1>
      {isStale && <button onClick={() => refetch()}>Refresh</button>}
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Store;
