import styled from "@emotion/styled";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { breakPoints } from "../../media/media";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 147px;
  margin-top: 30px;
  padding: 20px 0px;
  @media ${breakPoints.mobile} {
    height: 120px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 100%;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  @media ${breakPoints.mobile} {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const CommentFetchHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;
export const Contents = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  @media ${breakPoints.mobile} {
    font-size: 15px;
    line-height: 19px;
  }
`;

export const DateString = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #d9d9d9;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const EditIcon = styled(EditOutlined)`
  margin-right: 10px;
  color: gray;
  cursor: pointer;
`;

export const UpdateIconButton = styled.button`
  margin-right: 10px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

export const DeleteIcon = styled(CloseOutlined)`
  margin-right: 10px;
  color: gray;
  cursor: pointer;
`;

export const DeleteIconButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;
