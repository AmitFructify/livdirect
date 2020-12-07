import React from 'react';
import "./GoogleMap.scss";

import GoogleMapReact from 'google-map-react';

import {ReactComponent as Marker} from '../icons/marker.svg';
 
const AnyReactComponent = ({ text }: any) => <div className="mapMarker"><span><Marker width="25px" height="25px"/></span>{text}</div>;

interface IGoogleMapProps{
  markers:any[]
}

const GoogleMap: React.FC<IGoogleMapProps> = (props: IGoogleMapProps) => {

  let latitude = Number(props.markers[0].latitude.substring(0, 9));
  let longitude = Number(props.markers[0].longitude.substring(0, 9));

  let defaultProps = {
    center: {
      lat: latitude,
      lng: longitude
    },
    zoom: 12
  };

  const markers = props.markers.map((store:any)=>
      <AnyReactComponent key={store.id}
      lat={Number(store.latitude.substring(0, 9))}
      lng={Number(store.longitude.substring(0, 9))}
      text={store.display_name}
    />
  );

  return (
    <div style={{ height: '84%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC7aNfixfJaQtMn6rXzKHPTV2Rs97Pezz8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}
 
export default GoogleMap;