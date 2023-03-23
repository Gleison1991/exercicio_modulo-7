const form = document.getElementById('areas');
const numeroA = document.getElementById('A');
const numeroB = document.getElementById('B');
const campoA = parseFloat(numeroA);
const campoB = parseFloat(numeroB);
let formEValido = false;

function validaCampo(campoA,campoB) {
    return campoA > campoB;
}

form.addEventListener('submit',function(e){
    e.preventDefault ();
})

    const mensagemSucesso = `Resultado do campo B correto: <b> ${campoB.value} <b> é maior que o valor A: <b> ${campoA.value} <b>`;
    const mensagemErro = `Resultado incorreto do valor B: <b> ${campoB.value}<b> é menor que o valor de A: <b> ${campoA.value}<b>`;

    formEValido = validaCampo(campoA, campoB);
    if (formEValido ==true) {
        const containerMensagemSucesso = document.querySelector('.message-success');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'none';
        campoA = '';
        campoB = '';

    } else {
        if  (!formEValido){
                const containerMensagemError = document.querySelector('.message-error');
                containerMensagemError.innerHTML = mensagemErro;
                containerMensagemError.style.display = 'none';
        };
    }
