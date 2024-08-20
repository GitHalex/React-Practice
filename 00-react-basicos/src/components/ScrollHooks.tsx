import { useState, useEffect } from "react";

const ScrollHooks = () => {
  const [scrollY, setScrolly] = useState<number>(0);
  useEffect(() => {
    console.log("Fase de montaje");

    const detectarScroll = () => setScrolly(window.scrollY);

    window.addEventListener("scroll", detectarScroll);
  }, []);

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de Vida</h2>
      <p>Scroll y del Navegador {scrollY}px</p>
    </>
  );
};

export default ScrollHooks;
