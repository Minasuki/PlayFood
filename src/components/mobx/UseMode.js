import { useState } from "react";

export const UseMode = () => {
    const [temaMode, setTema] = useState(true);
  
    const toggleTema = () => {
      setTema((temaMode) => !temaMode);
    };
  
    return { temaMode, toggleTema };
  };