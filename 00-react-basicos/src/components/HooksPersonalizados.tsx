import useFetch from "../hooks/useFetch";

export const HooksPersonalizados = () => {
  // console.log(useFetch());
  // let url: string = "https://pokeapi.co/api/v2/pokemons/";
  let urlUsers: string = "https://jsonplaceholder.typicode.com/users";
  // let { data, isPending, error } = useFetch(url);
  let { data, isPending, error } = useFetch(urlUsers);
  return (
    <>
      <h2>Hooks personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h3>
    </>
  );
};
