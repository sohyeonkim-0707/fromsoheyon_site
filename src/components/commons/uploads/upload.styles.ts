import styled from "@emotion/styled";
import { breakPoints } from "../media/media";

export const UploadImage = styled.img`
  width: 590px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.tablet} {
    width: 500px;
    height: 650px;
  }
  @media ${breakPoints.mobile} {
    width: 300px;
    height: 400px;
  }
`;

export const UploadBtn = styled.button`
  width: 225px;
  height: 61px;
  border: 1px solid #d9d9d9;
  background: white;
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  line-height: 61px;
  outline: none;
  cursor: pointer;
  :hover {
    background: #184124;
    color: white;
    transition: all 0.5s;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
