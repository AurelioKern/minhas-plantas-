function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
       


     if(titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) ) {
        resultados += `
<div class="item-resultado ">
                <h3>
                <a href="#" target="_blank">${dado.titulo}
                </h3>
                <p class="descrição-meta">${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank">Mais
                    informações</a>
            </div>
            `
     }

if(!resultados){
    resultados = "Nada foi encontrado"
}

    }

    section.innerHTML = resultados;
}




