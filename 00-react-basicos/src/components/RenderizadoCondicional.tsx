import { Component } from "react";

function Login() {
  return (
    <>
      <h3>Login</h3>
    </>
  );
}
function Logout() {
  return (
    <>
      <h3>Logout</h3>
    </>
  );
}

interface EstadoProps {}

interface EstadoState {
  session: boolean;
}

export default class RenderizadoCondicional extends Component<
  EstadoProps,
  EstadoState
> {
  constructor(props: EstadoProps) {
    super(props);
    this.state = {
      session: false,
    };
  }
  render() {
    return (
      <>
        <h2>Renderizado condicional</h2>
        {this.state.session ? <Login /> : <Logout />}
      </>
    );
  }
}
