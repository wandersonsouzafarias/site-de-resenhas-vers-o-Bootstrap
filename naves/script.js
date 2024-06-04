function leiaMais() {
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){ 
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Veja Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Veja Menos";
    }

}

function leiaMais1() {
    var pontos1=document.getElementById("pontos1");
    var maisTexto1=document.getElementById("mais1");
    var btnLeiaMais1=document.getElementById("btnLeiaMais1");

    if(pontos1.style.display === "none"){ 
        pontos1.style.display="inline";
        maisTexto1.style.display="none";
        btnLeiaMais1.innerHTML="Veja Mais";
    }else{
        pontos1.style.display="none";
        maisTexto1.style.display="inline";
        btnLeiaMais1.innerHTML="Veja Menos";
    }

}

function leiaMais2() {
    var pontos2=document.getElementById("pontos2");
    var maisTexto2=document.getElementById("mais2");
    var btnLeiaMais2=document.getElementById("btnLeiaMais2");

    if(pontos2.style.display === "none"){ 
        pontos2.style.display="inline";
        maisTexto2.style.display="none";
        btnLeiaMais2.innerHTML="Veja Mais";
    }else{
        pontos2.style.display="none";
        maisTexto2.style.display="inline";
        btnLeiaMais2.innerHTML="Veja Menos";
    }

}

function leiaMais3() {
    var pontos3=document.getElementById("pontos3");
    var maisTexto3=document.getElementById("mais3");
    var btnLeiaMais3=document.getElementById("btnLeiaMais3");

    if(pontos3.style.display === "none"){ 
        pontos3.style.display="inline";
        maisTexto3.style.display="none";
        btnLeiaMais3.innerHTML="Veja Mais";
    }else{
        pontos3.style.display="none";
        maisTexto3.style.display="inline";
        btnLeiaMais3.innerHTML="Veja Menos";
    }

}


/*INÍCIO DO BOTÃO LEIA MAIS PARA AS RESENHAS DE FILMES*/

function leiaMais4() {
    var visivel = document.getElementById("visivel");
    var haSerExibido = document.getElementById("haSerExibido");
    var btnLeiaMais4 = document.getElementById("btnLeiaMais4");
    if (visivel.style.display === "none") {
        visivel.style.display = "inline";
        haSerExibido.style.display = "none";
        btnLeiaMais4.innerHTML = "Leia Mais";
    } else {
        visivel.style.display = "none";
        haSerExibido.style.display = "inline";
        btnLeiaMais4.innerHTML = "Leia Menos";
    }
} 






/*FIM DO BOTÃO LEIA MAIS PARA AS RESENHAS DE FILMES*/
