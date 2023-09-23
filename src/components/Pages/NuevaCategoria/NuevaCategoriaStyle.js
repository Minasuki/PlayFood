import styled from "styled-components";
//background-color: ${({ theme }) => theme.body};
export const Tabla = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CentrarTabla = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const Titulo = styled.h3`
  font-size: 40px;
  color: ${({ theme }) => theme.text};
`;

export const Input = styled.input`
  width: 100%;
  height: 33px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.body};
`;

export const FromContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding-top: 40px;
`;

export const FormField = styled.div`
  width: 20%;
`;
