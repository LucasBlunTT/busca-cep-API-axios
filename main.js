const inputCep = document.getElementById('js-input-cep');
const btnBuscarCep = document.getElementById('js-btn-buscar-cep');

const inputBairro = document.getElementById('js-input-bairro');
const inputcepDados = document.getElementById('js-input-cep-dados');
const inputLogradouro = document.getElementById('js-input-logradouro');
const inputEstado = document.getElementById('js-input-estado');

const areaDados = document.getElementById('js-dados');
const msgErro = document.getElementById('js-msg-error');

btnBuscarCep.addEventListener('click', () => {
    if (inputCep.value != "") {

        axios({
            method: 'GET',
            url: `https://viacep.com.br/ws/${inputCep.value}/json/`
        })    
        .then(response => {
            let data = response.data;
            inputBairro.value = data.bairro;
            inputcepDados.value = data.cep;
            inputLogradouro.value = data.logradouro;
            inputEstado.value = data.uf;

            areaDados.style.display = 'block'
            msgErro.style.display = 'none'
        });

    } else {
        inputBairro.value = "";
        inputcepDados.value = "";
        inputLogradouro.value = "";
        inputEstado.value = "";

        areaDados.style.display = 'none'
        msgErro.style.display = 'block'
    }
})

