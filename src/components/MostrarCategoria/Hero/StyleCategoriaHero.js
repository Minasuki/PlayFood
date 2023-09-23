import styled from "styled-components";

export const AppHero = styled.div`
  width: 100%;
  max-width: 100%;
  height: 580px;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: ${({theme})=>theme.appHero};

  @media (max-width: 1500px) {
    height: 500px;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media (max-width: 912px) {
    height: 800px;
    align-items: center;
    padding-bottom: 10px;
  }
  @media (max-width: 414px) {
    height: 1000px;
  
  }
`;

export const SelectedMeal = styled.div`
  width: 95%;
  height: 500px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1500px) {
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 912px) {
    height: 700px;
    flex-direction: column;
    padding-bottom: 10px;
  }

  @media (max-width: 540px) {
    height: 850px;
    justify-content: center;
  }

  @media (max-width: 414px) {
   justify-content: center;
   height: 100%;
  
  }
 
`;

export const SelectedMealDetails = styled.div`
  width: 20%;
  height: 72%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1500px) {
    width: 50%;
    height: 72%;
    padding-right: 15px;
  }

  @media (max-width: 912px) {
    width: 100%;
    height: 45%;
    padding-bottom: 10px;
  }

  @media (max-width: 540px) {
    padding: 0;
  }

  @media (max-width: 414px) {
   flex-direction: column;
   height: 50%;
  }
`;

export const Videos = styled.div`
     width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

  @media (max-width: 1500px) {
    width: 50%;
    height: 72%;
  }

  @media (max-width: 912px) {
    width: 100%;
    height: 45%;
    padding-bottom: 10px;
  }

  @media (max-width: 540px) {
    padding: 0;
  }
`;

export const AppHeroDetails = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 414px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: center;
    width: 100%;
  }
`;

export const SelectedMealTitle = styled.div`
  width: 300px;
  height: 90px;
  display: flex;
  align-items: center;

  div {
    width: 80%;
    display: flex;
    justify-content: center;
  }

  h4 {
    font-weight: 400;
    font-size: 60px;
    color: white;
  }
`;

export const SelectedMealDetailsText = styled.div`
  font-weight: 400;
  font-size: 36px;
  color:${({theme})=>theme.text};
`;

export const AppHeroIngredients = styled.div`
  display: flex;
  width: 20%;
  max-height: 100%; /* Ajusta la altura máxima según sea necesario */
  overflow-y: auto;

  @media (max-width: 414px) {
    padding: 0;
    flex-direction: column;
    height: 40%;
    width: 50%;
  }

  /* Estilos para el scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #888888 #f0f0f0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555555;
  }
`;

export const SelectedMealIngredients = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 20px;

  h5 {
    font-size: 20px;
    color:${({theme})=>theme.text};
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    color:${({theme})=>theme.text};
  }

  li {
    color:${({theme})=>theme.text};
  }
`;

export const SelectedMealInstruction = styled.div`
  height: 50%;
  overflow-y: auto;
  font-weight: 300;
  color:${({theme})=>theme.text};

  

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555555;
  }
`;