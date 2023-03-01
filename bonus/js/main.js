const arrayImmagini = ['img/1.webp', 'img/2.webp', 'img/3.webp', 'img/4.webp', 'img/5.webp'];

const listaImmaginiDom = document.querySelector('.listaImmagini');
const containerWrapperDom = document.querySelector('.container-wrap');

let contenutoDiapositive = "";
let containerWrapperContenuto = "";

for (let i = 0; i < arrayImmagini.length; i++) {
    const contenutoContenitoreImmagine = `<div class="contenitoreImmagine">
                                <img class="foto" src="${arrayImmagini[i]}">
                            </div>`;
    const nuovoContenutoContainerWrap = `<div class="thumb-wrapper">
                                            <img src="${arrayImmagini[i]}" alt="">
                                        </div>`;
    contenutoDiapositive += contenutoContenitoreImmagine; //aggiungo contenuto appena creato
    containerWrapperContenuto += nuovoContenutoContainerWrap;
}

listaImmaginiDom.innerHTML = contenutoDiapositive; //lo mostro nell'html
containerWrapperDom.innerHTML = containerWrapperContenuto

const contenitoreImmagineDom = document.getElementsByClassName('contenitoreImmagine'); //array di classi
const thumbsWrapperDom = document.getElementsByClassName('thumb-wrapper');

let immagineCorrente = 0; //decido la mia immagine corrente

contenitoreImmagineDom[immagineCorrente].classList.add('block'); //nell'immagine dove mi trovo gli aggiungo la classe block per renderla visibile
thumbsWrapperDom[immagineCorrente].classList.add('corrente');

const successivoDom = document.getElementById('successivo'); 

const precedenteDom = document.getElementById('precedente');

successivoDom.addEventListener('click', 
    function() {
        if (immagineCorrente < contenitoreImmagineDom.length - 1) {

            contenitoreImmagineDom[immagineCorrente].classList.remove('block');
            thumbsWrapperDom[immagineCorrente].classList.remove('corrente');
            immagineCorrente++;
            contenitoreImmagineDom[immagineCorrente].classList.add('block');
            thumbsWrapperDom[immagineCorrente].classList.add('corrente');

        }else{
            contenitoreImmagineDom[immagineCorrente].classList.remove('block');
            thumbsWrapperDom[immagineCorrente].classList.remove('corrente');
            immagineCorrente = 0;
            contenitoreImmagineDom[immagineCorrente].classList.add('block');
            thumbsWrapperDom[immagineCorrente].classList.add('corrente');
        }
    }
);

precedenteDom.addEventListener('click', 
    function() {
        if (immagineCorrente > 0) {

            contenitoreImmagineDom[immagineCorrente].classList.remove('block');
            thumbsWrapperDom[immagineCorrente].classList.remove('corrente');
            immagineCorrente--;
            contenitoreImmagineDom[immagineCorrente].classList.add('block');
            thumbsWrapperDom[immagineCorrente].classList.add('corrente');
            

        }else{
            contenitoreImmagineDom[immagineCorrente].classList.remove('block');
            thumbsWrapperDom[immagineCorrente].classList.remove('corrente');
            immagineCorrente = 4;
            contenitoreImmagineDom[immagineCorrente].classList.add('block');
            thumbsWrapperDom[immagineCorrente].classList.add('corrente');
        }
    }
);



