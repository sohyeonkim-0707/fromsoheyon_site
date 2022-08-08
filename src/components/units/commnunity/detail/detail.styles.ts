import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/media/media";

export const Container = styled.main`
  padding: 170px 167px;
  @media ${breakPoints.tablet} {
    padding: 200px 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 70px 20px;
  }
`;

export const Name = styled.div`
  margin-bottom: 16px;
  text-align: right;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  text-align: right;
  @media ${breakPoints.tablet} {
    font-size: 20px;
    line-height: 25px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const Date = styled.div`
  margin-bottom: 23px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: right;
  color: #d9d9d9;
  @media ${breakPoints.tablet} {
    font-size: 10px;
    line-height: 13px;
  }
  @media ${breakPoints.mobile} {
    font-size: 5px;
    line-height: 8px;
  }
`;

export const Title = styled.div`
  width: 100%;
  margin-bottom: 16px;
  text-align: left;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  @media ${breakPoints.tablet} {
    font-size: 30px;
    line-height: 39px;
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
    line-height: 29px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  @media ${breakPoints.tablet} {
    margin-bottom: 60px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 30px;
  }
`;

export const Contents = styled.div`
  width: 100%;
  margin-bottom: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: left;
  line-height: 37px;
  @media ${breakPoints.tablet} {
    font-size: 20px;
    line-height: 27px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
    line-height: 17px;
  }
`;

export const Video = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 100px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;

  @media ${breakPoints.tablet} {
    margin-top: 30px;
  }
  @media ${breakPoints.mobile} {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Backbtn = styled.button`
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
  outline: none;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    background-color: #184124;
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

export const EditBtn = styled(Backbtn)``;

export const DeleteBtn = styled(Backbtn)`
  margin-left: 29px;
  @media ${breakPoints.tablet} {
    margin-left: 19px;
  }
  @media ${breakPoints.mobile} {
    margin-left: 0;
  }
`;
