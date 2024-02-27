import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import "./googleMaps.scss";
const GoogleMap = ({ lat, lng, imgMarker }) => {
  const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_MAP_ID;

  return (
    <APIProvider apiKey={apiKey}>
      <div className="map-wrapper">
        <Map
          zoom={15}
          mapId={mapId}
          center={{ lat: Number(lat), lng: Number(lng) }}
        >
          <AdvancedMarker position={{ lat: Number(lat), lng: Number(lng) }}>
            <img className="img-marker" src={imgMarker} alt="marker" />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMap;
