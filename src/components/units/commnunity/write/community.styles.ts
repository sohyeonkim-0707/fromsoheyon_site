import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { breakPoints } from "../../../commons/media/media";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface ICommunityWriteStyleProps {
  isActive: boolean;
}

export const Container = styled.form`
  padding: 190px 153px 100px 153px;
  @media ${breakPoints.tablet} {
    padding: 130px 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 30px 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const left = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 800px;
  width: 50%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    width: 100%;
    height: 500px;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 0;
  left: 74px;
  width: 30px;
  border: none;
  background: none;
  color: white;
  font-size: 20px;
  @media ${breakPoints.tablet} {
    color: white;
  }
  @media ${breakPoints.mobile} {
    color: white;
    left: 0px;
  }
`;

export const right = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-top: 10px;
  }
`;

export const Inner = styled.div`
  width: 100%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    margin-top: 70px;
  }
`;

export const Inner2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 30px;
  }
`;

export const InnerWrapper = styled.div`
  width: 48%;
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  @media ${breakPoints.tablet} {
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;

export const InputText = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #d9d9d9;
  outline: none;
`;

export const InputText2 = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #d9d9d9;
  outline: none;
`;

export const InputText3 = styled(ReactQuill)`
  width: 100%;
  height: 292px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    height: 200px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media ${breakPoints.tablet} {
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
    margin-top: 20px;
  }
`;

export const BackBtn = styled.button`
  width: 230px;
  height: 50px;
  margin-top: 79px;
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
    margin-top: 10px;
    font-size: 10px;
  }
`;

export const SubmitBtn = styled(BackBtn)`
  background-color: ${(props: ICommunityWriteStyleProps) =>
    props.isActive ? "#184124" : ""};
  color: ${(props: ICommunityWriteStyleProps) =>
    props.isActive ? "white" : ""};
`;

export const CancleBtn = styled(BackBtn)`
  margin-left: 31px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    margin-left: 0;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 10px;
  @media ${breakPoints.tablet} {
    font-size: 10px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 10px;
    font-size: 5px;
  }
`;
