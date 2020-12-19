import {CityType} from "./02_01";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                builtAt: 1999,
                repaired: true,
                address: {
                    number: 85,
                    street: {title: "Acacia street"}
                },
            },
            {
                builtAt: 1980,
                repaired: false,
                address: {
                    number: 662,
                    street: {
                        title: "Black street"
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: "Hospital",
                budget: 20000,
                staffCount: 20,
                address: {
                    number: 55,
                    street: {
                        title: "Left street"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test("test city should contain 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].builtAt).toBe(2012);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].builtAt).toBe(1999);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[1].address.number).toBe(85);
    expect(city.houses[1].address.street.title).toBe("Acacia street");

    expect(city.houses[2].builtAt).toBe(1980);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(662);
    expect(city.houses[2].address.street.title).toBe("Black street");
})