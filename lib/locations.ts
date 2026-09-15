export type Location = {
  id: string
  name: string
  category: string
  city: string
  country: string
  description: string
  lat: number
  lng: number
}

export const locations: Location[] = [
  {
    id: "eiffel-tower",
    name: "Eiffel Tower",
    category: "Landmark",
    city: "Paris",
    country: "France",
    description: "Wrought-iron lattice tower on the Champ de Mars, completed in 1889.",
    lat: 48.8584,
    lng: 2.2945,
  },
  {
    id: "colosseum",
    name: "Colosseum",
    category: "Historic",
    city: "Rome",
    country: "Italy",
    description: "Ancient Roman amphitheatre and the largest ever built.",
    lat: 41.8902,
    lng: 12.4922,
  },
  {
    id: "statue-of-liberty",
    name: "Statue of Liberty",
    category: "Monument",
    city: "New York",
    country: "United States",
    description: "Neoclassical copper statue on Liberty Island, a gift from France.",
    lat: 40.6892,
    lng: -74.0445,
  },
  {
    id: "tokyo-tower",
    name: "Tokyo Tower",
    category: "Landmark",
    city: "Tokyo",
    country: "Japan",
    description: "Communications and observation tower inspired by the Eiffel Tower.",
    lat: 35.6586,
    lng: 139.7454,
  },
  {
    id: "sydney-opera-house",
    name: "Sydney Opera House",
    category: "Culture",
    city: "Sydney",
    country: "Australia",
    description: "Multi-venue performing arts centre with its iconic shell design.",
    lat: -33.8568,
    lng: 151.2153,
  },
  {
    id: "christ-the-redeemer",
    name: "Christ the Redeemer",
    category: "Monument",
    city: "Rio de Janeiro",
    country: "Brazil",
    description: "Art Deco statue of Jesus Christ atop Mount Corcovado.",
    lat: -22.9519,
    lng: -43.2105,
  },
  {
    id: "table-mountain",
    name: "Table Mountain",
    category: "Nature",
    city: "Cape Town",
    country: "South Africa",
    description: "Flat-topped mountain overlooking the city and Table Bay.",
    lat: -33.9628,
    lng: 18.4098,
  },
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    category: "Historic",
    city: "Agra",
    country: "India",
    description: "Ivory-white marble mausoleum on the bank of the Yamuna river.",
    lat: 27.1751,
    lng: 78.0421,
  },
]
