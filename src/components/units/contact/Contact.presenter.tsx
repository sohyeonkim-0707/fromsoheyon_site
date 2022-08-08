import KakaoMapPage from "../../commons/kakaomap";
import * as S from "./Contact.styles";

export default function ContactUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Arrow src="/arrow.png"></S.Arrow>
        <S.Title>CONTACT</S.Title>
        <S.InnerWrapper>
          <S.Email href="mailto:hjthgus777@gmail.com">
            hjthgus777@gmail.com
          </S.Email>
          <S.Tel>010.8735.3125</S.Tel>
        </S.InnerWrapper>
      </S.Wrapper>
      <S.Map>
        <KakaoMapPage />
      </S.Map>
    </S.Container>
  );
}
