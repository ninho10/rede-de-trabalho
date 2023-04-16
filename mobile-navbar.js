function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').scr = "site-vip/fotos/menu_white_36dp.svg";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').scr = "site-vip/fotos/menu_white_36dp.svg";
    }
}


function entrar(){
    let entrar = document.querySelector('.login-button');
    entrar.style.background = 'red';

}