import { ReactNode } from "react";

// Definir la interfaz para los props
interface ComponentePropiedades {
  porDefecto?: string; // Hacer que 'val' sea opcional para permitir defaultProps
  cadena: string;
  numero: number;
  booleano: boolean;
  numeroArreglo: number[];
  objeto: {
    nombre: string;
    correo: string;
  };
  elementoReact: ReactNode;
  funcion: (num: number) => number;
  componenteReact: ReactNode;
}

// Declarar el componente funcional tipado con la interfaz de props

function Propiedades(props: ComponentePropiedades) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "verdadero" : "falso"}</li>
        <li>{props.numeroArreglo.join(", ")}</li>
        <li>Nombre:{props.objeto.nombre.toUpperCase()}</li>
        <li>Correo: {props.objeto.correo}</li>
        <li>
          funcion con props: {props.numeroArreglo.map(props.funcion).join(", ")}
        </li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

// Definir las defaultProps
Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

export default Propiedades;
