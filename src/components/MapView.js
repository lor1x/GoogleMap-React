import { useContext } from "react";
import GoogleMap from "google-map-react";
import LocationPin from "../components/LocationPin";
import { ActiveContext } from "../components/ActiveContext";
export default function MapView({ markers }) {
  const { active } = useContext(ActiveContext);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lat: 53.0, lng: 9.0 }}
        defaultZoom={5}
      >
        {markers.map((facility) => {
          return (
            <LocationPin
              key={facility.id}
              active={active === facility.id}
              text={facility.name}
              lat={facility.latitude}
              lng={facility.longitude}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
}
