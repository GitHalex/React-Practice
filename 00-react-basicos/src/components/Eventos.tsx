import { Component } from "react";

// Definimos la interfaz para las props de Estado
interface EstadoProps {}
// Definimos la interfaz para el estado de Estado
interface EstadoState {
  contador: number;
}

export class EventosES6 extends Component<EstadoProps, EstadoState> {
  constructor(props: EstadoProps) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }
  sumar() {
    console.log("Sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar() {
    console.log("Restando");
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <>
        <h2>Eventos en componentes ES6</h2>
        <button onClick={this.sumar}>Sumar</button>
        <button onClick={this.restar}>Restar</button>

        <h3>{this.state.contador}</h3>
      </>
    );
  }
}

// Properties Initializer
export class EventosES7 extends Component<EstadoProps, EstadoState> {
  state = {
    contador: 0,
  };

  //arrow functions
  sumar = () => {
    console.log("Sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = () => {
    console.log("Restando");
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <>
        <h2>Eventos en componentes ES7</h2>
        <button onClick={this.sumar}>Sumar</button>
        <button onClick={this.restar}>Restar</button>

        <h3>{this.state.contador}</h3>
      </>
    );
  }
}
