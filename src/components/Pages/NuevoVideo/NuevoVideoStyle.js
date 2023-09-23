import styled from "styled-components";
// ${({theme})=>theme.body};

export const FromBody = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
`;

export const FromContainer = styled.section`
  width: 95%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.body};
`;

export const Title3 = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

export const MarginBoton = {
  margin: "10px 10px",
};

export const VarianteTextField = {
  width: "80%",
};

export const Ingredient = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;

  @media (max-width: 912px) {
    width: 100%;
    align-items: center;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 412px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 412px) {
    width: 100%;
  }
`;

export const FormButtonClear = styled.button`
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 412px) {
    width: 100%;
  }
`;

export const LiFrom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const VarianteTextInput = {
  color: `${({ theme }) => theme.text}`,
};

export const VarianteFormControl = {
  margin: "0",
};
