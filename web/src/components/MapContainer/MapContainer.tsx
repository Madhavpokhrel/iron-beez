// import { useMemo } from 'react'

// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

// // const MapContainer = () => {
// //   return (
// // <Map
// //   google={this.props.google}
// //   style={{ width: '50%', height: '50%' }}
// //   zoom={10}
// //   initialCenter={{
// //     lat: 39.96276,
// //     lng: -82.99629,
// //   }}
// //     />
// //   )
// // }

// // export default GoogleApiWrapper({
// //   apiKey: 'AIzaSyD_dMWarn6Ttikh0zkC-EdWoUWTvmrlGB4',
// // })(MapContainer)

// const MapContainer = () => {
//   const isLoaded = GoogleApiWrapper({
//     apiKey: 'AIzaSyD_dMWarn6Ttikh0zkC-EdWoUWTvmrlGB4',
//   })

//   if (!isLoaded) return <>Loading...</>
//   return <Map />
// }

// function Map() {
//   const center = { lat: 39.96276, lng: -82.99629 }

//   return (
//     <Map
//       zoom={10}
//       center={center}
//       style={{ width: '50%', height: '50%' }}
//     ></Map>
//   )
// }

// export default MapContainer

import React from 'react'

import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function MapContainer() {
  const defaultProps = {
    center: {
      lat: 39.96276,
      lng: -82.99629,
    },
    zoom: 10,
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '45vw', margin: '10px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  )
}
