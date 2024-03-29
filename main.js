const form = document.getElementById('areas');
let formEValido = false;

function validaCampo(campoA,campoB) {
    return campoA>campoB
}

form.addEventListener('submit',function(e){
    e.preventDefault ();


const numeroA = document.getElementById('A');
const numeroB = document.getElementById('B');
const campoA = parseFloat(numeroA.value);
const campoB = parseFloat(numeroB.value);

    const mensagemSucesso = `Resultado do campo B correto: <b> ${campoB} <b> é maior que o valor A: <b> ${campoA} <b>`;
    const mensagemErro = `Resultado incorreto do valor B: <b> ${campoB}<b> é menor que o valor de A: <b> ${campoA}<b>`;
    const containerMensagemSucesso= document.querySelector('.message-success');
    const containerMensagemErro = document.querySelector('.message-erro');
    
    formEValido = validaCampo(campoA, campoB);

    if (formEValido ==true) {
        containerMensagemSucesso.style.display = 'none';
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block';

    } else {
                containerMensagemSucesso.innerHTML = mensagemSucesso;
                containerMensagemSucesso.style.display = 'block';
                containerMensagemErro.style.display = 'none';
        };
    })
