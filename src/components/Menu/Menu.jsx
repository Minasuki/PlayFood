import  { useState } from "react";
import PropTypes from 'prop-types';
import logo from "../img/playfood.png"; // Reemplaza la ruta con la ubicación real de tu imagen
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  MenuContainer,
  MenuContent,
  MenuLogo,
  MenuButton,
  BotonesSeparados,
} from "./StyleMenu";

//dark
import IconButton from "@mui/material/IconButton";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

const Menu = ({ toggleTema }) => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode); // Cambia el estado local
    toggleTema(); // Llama a la función del componente padre para cambiar el modo en toda la aplicación
  };

  return (
    <MenuContainer>
      <MenuContent>
        <Link to="/PlayFood">
          <MenuLogo src={logo} alt="Logo" />
        </Link>
        <BotonesSeparados>
          {location.pathname === "/PlayFood" && (
            <Link to="/new-video">
              <MenuButton>Nuevo Video</MenuButton>
            </Link>
          )}
          <IconButton
            onClick={handleDarkModeToggle}
            color="inherit"
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </BotonesSeparados>
        <Outlet />
      </MenuContent>
    </MenuContainer>
  );
};


Menu.propTypes = {
  toggleTema: PropTypes.func.isRequired,
};

export default Menu;
