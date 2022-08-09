import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/media/media";

export const Container = styled.main`
  padding: 100px 0px 0px 0px;

  @media ${breakPoints.tablet} {
    padding: 50px 0px 0px 0px;
  }
  @media ${breakPoints.mobile} {
    padding: 20px 0px 0px 0px;
  }
`;
