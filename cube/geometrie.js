function perimetre(lgCote) {
    return 12 * lgCote;
}

function aireFace(lgCote) {
    return lgCote * lgCote;
}

function surfaceCube(cote) {
    return aireFace(cote) * 6;
}

function volumeCube(cote) {
    return cote * cote * cote;
}

module.exports = { perimetre, aireFace, surfaceCube, volumeCube };