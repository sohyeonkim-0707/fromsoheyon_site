import styled from "@emotion/styled";
import { breakPoints } from "../../media/media";

interface IAnswerStyleProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 30px;
`;

export const Wrapper = styled.div`
  width: 80%;
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

export const UpdateIcon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

export const CommentBottm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  width: 130px;
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  background-color: white;
  background-color: ${(props: IAnswerStyleProps) =>
    props.isActive ? "#184124" : ""};
  color: ${(props: IAnswerStyleProps) => (props.isActive ? "white" : "")};
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

export const Count = styled.div`
  font-size: 13px;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const CommentError = styled.div`
  width: 100%;
  color: red;
  font-size: 13px;
`;
