const arrayImmagini = ['img/1.webp', 'img/2.webp', 'img/3.webp', 'img/4.webp', 'img/5.webp'];

const listaImmaginiDom = document.querySelector('.listaImmagini');

let contenutoDiapositive = "";

for (let i = 0; i < arrayImmagini.length; i++) {
    const contenutoContenitoreImmagine = `<div class="contenitoreImmagine">
                                <img class="foto" src="${arrayImmagini[i]}">
                            </div>`;
    contenutoDiapositive += contenutoContenitoreImmagine; //aggiungo contenuto appena creato
}

listaImmaginiDom.innerHTML = contenutoDiapositive; //lo mostro nell'html

const contenitoreImmagineDom = document.getElementsByClassName('contenitoreImmagine'); //array di classi

let immagineCorrente = 0; //decido la mia immagine corrente

contenitoreImmagineDom[immagineCorrente].classList.add('block'); //nell'immagine dove mi trovo gli aggiungo la classe block per renderla visibile

const successivoDom = document.getElementById('successivo'); 

const precedenteDom = document.getElementById('precedente');

successivoDom.addEventListener('click', 
    function() {
        if (immagineCorrente < contenitoreImmagineDom.length - 1) {

            contenitoreImmagineDom[immagineCorrente].classList.remove('block');
            immagineCorrente++;
            contenitoreImmagineDom[immagineCorrente].classList.add('block');
            precedenteDom.classList.remove('none');

            if (immagineCorrente == contenitoreImmagineDom.length - 1) {
                successivoDom.classList.add('none');
            }

        }
    }
);

precedenteDom.addEventListener('click', 
    function() {
        if (immagineCorrente > 0) {

            contenitoreImmagineDom[immagineCorrente].classList.remove('block');
            immagineCorrente--;
            contenitoreImmagineDom[immagineCorrente].classList.add('block');
            successivoDom.classList.remove('none');

            if (immagineCorrente == 0) {
                precedenteDom.classList.add('none');
            }

        }
    }
);



