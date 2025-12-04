export enum ProductType {
  CHILLY = 1,
  SPICE = 2,
  SAUCE = 3,
  BLEND = 4,
  EXTRACT = 5,
}

export enum HeatLevel {
  LOWEST = 1,
  MEDIUM = 2,
  HIGHER = 3,
  HIGH = 4,
}

export interface Product {
  id: string,
  name: string,
  price: {
    value: number,
    currency: "USD",
  },
  description: string,
  image: string,
  // NB! Scale 1..10
  rating: number,
  heatLevel: HeatLevel,
  type: ProductType,
}
