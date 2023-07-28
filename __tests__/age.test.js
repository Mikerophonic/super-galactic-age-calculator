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
    expect(age.yearsFrom.earthYears).toEqual(8);
    expect(age.yearsFrom.mercuryYears).toEqual(33);
    expect(age.yearsFrom.venusYears).toEqual(12);
    expect(age.yearsFrom.marsYears).toEqual(4);
    expect(age.yearsFrom.jupiterYears).toEqual(0);

  });

  test('It should correctly return how many years will pass on each planet (Jupiter rounded to tenths) until a future birthday', () => {
    const age = new Age(33, 50);
    age.findYearsFrom();
    expect(age.yearsFrom.earthYears).toEqual(17);
    expect(age.yearsFrom.mercuryYears).toEqual(70);
    expect(age.yearsFrom.venusYears).toEqual(27);
    expect(age.yearsFrom.marsYears).toEqual(9);
    expect(age.yearsFrom.jupiterYears).toEqual(1.4);

  });

  test('It should correctly calculate age in dog years on Jupiter in 2073', () => {
  const age = new Age(33);
  age.findJupiterDogYears();
  expect(age.jupiterDogYears).toEqual(48)
  });

  test('It should correctly calculate how many mayfly lifespans the user has lived', () => {
    const age = new Age(33);
    age.findMayflyLives();
    expect(age.mayflyLives).toEqual(3468960)
    });


});