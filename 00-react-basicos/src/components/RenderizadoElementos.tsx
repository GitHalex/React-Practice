import { Component } from "react";
import data from "../helpers/data.json";

interface EstadoProps {}

interface EstadoState {
  seasons: string[];
}

// Define la interfaz para las props de ElementoLista
interface EstadoFrameworks {
  name: string;
  web: string;
}

function ElementoLista(props: EstadoFrameworks) {
  return (
    <li>
      <a href={props.web} target="_blank">
        {props.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component<
  EstadoProps,
  EstadoState
> {
  constructor(props: EstadoProps) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    console.log(data);

    return (
      <>
        <div>
          <h2>Renderizado de Elementos</h2>
          <h3>Estaciones del año</h3>
          <ol>
            {this.state.seasons.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ol>
          <hr />
          <h3>Frameworks Fronted JavaScript</h3>
          <ul>
            {data.frameworks.map((el) => (
              <ElementoLista key={el.id} name={el.name} web={el.web} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
