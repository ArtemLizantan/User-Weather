import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./googleMaps.scss";

const GoogleMapComponent = ({ lat, lng, imgURL }) => {
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: Number(lat),
    lng: Number(lng),
  };

  if (loadError)
    return (
      <h1 style={{ color: "red", fontWeight: "500", marginTop: "20px" }}>
        Error loading Google Maps
      </h1>
    );
  if (!isLoaded)
    return (
      <h1 style={{ color: "white", fontWeight: "500", marginTop: "20px" }}>
        Loading...
      </h1>
    );

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
      <Marker
        position={center}
        icon={{
          url: imgURL,
          scaledSize: new window.google.maps.Size(40, 40),
        }}
      />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
