import styled from "@emotion/styled";
import { breakPoints } from "../../media/media";

export const Wrapper = styled.footer`
  height: 400px;
  padding: 1%;
  background: #184124;
  padding-left: 122px;
  padding-top: 108px;
  @media ${breakPoints.tablet} {
    padding: 40px 20px;
    height: 200px;
  }
  @media ${breakPoints.mobile} {
    height: 100px;
    padding: 10px 15px;
  }
`;

export const MenuList = styled.div`
  margin-bottom: 36px;
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 27px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 8px;
    font-size: 10px;
    line-height: 17px;
  }
`;

export const Instagram = styled.a`
  margin-bottom: 36px;
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
  cursor: pointer;
  background: #184124;
  outline: none;
  border: none;
  @media ${breakPoints.tablet} {
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 27px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 0px;
    font-size: 10px;
    line-height: 17px;
  }
`;
