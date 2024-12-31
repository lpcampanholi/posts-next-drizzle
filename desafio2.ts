function criptografar(text: string): Number[] {
    const textMinusculo = text.toLowerCase();
    const arrayLetras = textMinusculo.split("");
    return arrayLetras.map((letter) => {
        return (Number(letter.charCodeAt(0)) - 96);
    })
}

const resultadoCriptogrado = criptografar("mamaco");
console.log(resultadoCriptogrado);
