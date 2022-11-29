export const PR = {
  coordinates: { x: 18.2, y: -66.2, zoom: 9.4 },
};

export type Distric = {
  name: string;
  municipalities: Municipality[];
  coordinates: { x: number; y: number; zoom: number };
};

export type Municipality = {
  name: string;
  coordinates: { x: number; y: number; zoom: number };
};

export type Districs = Distric[];

export const PRdata: Districs = [
  {
    name: "San Juan",
    municipalities: [
      { name: "San Juan", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Aguas Buenas", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Guynabo", coordinates: { x: 0, y: 0, zoom: 0 } },
    ],
    coordinates: { x: 0, y: 0, zoom: 0 },
  },
  {
    name: "Bayamón",
    municipalities: [
      { name: "Bayamón", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Cataño", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Guaynabo", coordinates: { x: 0, y: 0, zoom: 0 } },
    ],
    coordinates: { x: 0, y: 0, zoom: 0 },
  },

  {
    name: "Bayamón",
    municipalities: [
      { name: "Bayamón", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Cataño", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Guaynabo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Toa Alta", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Toa Baja", coordinates: { x: 0, y: 0, zoom: 0 } },
    ],
    coordinates: { x: 0, y: 0, zoom: 0 },
  },

  {
    name: "Arecibo",
    municipalities: [
      { name: "Arecibo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Barceloneta", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Camuy", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Ciales", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Dorado", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Florida", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Hatillo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Manatí", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Morovis", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Quebradillas", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Vega Alta", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Vega Baja", coordinates: { x: 0, y: 0, zoom: 0 } },
    ],
    coordinates: { x: 0, y: 0, zoom: 0 },
  },

  {
    name: "Mayaqüez-Aguadilla",
    municipalities: [
      { name: "Aguada", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Aguadilla", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Añasco", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Cabo Rojo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Hormigueros", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Isabela", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Las Marías", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Mayagüez", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Moca", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Rincón", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "San Germán", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "San Sebastán", coordinates: { x: 0, y: 0, zoom: 0 } },
    ],
    coordinates: { x: 0, y: 0, zoom: 0 },
  },

  {
    name: "Ponce",
    municipalities: [
      { name: "Adjuntas", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Guánica", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Jayuya", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Juana Díaz", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Lajas", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Lares", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Maricao", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Peñuelas", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Ponce", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Sabana Grande", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Utuado", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Yauco", coordinates: { x: 0, y: 0, zoom: 0 } },
    ],
    coordinates: { x: 0, y: 0, zoom: 0 },
  },

  {
    name: "Guayama",
    municipalities: [
      { name: "Aibonito", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Arroyo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Barranquitas", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Cayey", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Cidra", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Coamo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Comerío", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Corozal", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Guayama", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Sabana Grande", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Juana Díaz", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Naranjito", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Orocovis", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Salinas", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Santa Isabel", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Villalba", coordinates: { x: 0, y: 0, zoom: 0 } },
    ],
    coordinates: { x: 0, y: 0, zoom: 0 },
  },

  {
    name: "Humacao",
    municipalities: [
      { name: "Caguas", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Gurabo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Humacao", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Juncos", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Las Piedras", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Maunabo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Naguabo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Patillas", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "San Lorenzo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Yabucoa", coordinates: { x: 0, y: 0, zoom: 0 } },
    ],
    coordinates: { x: 0, y: 0, zoom: 0 },
  },

  {
    name: "Carolina",
    municipalities: [
      { name: "Canóvanas", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Carolina", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Ceiba", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Culebra", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Fajardo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Loiza", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Luquillo", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Río Grande", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Trujillo Alto", coordinates: { x: 0, y: 0, zoom: 0 } },
      { name: "Vieques", coordinates: { x: 0, y: 0, zoom: 0 } },
    ],
    coordinates: { x: 0, y: 0, zoom: 0 },
  },
];
