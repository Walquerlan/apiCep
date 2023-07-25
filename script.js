

function buscarEstados(){
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(resposta => resposta.json())
    .then(listaDeEstados => {
        listaDeEstados.forEach(estado =>{
            estados.innerHTML += `
            <option value="${estado.sigla}">${estado.nome}</option>
            `
        })
    })
}

buscarEstados()

function buscarcep(){
    if(cep.value.length == 8)
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(resposta => resposta.json())
    .then(endereço => {
        logradouro.value = endereço.logradouro;
        bairro.value = endereço.bairro;
        localidade.value = endereço.bairro;
        estados.value = endereço.uf;
    })
}
