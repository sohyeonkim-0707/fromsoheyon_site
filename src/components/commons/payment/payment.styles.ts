import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 82%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 20px;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  font-family: "Montserrat";
  font-style: italic;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  button {
    width: 100px;
    height: 30px;
    border: 1px solid #d9d9d9;
    background-color: white;
    border-radius: 50px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    :hover {
      background: #184124;
      color: white;
    }
  }
`;
