import * as S from "./About.styles";

export default function AboutUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Inner>
          <p>FILM PHOTOGRAPHER</p>
          <p>CURRENTRLY BASED IN SEOUL, KOREA</p>
          <img src="/about_01.jpg" alt="테이블과 과일"></img>
        </S.Inner>
        <S.Name>피동보다 능동</S.Name>
      </S.Wrapper>
      <S.Wrapper>
        <S.Image01 src="/about_02.jpg" alt="분홍꽃 나무"></S.Image01>
        <div>Berlin, Germany, 2020</div>
      </S.Wrapper>
      <S.Wrapper>
        <S.Image02 src="/about_03.jpg" alt="버들나무"></S.Image02>
        <div>Seoul, Korea, 2021</div>
      </S.Wrapper>
      <S.Wrapper>
        <S.Image03 src="/about_04.jpg" alt="겨울 숲"></S.Image03>
        <div>Byeonsan, Korea, 2019</div>
      </S.Wrapper>
    </S.Container>
  );
}
