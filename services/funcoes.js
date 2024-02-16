import listaDeFrutas from "../data/dados.js"

export function escolhaPalavra() {
    return listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)]
}

export function atualizaPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {
    let palavraOcultaArray = palavraOculta.split('')

    for (let i = 0; i < palavraEscolhida.length; i++) {
        if (letraDigitada === palavraEscolhida[i]) {
            palavraOcultaArray[i] = letraDigitada
        }
    }

    return palavraOcultaArray.join('')
}

export function verificaAcerto(palavraOculta, letraDigitada) {

    if (palavraOculta.includes(letraDigitada)) {
        return true
    }
    else {
        return false
    }
}

export function verificaLetra(letraDigitada) {
    if (letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)) {
        return true
    } else {
        return false
    }
}