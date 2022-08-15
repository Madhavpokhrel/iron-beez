import React from 'react';

import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function MapContainer() {
  const defaultProps = {
    center: {
      lat: 39.96276,
      lng: -82.99629,
    },
    zoom: 10,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        height: '90vh',
        width: '45vw',
        margin: '10px',
        position: 'sticky',
        top: '10px',
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAGzyLx6YoUcqfV9_tqLJG5KmCid0RW4vw' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent lat={39.96276} lng={-82.99629} text="" /> */}
      </GoogleMapReact>
    </div>
  );
}
