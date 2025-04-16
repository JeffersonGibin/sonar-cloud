import { sum, subtract, divide, multiply, power, modulo } from './lib.js';

describe('lib unit test', () => {
    it('Should sum two numbers', () =>{
        expect(sum(1, 2)).toBe(3);
    });

    it('Should subtract two numbers', () =>{
        expect(subtract(3, 2)).toBe(1);
    });

    it('Should divide two numbers', () =>{
        expect(divide(3, 2)).toBe(1.5);
    });

    it('Should multiply two numbers', () =>{
        expect(multiply(3, 2)).toBe(6);
    });

    it('Should power two numbers', () =>{
        expect(power(3, 2)).toBe(9);
    });

    it('Should modulo two numbers', () =>{
        expect(modulo(3, 2)).toBe(1);
    });
})