import styled from "@emotion/styled";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { breakPoints } from "../../media/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 147px;
  padding: 20px 0px;
  border-bottom: 1px solid #d9d9d9;
  @media ${breakPoints.mobile} {
    height: 120px;
  }
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

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const ReplyBtn = styled.button`
  width: 115px;
  height: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  background-color: white;
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

export const OptionWrapper = styled.div``;

export const EditIcon = styled(EditOutlined)`
  margin-right: 10px;
  color: gray;
  cursor: pointer;
`;

export const DeleteIcon = styled(CloseOutlined)`
  margin-right: 10px;
  color: gray;
  cursor: pointer;
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

export const Scroll = styled.div`
  height: 500px;
  overflow: auto;
`;
