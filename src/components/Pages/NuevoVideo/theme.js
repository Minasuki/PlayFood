import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    type: 'light', // Tipo de paleta de colores (light o dark)
    primary: {
      main: '#2196F3', // Color principal
    },
    secondary: {
      main: '#FF4081', // Color secundario
    },
    background: {
      default: '#F5F5F5', // Fondo predeterminado
      paper: '#FFFFFF', // Fondo de papel (tarjetas, etc.)d8e6ed
    },
    text: {
      primary: '#333333', // Color de texto principal
      secondary: '#888888', // Color de texto secundario
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Fuente de texto predeterminada
    fontSize: 16, // Tamaño de fuente predeterminado
  },
  // Otras propiedades personalizadas según sea necesario
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark', // Tipo de paleta de colores (light o dark)
    primary: {
      main: '#1976D2', // Color principal
    },
    secondary: {
      main: '#FF4081', // Color secundario
    },
    background: {
      default: '#121212', // Fondo predeterminado
      paper: '#1E1E1E', // Fondo de papel (tarjetas, etc.)
    },
    text: {
      primary: '#FFFFFF', // Color de texto principal
      secondary: '#CCCCCC', // Color de texto secundario
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Fuente de texto predeterminada
    fontSize: 16, // Tamaño de fuente predeterminado
  },
  // Otras propiedades personalizadas según sea necesario
});
