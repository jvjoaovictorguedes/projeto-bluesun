const botoesCaes = document.querySelectorAll('.cabecalho__botoes_caes');
const botoesGatos = document.querySelectorAll('.cabecalho__botoes_gatos');
const racasCaes = document.querySelectorAll('.menu__caes');
const racasGatos = document.querySelectorAll('.menu__gatos');

botoesCaes.forEach((link, index) => {
    link.addEventListener('mouseenter', () =>{
        racasCaes[index].style.display = 'block';
    });

    link.addEventListener('mouseleave', () => {
        racasCaes[index].style.display = 'none';
    });
});

botoesGatos.forEach((link, index) => {
    link.addEventListener('mouseenter', () =>{
        racasGatos[index].style.display = 'block';
    });

    link.addEventListener('mouseleave', () => {
        racasGatos[index].style.display = 'none';
    });
});