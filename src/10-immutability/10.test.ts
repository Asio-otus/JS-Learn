import {cutHair, UserType, UserWithLaptopType} from "./10";

test('reference type test', () => {

    let user: UserType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    // user = cutHair(user, 2)
    const awesomeUser = cutHair(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {

    let user: UserWithLaptopType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
    }

    const moveUser = (u: UserWithLaptopType, city: string) => {
        const copy = {
            ...u,
        }

        copy.address = {
            ...copy.address,
            city: city
        }

        return copy
    }

    const movedUser = moveUser(user, 'Kiev')

    // user = movedUser;

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})