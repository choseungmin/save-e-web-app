import React from "react";
import markerMint from "./map-marker.png";

const KakaoSiteMap = (props) => {

  const { serviceRanking, classes } = props;
  const [kakao, setKakao] = React.useState(window.kakao);
  const [kakaoMap, setKakaoMap] = React.useState(null);
  let markers=[];

  React.useEffect(() => {

    markers=[];
    if(!!kakao && !kakaoMap) {
      const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      const options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.41595810,126.68029040), //지도의 중심좌표.
        level: 7, //지도의 레벨(확대, 축소 정도)
        minLevel: 3,

      };
      setKakaoMap(new kakao.maps.Map(container, options)); //지도 생성 및 객체 리턴

    }

    if(kakaoMap) {
      setMarker(serviceRanking);
    }

  },[serviceRanking]);

  const setMarker = (ismartList) => {

    const points = ismartList.map(ismartInfo => {
      return new window.kakao.maps.LatLng(ismartInfo.latt, ismartInfo.lngt);
    });

    // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
    const bounds = new kakao.maps.LatLngBounds();

    for (let i = 0; i < points.length; i++) {
      var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(48, 52), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(20, 40)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(markerMint, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

      // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
      const marker = new kakao.maps.Marker({
        position : points[i],
        image: markerImage // 마커이미지 설정
      });
      marker.setMap(kakaoMap);

      // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      var content = `<div class="customoverlay">
        <span class="title">${(i+1)}</span>
      </div>`;

      // 커스텀 오버레이를 생성합니다
      var customOverlay = new kakao.maps.CustomOverlay({
        map: kakaoMap,
        position: points[i],
        content: content,
        yAnchor: 1
      });
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(points[i]);
    }
    // 지도의 모든 마커가 표시되도록 설정한다.
    kakaoMap.setBounds(bounds);

    //현재 줌 레벨 이상으로 줌아웃이 되지 않도록 막는다.
    const nowLevel = kakaoMap.getLevel();
    kakaoMap.setMaxLevel(nowLevel);
  };

  return(
    <div id="map" className={classes.mapMakrer} style={{height: "400px"}}>
    </div>
  )
};

export default KakaoSiteMap
