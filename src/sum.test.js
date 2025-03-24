import { sum, subtract } from './lib.js';

describe('lib unit test', () => {
    it('Should sum two numbers', () =>{
        expect(sum(1, 2)).toBe(3);
    });

    it('Should subtract two numbers', () =>{
        expect(subtract(3, 2)).toBe(1);
    });
})