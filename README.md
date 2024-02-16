# Desafio jogo Forca

## Objetivo
O objetivo desse projeto foi desenvolver um mini-jogo da forca utilizando <strong>NODE.JS</strong> podendo ser rodado diretamente do terminal.
<br>
O jogo desafia o jogador a adivinhar o nome de uma fruta, escolhida aleatoriamente.
<br><br>
Ex.: Fruta: C________

## Fluxo da aplicação
Ao dar início, o usuário recebe uma mensagem informando o número de letras da palavra (nome da fruta) a ser
adivinhada. A palavra é exibida apenas com a letra inicial visível, seguida de uma solicitação de resposta do usuário.
<br>
<br>
A palavra a ser adivinhada (nome da fruta) será selecionada aleatoriamente de uma coleção de dados com 30 palavras. Cada palavra é um dado do tipo string.
<br>
<br>
A resposta do usuário deve ser uma letra que exista na palavra.
<br>
<br>
Conforme o input do usuário, se a resposta for correta, uma nova solicitação de resposta será exibida.
<br>
<br>
Se a resposta for errada, uma mensagem será exibida, informando que a opção digitada está errada e também mostrando as chances de erro restantes que o usuário possui.
<br>
<br>
Ao digitar qualquer caractere que não seja uma única letra, uma mensagem será exibida, solicitando que o usuário digite uma letra válida.
<br>
<br>
Cada resposta correta fornecida pelo usuário desbloqueará automaticamente a próxima solicitação de resposta,
continuando esse ciclo até que todas as letras da palavra sejam reveladas e o jogo seja encerrado com uma mensagem de vitória.
<br>
<br>
O usuário terá 4 chances de erro. Se ele gastar todas as chances, o jogo será encerrado com uma mensagem de derrota.
