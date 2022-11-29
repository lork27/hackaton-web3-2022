// import { AspectRatio } from "@mantine/core";
import { AspectRatio } from "@mantine/core";
import { Marker, Popup, MapContainer, TileLayer, useMap } from "react-leaflet";
import { PR } from "../types/districts";
import { useViewportSize } from "@mantine/hooks";

export default function HomePage() {
  const { zoom, x, y } = PR.coordinates;
  const { width, height } = useViewportSize();
  return (
    <AspectRatio ratio={width / height}>
      <iframe
        src={`https://api.maptiler.com/maps/8d1659b0-75bc-4a7e-bf3f-cf5fccd4e0ef/?key=qaioH87PxUIdnaDl3ycV#${zoom}/${x}/${y}`}
      ></iframe>
    </AspectRatio>
  );
}
