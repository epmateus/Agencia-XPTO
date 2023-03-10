/* 
    quando clicar na seta para avançar, temos que esconder 
    todas as imagens e mostrar a próxima imagem

        a imagem atual começa em 0, porque é a primeira imagem
        assim que for clicado no avançar, eu preciso adicionar mais 1 ao contador de imagens para poder saber que agora eu mostrarei a segunda imagem

        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar

        mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima e colocar a classe
            mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

function esconderImagem(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar')
}

/* 
    quando clicar na seta pra avançar, temos que esconder todas as imagens e mostrar a próxima imagem
*/

setaAvancar.addEventListener('click', function(){

    // testa se o contato da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1
    if(imagemAtual === totalDeImagens){
        return
    }

    /* a imagem atual começa em 0, porque é a primeira imagem
        assim que for clicado no avançar, eu preciso adicionar mais 1 ao contador de imagens para poder saber que agora eu mostrarei a segunda imagem */
    imagemAtual++

    /* esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar */
    
    esconderImagem()

    /*  mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima e colocar a classe
            mostrar nela */
    
    mostrarImagem()
})

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0) {
        return
    }

    imagemAtual--

    esconderImagem()
    mostrarImagem()
})