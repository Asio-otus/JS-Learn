export type StreetType = {
    title: string;
}

export type AddressType = {
    number: number,
    street: StreetType
}

export type HouseType = {
    builtAt: number,
    repaired: boolean,
    address: AddressType
}

export type GovBuildType = {
    type: "Hospital" | "Fire-station"
    budget: number
    staffCount: 20;
    address: AddressType;
}

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<GovBuildType>,
    citizensNumber: number
}