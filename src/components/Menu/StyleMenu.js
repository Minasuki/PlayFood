import styled from "styled-components";

export const MenuContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #051e2f;
  border-bottom: 4px solid #5b87c9;

  @media (max-width: 280px) {
    height: 120px;
    align-items: center;
  }
`;

export const MenuContent = styled.div`
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;

export const MenuLogo = styled.img`
  height: 70px;
  width: auto;
`;

export const MenuButton = styled.button`
  background-color: #275675;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
`;

export const BotonesSeparados = styled.div`
  color: beige;
  width: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: flex-end;

  @media (max-width: 414px) {
    width: 190px;
  }

  @media (max-width: 280px) {
    width: 100px;
    flex-direction: column;
  }
`;
