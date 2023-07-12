


const bt = document.querySelectorAll('.tab-button');
const tc = document.querySelectorAll('.tab-content');


function openTab (index){
    for(let i = 0; i < 3; i++) {
        bt[i].classList.remove('orange');
    }
    bt[index].classList.add('orange');
    for(let i = 0; i < 3; i++) {
        tc[i].classList.remove('show');
    }
    tc[index].classList.add('show');
}
document.querySelector('.list').addEventListener('click', function(e){
    openTab(parseInt(e.target.dataset.id));
})

// for(let i = 0; i < 3; i ++){
    
    
//     bt[i].addEventListener('click', function(){
//         openTab(i)
//     });
// }