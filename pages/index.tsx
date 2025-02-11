import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const MainPhoto = styled.img`
  max-width: 100%;
  height: 100%;
  display: block;
`;

export default function first() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <MainPhoto src="/01.jpg" alt="베를린 공원"></MainPhoto>
        <MainPhoto src="/02.jpg" alt="냇가 얼음"></MainPhoto>
        <MainPhoto src="/03.jpg" alt="들꽃과 자전거"></MainPhoto>
        <MainPhoto src="/04.jpg" alt="나무"></MainPhoto>
      </Slider>
    </Wrapper>
  );
}
