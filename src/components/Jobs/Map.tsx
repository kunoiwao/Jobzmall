import { FC } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map: FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading...</div>;

  const mapOptions = {
    mapContainerStyle: {
      width: "100%",
      height: "400px",
    },
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 10,
  };

  return (
    <GoogleMap {...mapOptions}>
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  );
};

export default Map;
