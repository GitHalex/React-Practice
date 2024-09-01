import { useState, useEffect } from "react";

// Define las interfaces para las props y el estado
interface PokemonProps {
  name: string;
  avatar: string;
}

interface PokemonState {
  id: number;
  name: string;
  avatar: string;
}

// Componente funcional tipado para un Pokémon con desestructuración de props
const Pokemon: React.FC<PokemonProps> = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

const AjaxHooks = () => {
  const [pokemons, setPokemons] = useState<PokemonState[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  useEffect(() => {
    // Función para manejar la petición inicial
    const getPokemons = async (url: string) => {
      try {
        const res = await fetch(url);
        const json = await res.json();

        // Usa map en lugar de forEach para obtener un array de promesas
        const promises = json.results.map(async (el: { url: string }) => {
          const res = await fetch(el.url);
          const json = await res.json();

          return {
            id: json.id,
            name: json.name,
            avatar: json.sprites.front_default,
          };
        });

        // Espera a que todas las promesas se resuelvan
        const pokemonsData = await Promise.all(promises);
        setPokemons(pokemonsData);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false); // Cambia a false después de la carga
      }
    };

    let url: string = "https://pokeapi.co/api/v2/pokemon/";
    getPokemons(url);
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  // Retorno del componente sin render()
  return (
    <>
      <h2>Peticiones Asíncronas en Componentes Funcionales</h2>
      {loading ? (
        <h3>CARGANDO...perriii</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
};

export default AjaxHooks;
