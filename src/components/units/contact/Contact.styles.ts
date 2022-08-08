import styled from "@emotion/styled";
import { breakPoints } from "../../commons/media/media";

export const Container = styled.main`
  padding: 176px 153px;
  @media ${breakPoints.tablet} {
    padding: 200px 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 70px 20px;
  }
`;

export const Wrapper = styled.section`
  margin-bottom: 117px;
`;

export const Arrow = styled.img`
  width: 220px;
  height: 231px;
  @media ${breakPoints.tablet} {
    width: 130px;
    height: 141px;
  }
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 111px;
  }
`;

export const Title = styled.div`
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 600;
  font-size: 80px;
  color: #000000;
  padding-left: 220px;
  margin-bottom: 311px;
  @media ${breakPoints.tablet} {
    font-size: 60px;
    padding-left: 140px;
    margin-bottom: 200px;
  }
  @media ${breakPoints.mobile} {
    font-size: 40px;
    padding-left: 110px;
    margin-bottom: 100px;
  }
`;

export const InnerWrapper = styled.div`
  justify-content: right;
  text-align: right;
`;

export const Email = styled.a`
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 40px;
  color: #000000;
  :hover {
    color: #d9d9d9;
  }
  @media ${breakPoints.tablet} {
    font-size: 30px;
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;
export const Tel = styled.div`
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 40px;
  color: #000000;
  @media ${breakPoints.tablet} {
    font-size: 30px;
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 700px;
  background-color: #d9d9d9;
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 533px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 300px;
  }
`;
