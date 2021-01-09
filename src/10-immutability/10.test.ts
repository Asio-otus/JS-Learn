import {
    addCompany,
    addNewBook,
    changeLaptop,
    changeUserHouse,
    cutHair,
    moveUser, removeBook, updateBook, updateCompany, updateCompanyA,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./10";

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

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address.city).toBe('Minsk')
    expect(movedUser.address.city).toBe('Kiev')
})

test('change user laptop to macbook', () => {

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

    const userWithMac = changeLaptop(user, 'MacBook')

    expect(user).not.toBe(userWithMac)
    expect(user.laptop).not.toBe(userWithMac.laptop)
    expect(user.address).toBe(userWithMac.address)
    expect(user.laptop.title).toBe('ZenBook')
    expect(userWithMac.laptop.title).toBe('MacBook')
})

test('Cloning arrays', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = changeUserHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.address.house).toBe(12)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userWithNewBooks = addNewBook(user, 'ts')

    expect(user).not.toBe(userWithNewBooks)
    expect(user.laptop).toBe(userWithNewBooks.laptop)
    expect(user.address).toBe(userWithNewBooks.address)
    expect(user.books).not.toBe(userWithNewBooks.books)
    expect(user.books).toStrictEqual(['css', 'html', 'js', 'react'])
    expect(userWithNewBooks.books).toStrictEqual(['css', 'html', 'js', 'react', 'ts'])
})

test('update books - js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userWithUpdatedBooks = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userWithUpdatedBooks)
    expect(user.laptop).toBe(userWithUpdatedBooks.laptop)
    expect(user.address).toBe(userWithUpdatedBooks.address)
    expect(user.books).not.toBe(userWithUpdatedBooks.books)
    expect(user.books).toStrictEqual(['css', 'html', 'js', 'react'])
    expect(userWithUpdatedBooks.books).toStrictEqual(['css', 'html', 'ts', 'react'])
})

test('Remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userWithRemovedBook = removeBook(user, 'js')

    expect(user).not.toBe(userWithRemovedBook)
    expect(user.laptop).toBe(userWithRemovedBook.laptop)
    expect(user.address).toBe(userWithRemovedBook.address)
    expect(user.books).not.toBe(userWithRemovedBook.books)
    expect(user.books).toStrictEqual(['css', 'html', 'js', 'react'])
    expect(userWithRemovedBook.books).toStrictEqual(['css', 'html', 'react'])
})

test('Add company', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'It-Incubator'},
        ]
    }

    const userWithAddedCompany = addCompany(user, 'Google')

    expect(user).not.toBe(userWithAddedCompany)
    expect(user.laptop).toBe(userWithAddedCompany.laptop)
    expect(user.address).toBe(userWithAddedCompany.address)
    expect(user.companies).toStrictEqual([
        {id: 1, title: 'Epam'},
        {id: 2, title: 'It-Incubator'},
    ])
    expect(userWithAddedCompany.companies).toStrictEqual([
        {id: 1, title: 'Epam'},
        {id: 2, title: 'It-Incubator'},
        {id: 3, title: 'Google'}
    ])
})

test('Update company', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Epuuuum'},
            {id: 2, title: 'It-Incubator'},
        ]
    }

    const userWithUpdatedCompany = updateCompany(user, 1, 'Epam')

    expect(user).not.toBe(userWithUpdatedCompany)
    expect(user.laptop).toBe(userWithUpdatedCompany.laptop)
    expect(user.address).toBe(userWithUpdatedCompany.address)
    expect(user.companies).toStrictEqual([
        {id: 1, title: 'Epuuuum'},
        {id: 2, title: 'It-Incubator'},
    ])
    expect(userWithUpdatedCompany.companies).toStrictEqual([
        {id: 1, title: 'Epam'},
        {id: 2, title: 'It-Incubator'},
    ])
})

test('Update company associative array', () => {
    let user: UserWithLaptopType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    let companies = {
        'Dymich': [
            { id: 1, title: 'Epuuuum' },
            { id: 2, title: 'It-Incubator' },
        ],
        'Atiem': [
            { id: 1, title: 'It-Incubator' }
        ]
    }

    const copy = updateCompanyA(companies, 'Dymich', 1, 'Epam')

    expect(copy['Dymich']).not.toBe(companies['Dymich'])
    expect(copy['Atiem']).toBe(companies['Atiem'])
    expect(copy['Dymich'][0].title).toBe('Epam')
})