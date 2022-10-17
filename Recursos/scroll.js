const cajas = document.querySelectorAll('.wave-contenedor');

window.addEventListener('scroll',checkBoxes);
checkBoxes();

function checkBoxes(){
    const triggerBottom = (window.innerHeight / 5 * 4);

    cajas.forEach(caja => {
        const cajasuperior = caja.getBoundingClientRect().top;

        if(cajasuperior < triggerBottom){
            caja.classList.add('show');
        }else{
            caja.classList.remove('show');
        }
    })

}