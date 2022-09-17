interface Ad {
    id: string;
    name: string;
    createdAt: Date;
}

function calcularHaQuantoTempoOAnuncioFoiPublicado(ad : Ad) {
    // função para calcular
}

calcularHaQuantoTempoOAnuncioFoiPublicado({
    id : 1,
    name : "AD 01",
    createdAt: new Date(),
})

calcularHaQuantoTempoOAnuncioFoiPublicado({
    id : '1',
})

calcularHaQuantoTempoOAnuncioFoiPublicado({
    id : '1',
    name : "AD 01",
    createdAt: new Date(),
})