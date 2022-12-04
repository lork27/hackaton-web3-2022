import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../api/api-config";
import type { Distric, Districs, Municipality } from "../types/districts";

type currentLocationType = Municipality | Distric | undefined;
type navPos = {
  x: number;
  y: number;
};

const MapContext = createContext({
  PRdata: [] as Districs,
  setCurrentLocation: (params: currentLocationType) => {},
  currentLocation: {} as currentLocationType,
  navPos: {} as navPos,
});

export const MapController = (props: any) => {
  const [currentLocation, setCurrentLocation] =
    useState<currentLocationType>(undefined);

  const [navPos, setNavPost] = useState<navPos>({
    x: currentLocation?.coordinates.x ?? 0,
    y: currentLocation?.coordinates.y ?? 0,
  });

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

  const getAllReports = async () => {
    const response = await api.get("/allReports", {
      validateStatus: () => true,
    });
    if (response.status === 200) {
      console.log("it works");
      console.log(response.data);
    }
    if (response.status !== 200) {
      console.log("it failed");
      console.log(response.data);
    }
  };

  const getUserGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log("Latitude is :", position.coords.latitude);

      // console.log("Longitude is :", position.coords.longitude);
      setNavPost({
        x: position.coords.latitude,
        y: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    getPRmap();
    getAllReports();
    getUserGeoLocation();
  }, []);

  return (
    <MapContext.Provider
      value={{
        setCurrentLocation,
        currentLocation,
        PRdata,
        navPos,
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};

export const useMapController = () => {
  return useContext(MapContext);
};
