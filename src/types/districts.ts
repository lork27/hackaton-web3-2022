export const PR = {
  name: "Puerto Rico",
  coordinates: { x: 18.2, y: -66.2, zoom: 9.4 },
  municipalities: [],
  status: {
    iop: 90,
    power: 90,
    roads: 80,
    supplies: 70,
    water: 98,
  } as Status,
};

export type Distric = {
  name: string;
  municipalities: Municipality[];
  coordinates: { x: number; y: number; zoom: number };
};

export type Municipality = {
  countyCode: string;
  name: string;
  coordinates: { x: number; y: number; zoom: number };
  reports: string[];
  status: Status;
  totalHousingUnits: number;
  totalPopulation: number;
};

export type Status = {
  iop: number;
  power: number;
  roads: number;
  supplies: number;
  water: number;
};

export type Districs = Distric[];
