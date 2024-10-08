import { useState } from "react";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import { HooksPersonalizados } from "./components/HooksPersonalizados";

function App() {
  const [count, setCount] = useState(0);
  let name: string = "Alex Primer App";
  let auth: boolean = true;
  let estaciones: string[] = ["Verano", "Otoño", "Invierno", "Primavera"];

  return (
    <>
      <h1>Vite + React</h1>
      <section>
        <Componente msg="Hola soy un componente 2 desde una props" />
        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={19}
          booleano={false}
          numeroArreglo={[1, 2, 3, 4, 5, 6]}
          objeto={{ nombre: "jon", correo: "jon@gmail.com" }}
          elementoReact={<i>este es un elemento React</i>}
          funcion={(num: number): number => num * num}
          componenteReact={
            <Componente msg="Soy un componente pasado como componente" />
          }
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />
        <hr />
        <AjaxApis />
        <hr />
        <ContadorHooks />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <HooksPersonalizados />
      </section>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <label htmlFor="name">Nombre: {name}</label>
        <input type="text" id="name" />
        <p>
          valores booleanoes:{" "}
          {auth ? "El usuario esta logeado" : "El usuario no este logoeado"}
        </p>
        <p>{2 + 1}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <ul>
          {estaciones.map((elemento: string, index: number) => (
            <li key={index}>{elemento}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
