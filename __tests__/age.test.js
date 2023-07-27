import { Age } from './../src/age.js';

describe('Age', () => {

  test('It should correctly create an age class with an Earth age and four as yet empty properties for different planets', () => {
    const age = new Age(33);
    expect(age.earthAge).toEqual(33);
    expect(age.mercuryAge).toEqual("");
    expect(age.venusAge).toEqual("");
    expect(age.marsAge).toEqual("");
    expect(age.jupiterAge).toEqual("");
  });

  test('It should correctly return the Mercury age (rounded down)', () => {
    const age = new Age(33);
    age.convertToPlanetAges();
    expect(age.mercuryAge).toEqual(7);
  });
  
  
});