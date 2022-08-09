import styled from "@emotion/styled";
import { breakPoints } from "../../commons/media/media";

export const Container = styled.main`
  padding: 176px 153px 345px 153px;
  margin: 0 auto;
  @media ${breakPoints.tablet} {
    padding: 150px 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 50px 20px;
  }
`;

export const Wrapper01 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-bottom: 116px;
  @media ${breakPoints.tablet} {
    margin-bottom: 50px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 20px;
    justify-content: center;
  }

  button {
    width: 230px;
    height: 50px;
    margin-left: 26px;
    border: 1px solid #d9d9d9;
    background-color: white;
    border-radius: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    :hover {
      background: #184124;
      color: white;
      transition: all 0.5s;
    }
    @media ${breakPoints.tablet} {
      width: 200px;
      height: 40px;
      font-size: 15px;
      line-height: 24px;
    }
    @media ${breakPoints.mobile} {
      width: 200px;
      height: 30px;
      margin-left: 0px;
      font-size: 10px;
    }
  }
`;

export const Wrapper02 = styled.section``;
export const Title = styled.h1`
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  @media ${breakPoints.tablet} {
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  padding: 15px 85px;
  border: 1px solid #d9d9d9;
  @media ${breakPoints.tablet} {
    height: 150px;
  }
  @media ${breakPoints.mobile} {
    height: 70px;
    padding: 15px 20px;
  }
`;

export const NoProduct = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  @media ${breakPoints.tablet} {
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const Name = styled.div`
  width: 20%;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
`;

export const Price = styled(Name)``;
export const Date = styled(Name)``;
