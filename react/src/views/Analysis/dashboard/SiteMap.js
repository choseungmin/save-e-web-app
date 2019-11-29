import React from "react";
import { mapMakrer } from "./MapMarker";


const SiteMap = (props) => {

  const { serviceRanking, classes } = props;
  // const [naverMap, setNaverMap] = React.useState(null);
  let naverMap=null;
  let markers=[];
  let infoWindows=[];

  React.useEffect(() => {

    markers=[];

    // init naver map
    if(!!window.naver && !naverMap) {
      const position = new window.naver.maps.LatLng(37.41595810,126.68029040);
      naverMap = new window.naver.maps.Map('map', {
        center: position,
        zoom: 7,
        minZoom: 7,
        maxZoom: 12
      });
    }

    if(naverMap) {
      setMarker(serviceRanking)
    }

  },[serviceRanking]);

  const setMarker = (ismartList) => {
    if(null === ismartList) return;

    for(var i = 0; i < markers.length; i++){
      markers[i].setMap(null);
    }

    var latLngBounds= {
      minLat: 37.374336,
      maxLat: 37.4598709,
      minLng: 126.62957,
      maxLng: 126.7402198,
    };

    ismartList.map((v,i) => {
      const markerOptions = {
        position: new window.naver.maps.LatLng(v.latt,v.lngt),
        title: v,
        map: naverMap,
        icon: {
          content: mapMakrer(v.rnum,i).join(''),
          anchor: new window.naver.maps.Point(12, 37),
          origin: new window.naver.maps.Point(v.latt,v.lngt),
        },
      };

      const infoWindow = new window.naver.maps.InfoWindow({
        content: '<div style="width:100%;height:100%;text-align:center;padding:10px;padding-top:0px;padding-bottom: 0px; border-radius:10px; color:#000000">'+ v.siteName +'</div>'
      });

      markers.push(new window.naver.maps.Marker(markerOptions));
      infoWindows.push(infoWindow);

      if (i===0) {
        latLngBounds.minLat= v.latt;
        latLngBounds.maxLat= v.latt;
        latLngBounds.minLng= v.lngt;
        latLngBounds.maxLng= v.lngt;
      } else{
        if(latLngBounds.minLat > v.latt) {
          latLngBounds.minLat= v.latt;
        }else if(latLngBounds.maxLat < v.latt) {
          latLngBounds.maxLat= v.latt;
        }

        if(latLngBounds.minLng > v.lngt) {
          latLngBounds.minLng= v.lngt;
        }else if(latLngBounds.maxLng < v.lngt) {
          latLngBounds.maxLng= v.lngt
        }

      }
    });


    window.naver.maps.Event.addListener(naverMap, 'idle', function() {
      if(this===null) return ;
      console.log('markers', markers)
      updateMarkers(naverMap, markers);
    });


    for (var i=0, ii=markers.length; i<ii; i++) {
      // window.naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
    }

    // #중심선
    // var jeju = new window.naver.maps.LatLng((latLngBounds.minLat+latLngBounds.maxLat)/2, (latLngBounds.minLng+latLngBounds.maxLng)/2);
    // naverMap.setCenter(jeju);

    // #바운드
    var bounds = new window.naver.maps.LatLngBounds(
      new window.naver.maps.LatLng(latLngBounds.minLat, latLngBounds.minLng),
      new window.naver.maps.LatLng(latLngBounds.maxLat, latLngBounds.maxLng));
    naverMap.fitBounds(bounds); // 좌표 경계 이동
  };

  const updateMarkers = (map, markers) => {

    const mapBounds = map.getBounds();
    let marker, position;

    for (let i = 0; i < markers.length; i++) {

      marker = markers[i];
      position = marker.getPosition();

      if (mapBounds.hasLatLng(position)) {
        showMarker(map, marker);
      } else {
        hideMarker(map, marker);
      }
    }
  };

  const showMarker = (map, marker) => {

    if (marker.setMap()) return;
    marker.setMap(map);
  };

  const hideMarker = (map, marker) => {

    if (!marker.setMap()) return;
    marker.setMap(null);
  };


  return(
    <div id="map" className={classes.mapMakrer} style={{height: "400px"}}>
    </div>
  )
};

export default SiteMap
