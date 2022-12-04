import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../api/api-config";
import type { Distric, Districs, Municipality } from "../types/districts";

type currentLocationType = Municipality | Distric | undefined;

const MapContext = createContext({
  PRdata: [] as Districs,
  setCurrentLocation: (params: currentLocationType) => {},
  currentLocation: {} as currentLocationType,
});

export const MapController = (props: any) => {
  const [currentLocation, setCurrentLocation] =
    useState<currentLocationType>(undefined);

  const [PRdata, setPRdata] = useState<Distric[] | []>([]);

  const getPRmap = async () => {
    const response = await api.get("/allMunicipalities", {
      validateStatus: () => true,
    });
    if (response.status === 200) {
      const toList = Object.values(response.data).map((entry) => entry);
      setPRdata(toList as Districs);
    }
    if (response.status !== 200) {
      console.log(response);
    }
  };

  useEffect(() => {
    getPRmap();
  }, []);

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
