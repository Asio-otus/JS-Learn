export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function cutHair(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}