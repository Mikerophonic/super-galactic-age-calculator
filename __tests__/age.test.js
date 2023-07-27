import { Age } from './../src/age.js';

describe('Age', () => {

  test('It should correctly create an age class with five as yet undefined properties for different planets', () => {
    const age = new Age();
    expect(age.earthAge).toEqual(undefined);
    expect(age.mercuryAge).toEqual(undefined);
    expect(age.venusAge).toEqual(undefined);
    expect(age.marsAge).toEqual(undefined);
    expect(age.jupiterAge).toEqual(undefined);
  });

});