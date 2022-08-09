import styled from "@emotion/styled";
import { breakPoints } from "../../commons/media/media";

export const Container = styled.main`
  padding: 100px 20px;
  @media ${breakPoints.tablet} {
    padding: 40px 15px;
  }
  @media ${breakPoints.mobile} {
    padding: 20px 15px;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media ${breakPoints.tablet} {
    margin-top: 50px;
  }
  @media ${breakPoints.mobile} {
    margin-top: 10px;
  }
`;

export const Inner = styled.section`
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
    @media ${breakPoints.tablet} {
      font-size: 20px;
      line-height: 20px;
    }
    @media ${breakPoints.mobile} {
      font-size: 10px;
      line-height: 10px;
    }
  }
  img {
    width: 967px;
    height: 597px;
    @media ${breakPoints.tablet} {
      width: 100%;
      height: 100%;
    }
    @media ${breakPoints.mobile} {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Name = styled.p`
  margin-top: 50px;
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  text-align: right;
  @media ${breakPoints.tablet} {
    margin-top: 20px;
    font-size: 20px;
    line-height: 20px;
  }
  @media ${breakPoints.mobile} {
    margin-top: 15px;
    font-size: 15px;
    line-height: 15px;
  }
`;

export const Image01 = styled.img`
  width: 100%;
  height: 100%;
`;
export const Image02 = styled(Image01)``;
export const Image03 = styled.img`
  width: 967px;
  height: 597px;
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
  }
`;
