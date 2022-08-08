import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/media/media";

export const Container = styled.div`
  padding: 195px 153px 72px 153px;
  h1 {
    font-family: "Montserrat";
    font-style: italic;
    font-weight: 400;
    font-size: 30px;
    @media ${breakPoints.tablet} {
      font-size: 25px;
    }
    @media ${breakPoints.mobile} {
      font-size: 10px;
    }
  }
  @media ${breakPoints.tablet} {
    padding: 100px 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 40px 5px;
  }
`;

export const Table = styled.div`
  height: 772px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #000000;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  padding: 20px 65px;
  border-bottom: 1px solid #d9d9d9;
  @media ${breakPoints.tablet} {
    padding: 20px 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 20px 20px;
  }
`;

export const Number = styled.div`
  width: 10%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 25px;
  line-height: 30px;
  @media ${breakPoints.tablet} {
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const Title = styled(Number)`
  width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Writer = styled(Number)`
  width: 25%;
`;
export const Date = styled(Number)`
  width: 25%;
`;

export const PaginationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 13px;

  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    justify-content: center;
  }
`;

export const WriteBtn = styled.button`
  width: 230px;
  height: 50px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  background-color: white;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  cursor: pointer;
  :hover {
    transition: all 0.5s;
    background: #184124;
    border: 1px solid #ffffff;
    color: #ffffff;
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
    margin-top: 10px;
    font-size: 10px;
  }
`;
