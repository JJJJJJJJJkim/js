for(let i = 0; i < 3; i ++){
    const bt = document.querySelectorAll('.tab-button');
    const tc = document.querySelectorAll('.tab-content');
    bt[i].addEventListener('click', function(){
        bt[0].classList.remove('orange');
        bt[1].classList.remove('orange');
        bt[2].classList.remove('orange');
        bt[i].classList.add('orange');
        tc[0].classList.remove('show');
        tc[1].classList.remove('show');
        tc[2].classList.remove('show');
        tc[i].classList.add('show');
    });
}