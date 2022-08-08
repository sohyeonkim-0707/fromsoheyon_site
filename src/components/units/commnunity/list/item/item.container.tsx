import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { getDate } from "../../../../../commons/libraries/date";
import { indexNum } from "../../../../../commons/store";
import { breakPoints } from "../../../../commons/media/media";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 20px 65px;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  :hover {
    background-color: #d9d9d9;
    transition: all 0.5s;
  }
  @media ${breakPoints.tablet} {
    padding: 20px 20px;
  }
  @media ${breakPoints.mobile} {
    padding: 20px 20px;
  }
`;

const Number = styled.div`
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

const Title = styled(Number)`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 40%;
  white-space: nowrap;
`;

const Writer = styled(Number)`
  width: 25%;
`;
const Date = styled(Number)`
  width: 25%;
`;

export default function Item(props: any) {
  const [index] = useRecoilState(indexNum);
  return (
    <Row>
      <Number> {props.index + index + 1}</Number>
      <Title
        id={props.el._id}
        onClick={props.onClickMoveToBoardDetail(props.el)}
      >
        {props.el.title}
      </Title>
      <Writer>{props.el.writer}</Writer>
      <Date>{getDate(props.el.createdAt)}</Date>
    </Row>
  );
}
