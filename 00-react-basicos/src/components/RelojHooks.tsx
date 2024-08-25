import { useState, useEffect } from "react";

// definir las props para el componenet Reloj

interface RelojProps {
  hora: string;
}

// tipar el componenete Relok
function Reloj({ hora }: RelojProps) {
  return <h3>{hora}</h3>;
}

// Tipar el componenete RelojHooks

const RelojHooks: React.FC = () => {
  const [hora, setHora] = useState<string>(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    let temporizador: number;

    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    }
    return () => {
      if (temporizador) {
        clearInterval(temporizador);
      }
      console.log("Fase de Desmontaje");
    };
  }, [visible]);

  return (
    <div>
      <h2>Reloj con Hooks</h2>
      {visible && <Reloj hora={hora} />}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </div>
  );
};

export default RelojHooks;
