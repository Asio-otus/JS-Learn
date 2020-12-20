import {ManType} from "./05";

let people: Array<ManType> = []

beforeEach( () => {
    people = [
        { name: 'Vasiliy Ivanov', age: 28},
        { name: 'Alex Petrov', age: 18},
        { name: 'Boris Sidorov', age: 31}
    ]
})

test('should get array of greetings', () => {
    const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Vasiliy. Welcome to IT-Incubator');
    expect(messages[1]).toBe('Hello Alex. Welcome to IT-Incubator');
    expect(messages[2]).toBe('Hello Boris. Welcome to IT-Incubator');
})