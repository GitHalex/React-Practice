import { useState } from "react";

export default function ContadorHooks() {
  console.log(useState());
  // Declarar un estado llamado "count" con un valor inicial de 0
  const [contador, setContador] = useState<number>(0);

  // Funcion sumar el contador
  const sumar = () => setContador(contador + 1);

  // Funcion restar el contador
  const restar = () => setContador(contador - 1);

  return (
    <>
      <h2>Hooks - useState</h2>
      <button onClick={sumar}>➕</button>
      <button onClick={restar}>➖</button>
      <h3>{contador}</h3>
    </>
  );
}
