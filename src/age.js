export class Age {
    constructor(earthAge, secondAge) {
        this.earthAge = earthAge;
        this.secondAge = secondAge;
        this.mercuryAge = "";
        this.venusAge = "";
        this.marsAge = "";
        this.jupiterAge = "";
        this.yearsFrom = {}
    }

    convertToPlanetAges() {
        this.mercuryAge = Math.floor(this.earthAge / .24)
        this.venusAge = Math.floor(this.earthAge / .62)
        this.marsAge = Math.floor(this.earthAge / 1.88)
        this.jupiterAge = Math.floor(this.earthAge / 11.86)
    }

    findYearsFrom() {
        let earthYears = this.earthAge - this.secondAge
        this.yearsFrom.earthYears = earthYears
        this.yearsFrom.mercuryYears = Math.floor(earthYears / .24)
        this.yearsFrom.venusYears = Math.floor(earthYears / .62)
        this.yearsFrom.marsYears = Math.floor(earthYears / 1.88)
        this.yearsFrom.jupiterYears = Math.floor(earthYears / 11.86)

    }
}