import { createContext, useContext, useState, useEffect } from "react";
import type { Distric, Districs, Municipality } from "../types/districts";
import { PR, PRdata } from "../types/districts";

type currentLocationType = Municipality | Distric | undefined;

const MapContext = createContext({
  PRdata,
  setCurrentLocation: (params: currentLocationType) => {},
  currentLocation: {} as currentLocationType,
});

export const MapController = (props: any) => {
  //   const { zoom, x, y } = PR.coordinates;
  //   const [coordinates, setCoordinates] = useState({ x: x, y: y, zoom: zoom });
  const [currentLocation, setCurrentLocation] =
    useState<currentLocationType>(undefined);

  return (
    <MapContext.Provider
      value={{
        setCurrentLocation,
        currentLocation,
        PRdata,
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};

export const useMapController = () => {
  return useContext(MapContext);
};
