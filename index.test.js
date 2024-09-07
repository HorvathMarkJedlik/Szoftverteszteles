const NegativSzam = require('./index.js')

test('A megadott szám negatív', () => {
    expect(NegativSzam(-5)).toBe(true); 
});

test('A megadott szám pozitív', () => {
    expect(NegativSzam(5)).toBe(false); 
});

test('A 0 nem negatív érték', () => {
    expect(NegativSzam(0)).toBe(true); 
});

