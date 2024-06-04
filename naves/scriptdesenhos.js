function leiaMais(){
    var conteudo = document.getElementById("conteudo");
    var maisImagens = document.getElementById("mais4");
    var btnleiaMais =  document.getElementById("btnleiaMais");

    if (conteudo.style.display === "none"){
        conteudo.style.display = "inline";
        maisImagens.style.display = "none";
        btnleiaMais.innerHTML = "Leia Mais"
    } else {
        conteudo.style.display = "none";
        maisImagens.style.display = "inline";
        btnleiaMais.innerHTML = "Leia Menos";
    }
}




