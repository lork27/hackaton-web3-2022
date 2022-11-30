// import { AspectRatio } from "@mantine/core";
import { AspectRatio } from "@mantine/core";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import { PR } from "../types/districts";
import { useViewportSize } from "@mantine/hooks";
import { useMapController } from "../context/MapContext";

export default function HomePage() {
  const { width, height } = useViewportSize();
  const { currentLocation } = useMapController();
  console.log("current location: ", currentLocation);
  const { x, y, zoom } = currentLocation?.coordinates ?? PR.coordinates;

  console.log(x, y, zoom);

  return (
    <AspectRatio ratio={width / height}>
      <iframe
        src={`https://api.maptiler.com/maps/8d1659b0-75bc-4a7e-bf3f-cf5fccd4e0ef/?key=qaioH87PxUIdnaDl3ycV#${zoom}/${x}/${y}`}
      ></iframe>
    </AspectRatio>
  );
}
