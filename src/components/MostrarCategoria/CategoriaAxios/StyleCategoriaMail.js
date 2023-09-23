import styled from "styled-components";

export const AppMail = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  background-color: ${({theme})=>theme.body};
`;

export const MailCategory = styled.div`
  width: 95%;
  min-height: 180px;
  background-color: ${({theme})=>theme.categoriaMail};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 6px;
  position: relative;
  overflow: hidden; /* Oculta el desbordamiento */

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 10px;
    color: ${({theme})=>theme.text};
  }
`;

export const MealItems = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Acomodar los elementos en una sola línea */
  padding: 0 10px; /* Espacio en los lados para el botón de scroll */
  overflow-x: hidden; /* Agrega el desplazamiento horizontal */
  overflow-y: hidden;
  scroll-behavior: smooth;
`;

export const MealItem = styled.div`
  width: 400px; /* Aumenta el ancho de las imágenes */
  height: 300px; /* Aumenta la altura de las imágenes */
  margin-right: 15px;
  border-radius: 6px;
  transition: transform 0.2s ease-in-out;
  flex-shrink: 0; /* Evita que las imágenes se reduzcan en el desplazamiento */
  overflow: hidden;
  scroll-behavior: smooth;

  @media (max-width: 412px) {
    width: 300px;
  height: 280px; 
  }

  @media (max-width: 375px) {
    width: 280px;
  height: 260px; 
  }

  img {
    width: 100%; /* Ajusta el ancho de las imágenes */
    height: 100%; /* Deja que las imágenes tengan altura variable */
    object-fit: cover;
    transform: scale(1.05); /* Ajusta el escalado */
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const MealListStyle = styled.div`
  display: flex;
  align-items: center; /* Centrar verticalmente los elementos */
  margin-bottom: 20px;
  position: relative;
`;

export const ScrollButton = styled.button`
  width: 30px;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; /* Posición absoluta */
  top: 0; /* Parte superior de la pantalla */
  z-index: 1; /* Colocar sobre los elementos */
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.1
    ); /* Cambiar el color al pasar el cursor */
    filter: invert(60%) sepia(82%) saturate(438%) hue-rotate(169deg)
      brightness(91%) contrast(95%);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #888888;
  }
`;

export const ScrollButtonIcon = styled.img`
  width: 32px; /* Aumenta el tamaño del ícono */
  height: 32px;
  filter: invert(60%) sepia(82%) saturate(438%) hue-rotate(169deg)
    brightness(91%) contrast(95%);
  transition: filter 0.2s; /* Agrega transición para cambios de filtro */
`;

export const IzquierdaStyle = styled.div`
  position: relative;
  left: 10px;
`;
export const DerechaStyle = styled.div`
  position: relative;
  right: 30px;
`;

