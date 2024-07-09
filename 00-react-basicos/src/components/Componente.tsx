// Definir la interfaz para los props
interface ComponenteProps {
  msg: string;
}

// Declarar el componente funcional tipado con la interfaz de props
const Componente = (props: ComponenteProps) => {
  return <h2>{props.msg}</h2>;
};

export default Componente;
