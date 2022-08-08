import styled from "@emotion/styled";
import { breakPoints } from "../../commons/media/media";

interface ISignUpStyleProps {
  isActive: boolean;
}

export const Container = styled.main`
  padding: 287px 710px 187px 710px;
  @media ${breakPoints.tablet} {
    padding: 150px 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 50px 0;
  }
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 500px;
  margin-bottom: 36px;
  @media ${breakPoints.tablet} {
    width: 400px;
    margin-bottom: 26px;
  }
  @media ${breakPoints.mobile} {
    width: 200px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const TextBox = styled.input`
  width: 100%;
  height: 80px;
  outline: none;
  border: 1px solid #d9d9d9;
  ::placeholder {
    font-size: 16px;
    padding-left: 10px;
  }
  @media ${breakPoints.tablet} {
    height: 60px;
    ::placeholder {
      font-size: 5px;
      padding-left: 5px;
    }
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    ::placeholder {
      font-size: 2px;
      padding-left: 2px;
    }
  }
`;

export const SignUpBtn = styled.button`
  width: 100%;
  height: 80px;
  background: #d9d9d9;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  background-color: ${(props: ISignUpStyleProps) =>
    props.isActive ? "#184124" : "#d9d9d9"};
  color: ${(props: ISignUpStyleProps) => (props.isActive ? "white" : "black")};
  :hover {
    background: #184124;
    color: white;
    transition: all 0.5s;
  }
  @media ${breakPoints.tablet} {
    height: 60px;
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    font-size: 10px;
  }
`;

export const Error = styled.div`
  color: red;
  @media ${breakPoints.tablet} {
    font-size: 10px;
  }
  @media ${breakPoints.mobile} {
    font-size: 5px;
  }
`;
