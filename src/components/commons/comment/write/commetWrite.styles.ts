import styled from "@emotion/styled";
import { breakPoints } from "../../media/media";

interface ICommentWriteStyleProps {
  isActive: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  @media ${breakPoints.mobile} {
    font-size: 20px;
    line-height: 27px;
  }
`;

export const Contents = styled.input`
  width: 100%;
  height: 154px;
  margin-bottom: 16px;
  border: 1px solid #d9d9d9;
  background: white;
  outline: none;
  @media ${breakPoints.mobile} {
    height: 100px;
    ::placeholder {
      font-size: 10px;
      padding-left: 3px;
    }
  }
`;

export const CommentBottm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Count = styled.div`
  font-size: 13px;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const Error = styled.div`
  width: 100%;
  margin-left: 30px;
  color: red;
  font-size: 13px;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  background-color: white;
  background-color: ${(props: ICommentWriteStyleProps) =>
    props.isActive ? "#184124" : ""};
  color: ${(props: ICommentWriteStyleProps) => (props.isActive ? "white" : "")};
  cursor: pointer;
  :hover {
    background: #184124;
    color: white;
    transition: all 0.5s;
  }
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 20px;
    font-size: 10px;
  }
`;
