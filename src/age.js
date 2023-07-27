export class Age {
    constructor(earthAge) {
        this.earthAge = earthAge;
        this.mercuryAge = "";
        this.venusAge = "";
        this.marsAge = "";
        this.jupiterAge = "";
    }

    convertToPlanetAges() {
        this.mercuryAge = Math.floor(this.earthAge / .24)
        this.venusAge = Math.floor(this.earthAge / .62)
        this.marsAge = Math.floor(this.earthAge / 1.88)

    }
}