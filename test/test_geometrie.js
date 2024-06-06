// const geometrie = require('../cube/geometrie.js');
const { perimetre, aireFace, surfaceCube, volumeCube } = require('../cube/geometrie.js');
const Cube = require('../cube').Cube;

describe('Géométrie cube', function () {
    it('should calculate the perimeter of a cube with side length 3', function() {
        let response = perimetre(3);
        let expectedPerimeter = 12;
        assert.equal(response, expectedPerimeter);
    });

    it('should calculate the area of a face of a cube with side length 3', function() {
        let response = aireFace(3);
        let expectedArea = 9;
        assert.equal(response, expectedArea);
    });

    it('should calculate the surface area of a cube with side length 3', function() {
        let response = surfaceCube(3);
        let expectedSurface = 54;
        assert.equal(response, expectedSurface);
    });

    it('should calculate the volume of a cube with side length 3', function() {
        let response = volumeCube(3);
        let expectedVolume = 27;
        assert.equal(response, expectedVolume);
    });
});

describe('Géométrie cube class', function () {

    let cube = new Cube(3);

    it('should calculate the perimeter of a cube with side length 3', function() {
        let response = cube.perimetre(3);
        let expectedPerimeter = 12;
        assert.equal(response, expectedPerimeter);
    });

    it('should calculate the area of a face of a cube with side length 3', function() {
        let response = cube.aireFace(3);
        let expectedArea = 9;
        assert.equal(response, expectedArea);
    });

    it('should calculate the surface area of a cube with side length 3', function() {
        let response = cube.surfaceCube(3);
        let expectedSurface = 54;
        assert.equal(response, expectedSurface);
    });

    it('should calculate the volume of a cube with side length 3', function() {
        let response = cube.volumeCube(3);
        let expectedVolume = 27;
        assert.equal(response, expectedVolume);
    });
});