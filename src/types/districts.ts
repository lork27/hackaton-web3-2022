export type Distric = {
  name: string;
  municipalities: Municipality[];
};

export type Municipality = {
  name: string;
};

export type Districs = Distric[];
