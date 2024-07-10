import { Component } from "react";

// Definimos la interfaz para las props de EstadoHijo
interface EstadoHijoProps {
  contadorHijo: number;
}

// Componente funcional EstadoHijo
function EstadoHijo(props: EstadoHijoProps) {
  return (
    <>
      <h3>{props.contadorHijo}</h3>
    </>
  );
}

// Definimos la interfaz para las props de Estado
interface EstadoProps {}

// Definimos la interfaz para el estado de Estado
interface EstadoState {
  contador: number;
}

export default class Estado extends Component<EstadoProps, EstadoState> {
  // Constructor para inicializar el estado
  constructor(props: EstadoProps) {
    super(props);
    this.state = {
      contador: 0,
    };

    // Iniciamos el contador
    /* setInterval(() => {
      this.setState((prevState) => ({
        contador: prevState.contador + 1,
      }));
    }, 1000); // Establecemos el intervalo de tiempo en 1000 ms (1 segundo) */
  }

  render() {
    return (
      <>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <EstadoHijo contadorHijo={this.state.contador} />
      </>
    );
  }
}
