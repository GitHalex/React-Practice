import { useState, useEffect } from "react";

const ScrollHooks = () => {
  const [scrollY, setScrolly] = useState<number>(0);

  useEffect(() => {
    // console.log("Moviendo el Scroll");
    const detectarScroll = () => setScrolly(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
    // Limpiar el efecto para evitar múltiples listeners
    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }); // Lista de dependencias vacía para ejecutar solo una vez en el montaje

  useEffect(() => {
    // console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    // console.log("Fase de Actualizacion");
  });

  useEffect(() => {
    return () => {
      // console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de Vida</h2>
      <p>Scroll y del Navegador {scrollY}px</p>
    </>
  );
};

export default ScrollHooks;
