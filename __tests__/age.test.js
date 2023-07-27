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
    expect(age.mercuryAge).toEqual(137);
  });
  test('It should correctly return the Venus age (rounded down)', () => {
    const age = new Age(33);
    age.convertToPlanetAges();
    expect(age.venusAge).toEqual(53);
  });
  test('It should correctly return the Mars age (rounded down)', () => {
    const age = new Age(33);
    age.convertToPlanetAges();
    expect(age.marsAge).toEqual(17);
  });
  test('It should correctly return the Jupiter age (rounded down)', () => {
    const age = new Age(33);
    age.convertToPlanetAges();
    expect(age.jupiterAge).toEqual(2);
  });
  test('It should correctly return how many years have passed on each planet since a past birthday', () => {
    const age = new Age(33, 25);
    age.findYearsFrom();
    expect(age.yearsSince.earthYears).toEqual(8);
    expect(age.yearsSince.mercuryYears).toEqual(33);
    expect(age.yearsSince.venusYears).toEqual(12);
    expect(age.yearsSince.marsYears).toEqual(4);
    expect(age.yearsSince.jupiterYears).toEqual(0);

  });
  
});