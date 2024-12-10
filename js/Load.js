var halcoloader = document.querySelector('.halcoloader');
var halcoloaderLetras = document.querySelector('.h-letras');

divLetras = ``

divLoader = `<div class="halcoloader-logo" style="width: 40%;margin-top: 4%;">
<img style="width: 100%;" src="img/LoadV3.gif" alt="Logo">		
</div>`;

halcoloaderActive = () => {
    document.body.style.overflow = "hidden";
    $('.halcoloader').html(divLoader);
    if (halcoloaderLetras) {
        $('.letrasHalconet').html(divLetras);
    }
    return halcoloader.classList.add('active')
};

halcoloaderRemove = () => {
    document.body.style.overflow = "auto";  // O "scroll"
    return halcoloader.classList.remove('active')
};

