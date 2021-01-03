import {usersType} from './08'

let users: usersType;

beforeEach( () => {
    users = {
        '101' : { id: 101, name: 'Dimych'},
        '121' : { id: 121, name: 'Natasha'},
        '3232312' : { id: 3232312, name: 'Valera'},
        '1' : { id: 1, name: 'Katya'}
    }
})

test('should update corresponding user from obj', () => {
    users['1'].name = 'Ekaterina';

    expect(users['1'].name).toBe('Ekaterina');
})