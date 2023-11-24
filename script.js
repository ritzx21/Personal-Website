var typed = new Typed('.typer', {
    strings: ['Web Devloper.', 'Coder.', 'Designer.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

const emailIcon = document.querySelector('.bi-envelope-fill');
emailIcon.addEventListener('click', () => {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank');

});