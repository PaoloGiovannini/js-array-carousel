const arrayImmagini = ['img/1.webp', 'img/2.webp', 'img/3.webp', 'img/4.webp', 'img/5.webp'];

const listaImmaginiDom = document.querySelector('.listaImmagini');

let contenutoDiapositive = "";

for (let i = 0; i < arrayImmagini.length; i++) {
    const contenutoContenitoreImmagine = `<div class="contenitoreImmagine">
                                <img class="foto" src="${arrayImmagini[i]}">
                            </div>`;

    contenutoDiapositive += contenutoContenitoreImmagine;

}

listaImmaginiDom.innerHTML = contenutoDiapositive;

const contenitoreImmagineDom = document.getElementsByClassName('contenitoreImmagine'); //array di classi

let immagineCorrente = 0;

contenitoreImmagineDom[immagineCorrente].classList.add('block'); //nell'immagine dove mi trovo gli aggiungo la classe block per renderla visibile



