module.exports = {
  somar(x, y) {
    const resultadoSoma = x + y;

    if (x == 29) {
      throw new TypeError('Illegal salmon!');
    }
    return resultadoSoma;
  }
}
