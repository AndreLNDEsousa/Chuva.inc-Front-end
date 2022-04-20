clique = 1
cliqueComentario = 1
function SumirTexto(){
    if(clique == 1){
    document.getElementById("texto-completo").classList.add("texto-completo-1")
    document.getElementById("texto-completo").classList.remove("texto-completo-0")
    document.getElementById("sumir").classList.add("texto-completo-0")
    document.getElementById("conteudoEscrever").classList.add("NaoAtivo")
    document.getElementById("conteudoEnviado").classList.add("NaoAtivo")
    document.getElementById("conteudoPergunta").classList.remove("NaoAtivo")
    document.getElementById("comentario").classList.add("NaoAtivo")
    clique = 2
    }else if(clique == 2){
    document.getElementById("texto-completo").classList.remove("texto-completo-1")
    document.getElementById("texto-completo").classList.add("texto-completo-0")
    document.getElementById("sumir").classList.remove("texto-completo-0")
    clique = 1;
    }
}

function TrocarConteudo(){
    document.getElementById("texto-completo").classList.remove("texto-completo-1")
    document.getElementById("texto-completo").classList.add("texto-completo-0")
    document.getElementById("sumir").classList.remove("texto-completo-0")
    clique = 1;
    document.getElementById("conteudoPergunta").classList.add("NaoAtivo")
    document.getElementById("conteudoEscrever").classList.remove("NaoAtivo")
    
}
function TrocaConteudo2(){
    document.getElementById("conteudoEscrever").classList.add("NaoAtivo")
    document.getElementById("conteudoEnviado").classList.remove("NaoAtivo")
    document.getElementById("comentario").classList.remove("NaoAtivo")
}

function TrocaConteudo3(){
    document.getElementById("conteudoEnviado").classList.add("NaoAtivo")
    document.getElementById("conteudoEscrever").classList.remove("NaoAtivo")
    document.getElementById("comentario").classList.add("NaoAtivo")
}

function Comentarios_True(){
    if(cliqueComentario == 1){
    document.getElementById("AparecerComentarios").classList.add("ComentarioTrue")
    document.getElementById("AparecerComentarios").classList.remove("ComentarioFalse")
    cliqueComentario = 2;
    }else if(cliqueComentario == 2){
    document.getElementById("AparecerComentarios").classList.remove("ComentarioTrue")
    document.getElementById("AparecerComentarios").classList.add("ComentarioFalse")
    cliqueComentario = 1;
    }
}