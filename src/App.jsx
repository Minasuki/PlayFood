import "./components/style/normalize.css";
import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NuevoVideo from "./components/Pages/NuevoVideo/NuevoVideo";
import CategoriaMail from "./components/MostrarCategoria/CategoriaAxios/CategoriaMail";
import NuevaCategoria from "./components/Pages/NuevaCategoria/NuevaCategoria";

//dark mode
import { temaClaro, temaOscuro } from "./components/mobx/themes";
import { ThemeProvider } from "styled-components";
import { UseMode } from "./components/mobx/UseMode";

const App = () => {
  const { temaMode, toggleTema } = UseMode();
  return (
    <ThemeProvider theme={temaMode ? temaOscuro : temaClaro}>
      {/*  ///////////////////////////////////////////////////  */}
      {/*  //////////  Aqui se muestra el Hero  //////////////  */}
      <Router>
        <Menu toggleTema={toggleTema} />
        <Routes>
          <Route path="/PlayFood/" element={<CategoriaMail />} />
          <Route path="/new-category/" element={<NuevaCategoria />} />
          <Route path="/new-video/" element={<NuevoVideo />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
