function conversorHoraParaSegundos(stringHora: string): number {
    const [ hora, minutos, segundos ] = stringHora.split(":");
    return (Number(hora) * 3600) + (Number(minutos) * 60) + Number(segundos);
}

const resultado = conversorHoraParaSegundos("20:00:00");
console.log(resultado);
