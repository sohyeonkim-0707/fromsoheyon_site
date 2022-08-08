import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/media/media";

const Wrapper = styled.main`
  width: calc(100% / 3);
  border: none;
  :hover {
    transition: 0.5s ease-out;
    opacity: 0.8;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 800px;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    height: 500px;
  }
  @media ${breakPoints.mobile} {
    height: 180px;
  }
`;

export default function Item(props: any) {
  return (
    <Wrapper>
      <Photo
        src={`https://storage.googleapis.com/${props.el.images[0]}`}
        alt="상품이미지"
        id={props.el._id}
        onClick={props.onClickDetailPhoto(props.el)}
      />
    </Wrapper>
  );
}
