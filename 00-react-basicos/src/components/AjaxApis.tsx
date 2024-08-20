import { Component } from "react";

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

interface AjaxApisState {
  pokemons: PokemonState[];
}

// Componente funcional tipado para un Pokémon
function Pokemon(props: PokemonProps): JSX.Element {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

// Componente de clase tipado para manejar la lógica de API
export default class AjaxApis extends Component<{}, AjaxApisState> {
  // Inicializa el estado con un array vacío de pokemons
  state: AjaxApisState = {
    pokemons: [],
  };

  componentDidMount(): void {
    let url: string = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        json.results.forEach((el: { url: string }) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              let pokemon: PokemonState = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              let pokemons = [...this.state.pokemons, pokemon];
              this.setState({ pokemons });
            });
        });
      });
  }

  render(): JSX.Element {
    return (
      <>
        <h2>Peticiones Asíncronas en Componentes de Clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>CARGANDO...perriii</h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </>
    );
  }
}
