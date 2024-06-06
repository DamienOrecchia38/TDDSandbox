class Cube {
    
    constructor(lgCote) {
        this.lgCote = lgCote;
    }

    perimetre() {
        return this.lgCote * 4;
    }

    aireFace() {
        return this.lgCote * this.lgCote;
    }

    surface() {
        return this.aireFace() * 6;
    }

    volume() {
        return this.lgCote * this.lgCote * this.lgCote;
    }
}

module.exports = { Cube };