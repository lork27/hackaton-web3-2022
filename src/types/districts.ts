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

const discrictZoom = 11;
const municipalityZoom = 12;

export const PRdata: Districs = [
  {
    name: "San Juan",
    municipalities: [
      {
        name: "San Juan",
        coordinates: { x: 18.456, y: -66.118, zoom: municipalityZoom },
      },
      {
        name: "Aguas Buenas",
        coordinates: { x: 18.256, y: -66.102, zoom: municipalityZoom },
      },
      {
        name: "Guaynabo",
        coordinates: { x: 18.361, y: -66.11, zoom: municipalityZoom },
      },
    ],
    coordinates: { x: 18.4, y: -66, zoom: discrictZoom },
  },
  {
    name: "Bayamón",
    municipalities: [
      {
        name: "Bayamón",
        coordinates: { x: 18.395, y: -66.15, zoom: municipalityZoom },
      },
      {
        name: "Cataño",
        coordinates: { x: 18.446, y: -66.135, zoom: municipalityZoom },
      },
      {
        name: "Guaynabo",
        coordinates: { x: 18.361, y: -66.11, zoom: municipalityZoom },
      },
      {
        name: "Toa Alta",
        coordinates: { x: 18.388, y: -66.248, zoom: municipalityZoom },
      },
      {
        name: "Toa Baja",
        coordinates: { x: 18.43, y: -66.224, zoom: municipalityZoom },
      },
    ],
    coordinates: { x: 18.3, y: -66.1, zoom: discrictZoom },
  },

  {
    name: "Arecibo",
    municipalities: [
      {
        name: "Arecibo",
        coordinates: { x: 18.444, y: -66.646, zoom: municipalityZoom },
      },
      {
        name: "Barceloneta",
        coordinates: { x: 18.45, y: -66.538, zoom: municipalityZoom },
      },
      {
        name: "Camuy",
        coordinates: { x: 18.483, y: -66.844, zoom: municipalityZoom },
      },
      {
        name: "Ciales",
        coordinates: { x: 18.336, y: -66.468, zoom: municipalityZoom },
      },
      {
        name: "Dorado",
        coordinates: { x: 18.458, y: -66.267, zoom: municipalityZoom },
      },
      {
        name: "Florida",
        coordinates: { x: 18.363, y: -66.558, zoom: municipalityZoom },
      },
      {
        name: "Hatillo",
        coordinates: { x: 18.486, y: -66.825, zoom: municipalityZoom },
      },
      {
        name: "Manatí",
        coordinates: { x: 18.433, y: -66.475, zoom: municipalityZoom },
      },
      {
        name: "Morovis",
        coordinates: { x: 18.325, y: -66.406, zoom: municipalityZoom },
      },
      {
        name: "Quebradillas",
        coordinates: { x: 18.473, y: -66.938, zoom: municipalityZoom },
      },
      {
        name: "Vega Alta",
        coordinates: { x: 18.412, y: -66.331, zoom: municipalityZoom },
      },
      {
        name: "Vega Baja",
        coordinates: { x: 18.446, y: -66.404, zoom: municipalityZoom },
      },
    ],
    coordinates: { x: 18.444, y: -66.646, zoom: discrictZoom },
  },

  {
    name: "Mayaqüez-Aguadilla",
    municipalities: [
      {
        name: "Aguada",
        coordinates: { x: 18.38, y: -67.188, zoom: municipalityZoom },
      },
      {
        name: "Aguadilla",
        coordinates: { x: 18.427, y: -67.154, zoom: municipalityZoom },
      },
      {
        name: "Añasco",
        coordinates: { x: 18.285, y: -67.14, zoom: municipalityZoom },
      },
      {
        name: "Cabo Rojo",
        coordinates: { x: 18.086, y: -67.145, zoom: municipalityZoom },
      },
      {
        name: "Hormigueros",
        coordinates: { x: 18.133, y: -67.112, zoom: municipalityZoom },
      },
      {
        name: "Isabela",
        coordinates: { x: 18.5, y: -67.024, zoom: municipalityZoom },
      },
      {
        name: "Las Marías",
        coordinates: { x: 18.254, y: -66.985, zoom: municipalityZoom },
      },
      {
        name: "Mayagüez",
        coordinates: { x: 18.201, y: -67.145, zoom: municipalityZoom },
      },
      {
        name: "Moca",
        coordinates: { x: 18.394, y: -67.113, zoom: municipalityZoom },
      },
      {
        name: "Rincón",
        coordinates: { x: 18.34, y: -67.249, zoom: municipalityZoom },
      },
      {
        name: "San Germán",
        coordinates: { x: 18.08, y: -67.04, zoom: municipalityZoom },
      },
      {
        name: "San Sebastán",
        coordinates: { x: 18.332, y: -66.995, zoom: municipalityZoom },
      },
    ],
    coordinates: { x: 18.4, y: -67.17, zoom: discrictZoom },
  },

  {
    name: "Ponce",
    municipalities: [
      {
        name: "Adjuntas",
        coordinates: { x: 18.163, y: -66.723, zoom: municipalityZoom },
      },
      {
        name: "Guánica",
        coordinates: { x: 17.97, y: -66.908, zoom: municipalityZoom },
      },
      {
        name: "Jayuya",
        coordinates: { x: 18.218, y: -66.591, zoom: municipalityZoom },
      },
      {
        name: "Juana Díaz",
        coordinates: { x: 18.053, y: -66.5, zoom: municipalityZoom },
      },
      {
        name: "Lajas",
        coordinates: { x: 18.05, y: -67.059, zoom: municipalityZoom },
      },
      {
        name: "Lares",
        coordinates: { x: 18.294, y: -66.877, zoom: municipalityZoom },
      },
      {
        name: "Maricao",
        coordinates: { x: 18.18, y: -66.979, zoom: municipalityZoom },
      },
      {
        name: "Peñuelas",
        coordinates: { x: 18.056, y: -66.721, zoom: municipalityZoom },
      },
      {
        name: "Ponce",
        coordinates: { x: 18.011, y: -66.614, zoom: municipalityZoom },
      },
      {
        name: "Sabana Grande",
        coordinates: { x: 18.077, y: -66.96, zoom: municipalityZoom },
      },
      {
        name: "Utuado",
        coordinates: { x: 18.265, y: -67.7, zoom: municipalityZoom },
      },
      {
        name: "Yauco",
        coordinates: { x: 18.035, y: -66.849, zoom: municipalityZoom },
      },
    ],
    coordinates: { x: 18.011, y: -66.614, zoom: discrictZoom },
  },

  {
    name: "Guayama",
    municipalities: [
      {
        name: "Aibonito",
        coordinates: { x: 18.14, y: -66.266, zoom: municipalityZoom },
      },
      {
        name: "Arroyo",
        coordinates: { x: 17.992, y: -66.054, zoom: municipalityZoom },
      },
      {
        name: "Barranquitas",
        coordinates: { x: 18.186, y: -66.306, zoom: municipalityZoom },
      },
      {
        name: "Cayey",
        coordinates: { x: 18.111, y: -66.166, zoom: municipalityZoom },
      },
      {
        name: "Cidra",
        coordinates: { x: 18.175, y: -66.161, zoom: municipalityZoom },
      },
      {
        name: "Coamo",
        coordinates: { x: 18.08, y: -66.357, zoom: municipalityZoom },
      },
      {
        name: "Comerío",
        coordinates: { x: 18.219, y: -66.225, zoom: municipalityZoom },
      },
      {
        name: "Corozal",
        coordinates: { x: 18.341, y: -66.316, zoom: municipalityZoom },
      },
      {
        name: "Guayama",
        coordinates: { x: 17.984, y: -66.113, zoom: municipalityZoom },
      },
      {
        name: "Sabana Grande",
        coordinates: { x: 18.077, y: -66.96, zoom: municipalityZoom },
      },
      {
        name: "Naranjito",
        coordinates: { x: 18.3, y: -66.244, zoom: municipalityZoom },
      },
      {
        name: "Orocovis",
        coordinates: { x: 18.226, y: -66.391, zoom: municipalityZoom },
      },
      {
        name: "Salinas",
        coordinates: { x: 18.002, y: -66.2605, zoom: municipalityZoom },
      },
      {
        name: "Santa Isabel",
        coordinates: { x: 17.966, y: -66.404, zoom: municipalityZoom },
      },
      {
        name: "Villalba",
        coordinates: { x: 18.127, y: -66.492, zoom: municipalityZoom },
      },
    ],
    coordinates: { x: 17.984, y: -66.113, zoom: discrictZoom },
  },

  {
    name: "Humacao",
    municipalities: [
      {
        name: "Caguas",
        coordinates: { x: 18.238, y: -66.035, zoom: municipalityZoom },
      },
      {
        name: "Gurabo",
        coordinates: { x: 18.254, y: -65.972, zoom: municipalityZoom },
      },
      {
        name: "Humacao",
        coordinates: { x: 18.14, y: -65.827, zoom: municipalityZoom },
      },
      {
        name: "Juncos",
        coordinates: { x: 18.227, y: -65.921, zoom: municipalityZoom },
      },
      {
        name: "Las Piedras",
        coordinates: { x: 18.183, y: -65.866, zoom: municipalityZoom },
      },
      {
        name: "Maunabo",
        coordinates: { x: 18.007, y: -65.899, zoom: municipalityZoom },
      },
      {
        name: "Naguabo",
        coordinates: { x: 18.211, y: -65.734, zoom: municipalityZoom },
      },
      {
        name: "Patillas",
        coordinates: { x: 18.003, y: -66.013, zoom: municipalityZoom },
      },
      {
        name: "San Lorenzo",
        coordinates: { x: 18.189, y: -65.961, zoom: municipalityZoom },
      },
      {
        name: "Yabucoa",
        coordinates: { x: 18.05, y: -65.879, zoom: municipalityZoom },
      },
    ],
    coordinates: { x: 18.14, y: -65.827, zoom: discrictZoom },
  },

  {
    name: "Carolina",
    municipalities: [
      {
        name: "Canóvanas",
        coordinates: { x: 18.374, y: -65.899, zoom: municipalityZoom },
      },
      {
        name: "Carolina",
        coordinates: { x: 18.38, y: -65.967, zoom: municipalityZoom },
      },
      {
        name: "Ceiba",
        coordinates: { x: 18.264, y: -65.648, zoom: municipalityZoom },
      },
      {
        name: "Culebra",
        coordinates: { x: 18.31, y: -65.303, zoom: municipalityZoom + 1 },
      },
      {
        name: "Fajardo",
        coordinates: { x: 18.325, y: -65.653, zoom: municipalityZoom },
      },
      {
        name: "Loiza",
        coordinates: { x: 18.433, y: -65.878, zoom: municipalityZoom },
      },
      {
        name: "Luquillo",
        coordinates: { x: 18.372, y: -65.716, zoom: municipalityZoom },
      },
      {
        name: "Río Grande",
        coordinates: { x: 18.376, y: -65.841, zoom: municipalityZoom },
      },
      {
        name: "Trujillo Alto",
        coordinates: { x: 18.354, y: -66.007, zoom: municipalityZoom },
      },
      {
        name: "Vieques",
        coordinates: { x: 18.126, y: -65.44, zoom: municipalityZoom },
      },
    ],
    coordinates: { x: 18.38, y: -65.957, zoom: discrictZoom },
  },
];
