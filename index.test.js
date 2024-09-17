const NegativSzam = require('./index.js')

test('A megadott szám negatív', () => {
    expect(NegativSzam(-5)).toBe(true); 
});

test('A megadott szám nem negatív', () => {
    expect(NegativSzam(5)).toBe(true); 
});

test('A 0 nem negatív érték', () => {
    expect(NegativSzam(0)).toBe(true); 
});

