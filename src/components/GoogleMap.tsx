import React from 'react';
import "./GoogleMap.scss";

import GoogleMapReact from 'google-map-react';

import {ReactComponent as Marker} from '../icons/marker.svg';
 

interface IGoogleMapProps{
  markers:any[]
}

const GoogleMap: React.FC<IGoogleMapProps> = (props: IGoogleMapProps) => {

  let defaultProps = {
    center: {
      lat: 13.016403,
      lng: 77.66099
    },
    zoom: 13
  };

  const AnyReactComponent = ({ text }: any) => <div className="mapMarker"><span><Marker width="25px" height="25px"/></span>{text}</div>;

  const markers = props.markers.map((store:any)=>
      <AnyReactComponent key={store.id}
      lat={Number(store.latitude.substring(0, 9))}
      lng={Number(store.longitude.substring(0, 9))}
      text={store.display_name}
    />
  );

  return (
    <div style={{ height: '90%', width: '100%' }}>
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