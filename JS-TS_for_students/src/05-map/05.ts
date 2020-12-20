export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    { name: 'Vasiliy Ivanov', age: 28},
    { name: 'Alex Petrov', age: 18},
    { name: 'Boris Sidorov', age: 31}
]

const dimychTransformator = (man: ManType) => ({
        stack: ['css-html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
})


const devs = people.map(dimychTransformator);
const devs2 = people.map(man => ({
    stack: ['css-html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}));

const messages = people.map(man => `Hello ${man.name.split('')[0]}. Welcome to IT-Incubator`);
