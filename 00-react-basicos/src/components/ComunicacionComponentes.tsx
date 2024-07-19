import { Component } from "react";

// Definimos la interfaz para el estado de Estado
interface EstadoState {
  contador: number;
}

// Definir la interfaz para las props del componente Hijo
interface HijoProps {
  mensaje: string;
  incrementarContador: () => void;
}

// Componente funcional Hijo con tipado de props
const Hijo: React.FC<HijoProps> = ({ mensaje, incrementarContador }) => {
  return (
    <>
      <h3>{mensaje}</h3>
      <button onClick={incrementarContador}>+</button>
    </>
  );
};

// Definir la interfaz para las props del componente ComunicacionComponentes (aunque no se usa en este ejemplo)
interface ComunicacionComponentesProps {}

// Clase ComunicacionComponentes extendida de Component con tipado de props y state
export default class ComunicacionComponentes extends Component<
  ComunicacionComponentesProps,
  EstadoState
> {
  state = {
    contador: 0,
  };

  incrementarContador = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre componentes</h2>

        <p className="pantalla-contador">{this.state.contador}</p>

        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="mensaje para el hijo1"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="mensaje para el hijo2"
        />
      </>
    );
  }
}
