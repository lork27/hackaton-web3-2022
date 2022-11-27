// import { AspectRatio } from "@mantine/core";
import { AspectRatio } from "@mantine/core";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";

const center = [18.2, -66.5];
const zoom = 10;

export default function HomePage() {
  return (
    <AspectRatio ratio={16 / 8}>
      <iframe src="https://api.maptiler.com/maps/8d1659b0-75bc-4a7e-bf3f-cf5fccd4e0ef/?key=qaioH87PxUIdnaDl3ycV#9.5/18.218/-66.348"></iframe>
    </AspectRatio>
  );
  // return (
  //   <MapContainer
  //     center={center}
  //     zoom={10}
  //     scrollWheelZoom={false}
  //     style={{ width: "100vh", height: "100vh" }}
  //   >
  //     <TileLayer
  //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //       url="https://api.maptiler.com/maps/8d1659b0-75bc-4a7e-bf3f-cf5fccd4e0ef/?key=qaioH87PxUIdnaDl3ycV#8.7/18.21840/-66.34802"
  //     />
  //   </MapContainer>
  // );
}
