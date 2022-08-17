import styled from "@emotion/styled";
import Script from "next/script";
import { useEffect } from "react";
import { breakPoints } from "../media/media";

const Map = styled.div`
  width: 100%;
  height: 700px;
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 533px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 300px;
  }
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=e65045b54af369c9ffbee221ee99c7bf&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.56443040385739,
            126.92148222124001
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const imageSrc = "/office.png";
        const imageSize = new window.kakao.maps.Size(64, 69);
        const imageOption = {
          offset: new window.kakao.maps.Point(27, 69),
        };

        // 마커가 표시될 위치
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
          image: markerImage,
        });

        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(map);

        // eslint-disable-next-line no-new, new-cap
        new window.kakao.maps.event.addListener(map, "click", function (
          mouseEvent
        ) {
          const latlng = mouseEvent.latLng;

          marker.setPosition(latlng);
        });

        // eslint-disable-next-line one-var
        const iwContent =
            '<div style="padding:5px;">Here <br><a href="https://map.kakao.com/?urlX=482777.0&urlY=1129158.0&itemId=7999120&q=%EC%97%B0%EB%82%A8%EB%8F%99%EC%A3%BC%EB%AF%BC%EC%84%BC%ED%84%B0&srcid=7999120&map_type=TYPE_MAP&from=roughmap  Hello World!, 37.56443040385739,126.92148222124001" target="_blank">🚗 🚌🚶🏻‍♀️🚶🏻👩🏻‍🦽🧑🏻‍🦽🧑🏻‍🦯</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          iwPosition = new window.kakao.maps.LatLng(
            37.56443040385739,
            126.92148222124001
          );

        // 인포윈도우를 생성합니다
        const infowindow = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent,
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker);
      });
    };
  }, []);

  return (
    <div>
      <Script src="" />
      <Map id="map"></Map>
    </div>
  );
}
