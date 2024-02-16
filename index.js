import ReadLine from "readline-sync"
import { escolhaPalavra, atualizaPalavraOculta, verificaAcerto, verificaLetra } from "./services/funcoes.js"

const input = (text) => ReadLine.question(text)

function main() {

    let chance = 4

    console.log("------------JOGO DA FORCA------------")

    const palavraEscolhida = escolhaPalavra().toLowerCase()

    let palavraOculta = "_".repeat(palavraEscolhida.length)

    console.log(`\nNome da fruta com ${palavraEscolhida.length} letras`)

    while (chance > 0) {

        console.log(`\nFruta: ${palavraOculta}`)
        let letraDigitada = input("Digite uma letra: ").toLowerCase()

        while (!verificaLetra(letraDigitada)) {
            console.log("\nPor favor, digite uma letra válida.")
            letraDigitada = input("Digite uma letra: ").toLowerCase()
        }

        palavraOculta = atualizaPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida)

        if (!verificaAcerto(palavraOculta, letraDigitada)) {
            chance -= 1
            console.log(chance > 0 ? `\nOPÇÃO ERRADA! Você ainda tem ${chance} chance(s)!` : "\n-------------VOCÊ PERDEU!!-------------\n\n A fruta era: " + palavraEscolhida)
        }

        if (palavraOculta === palavraEscolhida) {
            console.log("\n--------------VOCÊ VENCEU!!-------------\n\n A fruta era: " + palavraEscolhida)
            break
        }
    }
}

main()