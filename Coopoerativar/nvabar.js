var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');
var corBtn = document.querySelector('i');

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
        corBtn.classList.remove('open');
    }else{
        ul.classList.add('open');
        corBtn.classList.add('open');
    }
}