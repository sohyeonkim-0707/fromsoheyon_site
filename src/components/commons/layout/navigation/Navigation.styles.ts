import styled from "@emotion/styled";
import { breakPoints } from "../../media/media";

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 100px;
  padding: 25px 100px;
  z-index: 2;

  @media ${breakPoints.tablet} {
    height: 50px;
    padding: 5px 15px;
  }
  @media ${breakPoints.mobile} {
    height: 20px;
    padding: 0 5px;
  }
`;

export const Logo = styled.h1`
  height: 45px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  z-index: 3;
  @media ${breakPoints.tablet} {
    font-size: 30px;
    height: 40px;
    line-height: 40px;
  }
  @media ${breakPoints.mobile} {
    font-size: 13px;
    height: 20px;
    line-height: 18px;
  }
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MenuList = styled.li`
  margin-left: 20px;
  padding: 0;
  float: left;
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
  z-index: 3;
  :hover {
    color: #d9d9d9;
    transition: all 0.5s;
  }
  @media ${breakPoints.tablet} {
    list-style: none;
    font-size: 25px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
    margin-left: 10px;
  }
`;
