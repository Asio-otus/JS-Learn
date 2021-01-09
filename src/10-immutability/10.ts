export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type CompanyType = { id: number, title: string };

export type UserWithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

// Functions
export function cutHair(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
}

export const moveUser = (u: UserWithLaptopType, city: string) => {
    // --- The commented code is a long way to copy an object... Below is a short way.
    // const copy = {
    //     ...u,
    // }
    //
    // copy.address = {
    //     ...copy.address,
    //     city: city
    // }
    // return copy

    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export const changeLaptop = (u: UserWithLaptopType, laptop: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export const changeUserHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export const addNewBook = (u: UserWithLaptopType & UserWithBooksType, newBook: string ) => {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    return {
        ...u,
        books: u.books.map( b => (b === oldBook) ? newBook : b)
    }
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookToRemove: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== bookToRemove)
    }
}

export const addCompany = (u: UserWithLaptopType & UserWithCompaniesType, newCompany: string) => {
    return {
        ...u,
        companies: [...u.companies, {id: u.companies.length + 1, title: newCompany}]
    }
}

export const updateCompany = (u: UserWithLaptopType & UserWithCompaniesType, id: number, updateCompany: string ) => {
    return {
        ...u,
        companies: u.companies.map( c => c.id === id ? {...c, title: updateCompany}: c)
    }
}

export const updateCompanyA = (companies: { [key: string]: Array<CompanyType> }, userName: string, companyId: number, newTitle: string) => {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)


    return companyCopy
}