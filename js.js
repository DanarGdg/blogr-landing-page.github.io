let btn = document.getElementById('btn');
    let ul = document.getElementById('ul');
    let hamburgerIcon = document.getElementById('hamburgerIcon');

    btn.addEventListener('click', function() {
        if (btn.checked === true) {
            hamburgerIcon.setAttribute('src', './images/icon-close.svg')
            ul.style.display = 'block';
        }else{
            hamburgerIcon.setAttribute('src', './images/icon-hamburger.svg')
            ul.style.display = 'none';
        }
})

function myFunction(x) {
    let ilusstrationLaptopDekstop = document.getElementById('ilusstrationLaptopDekstop');
    let ilustratorEditorMobile = document.getElementById('ilustratorEditorMobile');
    if (x.matches) {
        ilustratorEditorMobile.setAttribute('src', './images/illustration-editor-mobile.svg')
        ilusstrationLaptopDekstop.setAttribute('src', './images/illustration-laptop-mobile.svg')
    } else {
        ilustratorEditorMobile.setAttribute('src', './images/illustration-editor-desktop.svg')
        ilusstrationLaptopDekstop.setAttribute('src', './images/illustration-laptop-desktop.svg')
    }
}
  
var x = window.matchMedia("(max-width: 1300px)")
myFunction(x)
x.addListener(myFunction)