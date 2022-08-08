import styled from "@emotion/styled";
import { breakPoints } from "../../commons/media/media";

interface ILoginStyleProps {
  isActive: boolean;
}

export const Container = styled.main`
  padding: 287px 710px 275px 710px;
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

export const Id = styled.input`
  width: 100%;
  height: 80px;
  border: 1px solid #d9d9d9;
  outline: none;
  ::placeholder {
    padding-left: 10px;
    font-size: 16px;
  }
  @media ${breakPoints.tablet} {
    height: 60px;
    ::placeholder {
      padding-left: 5px;
      font-size: 5px;
    }
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    ::placeholder {
      padding-left: 2px;
      font-size: 2px;
    }
  }
`;

export const Password = styled.input`
  width: 100%;
  height: 80px;
  border: 1px solid #d9d9d9;
  outline: none;
  ::placeholder {
    padding-left: 10px;
    font-size: 16px;
  }
  @media ${breakPoints.tablet} {
    height: 60px;
    ::placeholder {
      padding-left: 5px;
      font-size: 5px;
    }
  }
  @media ${breakPoints.mobile} {
    height: 30px;
    ::placeholder {
      padding-left: 2px;
      font-size: 2px;
    }
  }
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 80px;
  background: #d9d9d9;
  border: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  background-color: ${(props: ILoginStyleProps) =>
    props.isActive ? "#184124" : "#d9d9d9"};
  color: ${(props: ILoginStyleProps) => (props.isActive ? "white" : "black")};

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

export const Forgot = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    font-size: 10px;
  }
  @media ${breakPoints.mobile} {
    font-size: 5px;
  }
`;
export const SignUpBtn = styled.button`
  width: 100%;
  height: 80px;
  border: none;
  outline: none;
  background: #d9d9d9;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;

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
