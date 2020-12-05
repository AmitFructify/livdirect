import React from 'react';
import "./GoogleMap.scss";

import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

interface IGoogleMapProps{
}

const GoogleMap: React.FC<IGoogleMapProps> = (props: IGoogleMapProps) => {

  let defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC7aNfixfJaQtMn6rXzKHPTV2Rs97Pezz8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
 
export default GoogleMap;