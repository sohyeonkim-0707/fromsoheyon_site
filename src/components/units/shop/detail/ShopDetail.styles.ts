import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/media/media";

export const Container = styled.main`
  padding: 190px 153px 100px 153px;
  @media ${breakPoints.tablet} {
    padding: 130px 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 70px 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const left = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Photo = styled.img`
  width: 590px;
  height: 800px;
  background-color: #d9d9d9;
  @media ${breakPoints.tablet} {
    width: 400px;
    height: 550px;
  }
  @media ${breakPoints.mobile} {
    width: 300px;
    height: 400px;
  }
`;

export const right = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
    width: 50%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 50px;
    border-bottom: 1px solid #d9d9d9;
  }
`;

export const Inner01 = styled.div``;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 90px;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #000000;
  @media ${breakPoints.tablet} {
    font-size: 30px;
    margin-bottom: 50px;
  }
  @media ${breakPoints.mobile} {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const Remark = styled.p`
  margin: 0 0 35px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  @media ${breakPoints.tablet} {
    margin: 0;
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    margin: 0 0 20px 0;
    font-size: 15px;
  }
`;

export const SizeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const Size = styled.p`
  margin: 0 0 35px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  color: #d9d9d9;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    margin: 0 0 20px 0;
    font-size: 10px;
  }
`;

export const Contents = styled.p`
  margin-bottom: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  @media ${breakPoints.tablet} {
    margin-bottom: 70px;
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 40px;
    font-size: 15px;
  }
`;

export const Price = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  @media ${breakPoints.tablet} {
    margin-top: 50px;
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const BuyBtn = styled.button`
  width: 200px;
  height: 80px;
  border: none;
  border-radius: 50px;
  background-color: white;
  outline: none;
  font-style: italic;
  font-weight: 400;
  font-size: 25px;
  outline: none;
  cursor: pointer;
  :hover {
    color: #d9d9d9;
    transition: all 0.5s;
  }
  @media ${breakPoints.tablet} {
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 111px;

  @media ${breakPoints.tablet} {
    margin-top: 50px;
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
    margin-top: 50px;
  }
`;

export const BackBtn = styled.button`
  width: 230px;
  height: 50px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  background-color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: #184124;
    color: #ffffff;
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
    font-size: 10px;
    margin-top: 10px;
  }
`;

export const EditBtn = styled(BackBtn)`
  background-color: white;
  color: black;
`;
export const DeleteBtn = styled(BackBtn)`
  margin-left: 31px;
  @media ${breakPoints.tablet} {
    margin-left: 19px;
  }
  @media ${breakPoints.mobile} {
    margin-left: 0;
  }
`;
