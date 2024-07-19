import { Component, ReactNode } from "react";

// Props interface for Reloj
interface RelojProps {
  fecha: Date;
}

// EstadoState interface for CicloVida
interface EstadoState {
  fecha: Date;
  visible: boolean;
}

class Reloj extends Component<RelojProps> {
  constructor(props: RelojProps) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return (
      <>
        <h3>{this.props.fecha.toLocaleTimeString()}</h3>
      </>
    );
  }
}

export default class CicloVida extends Component<{}, EstadoState> {
  private temporizador: number | null = null;

  constructor(props: {}) {
    super(props);
    console.log(0, "El componente se inicializa, aún no está en el DOM");
    this.state = {
      fecha: new Date(),
      visible: false,
    };
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps: {}, prevState: EstadoState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        fecha: new Date(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    if (this.temporizador) {
      clearInterval(this.temporizador);
      this.setState({
        visible: false,
      });
    }
  };

  render(): ReactNode {
    console.log(
      4,
      "El componente se dibuja (o se redibuja por algún cambio) en el DOM"
    );

    return (
      <>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        {this.state.visible && <Reloj fecha={this.state.fecha} />}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}
