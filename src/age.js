export class Age {
    constructor(earthAge) {
        this.earthAge = earthAge;
        this.mercuryAge = "";
        this.venusAge = "";
        this.marsAge = "";
        this.jupiterAge = "";
    }

    convertToPlanetAges() {
        this.mercuryAge = Math.floor(this.earthAge * .24)
    }
}