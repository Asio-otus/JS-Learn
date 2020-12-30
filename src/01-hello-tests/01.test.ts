import {Multiply, SplitIntoWords, Sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
})

test('Sum should be correct', () => {

    // Action
    const result1 = Sum(a, b);
    const result2 = Sum(b, c);

    // Expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('Multiply should be correct', () => {

    // Action
    const result1 = Multiply(a, b);
    const result2 = Multiply(b, c);

    // Expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('Split into word should be correct', () => {
    // Data
    const sent1 = "Eat shit and die!"
    const sent2 = "I came here to chew bubblegum and kick ass"

    // Action
    const result1 = SplitIntoWords(sent1);
    const result2 = SplitIntoWords(sent2);

    // Expect result
    expect(result1.length).toBe(4)
    expect(result1[0]).toBe('Eat')
    expect(result1[1]).toBe('shit')
    expect(result1[2]).toBe('and')
    expect(result1[3]).toBe('die!')
    expect(result1).toStrictEqual(['Eat', 'shit', 'and', 'die!'])

    expect(result2.length).toBe(9)
    expect(result2[0]).toBe('I')
    expect(result2[1]).toBe('came')
    expect(result2[2]).toBe('here')
    expect(result2[3]).toBe('to')
    expect(result2[4]).toBe('chew')
    expect(result2[5]).toBe('bubblegum')
    expect(result2[6]).toBe('and')
    expect(result2[7]).toBe('kick')
    expect(result2[8]).toBe('ass')
    expect(result2).toStrictEqual(['I', 'came', 'here', 'to', 'chew', 'bubblegum', 'and', 'kick', 'ass'])
})

