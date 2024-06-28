document.addEventListener("DOMContentLoaded", function () {
    // Garantir que o carregamento seja exibido por pelo menos 5 segundos
    setTimeout(function () {
        const loadingElement = document.getElementById("loading");
        if (loadingElement) {
            loadingElement.style.display = "none";
        }
    }, 2000); // 5000 milissegundos = 5 segundos

    // Depoimentos
    let depoimentos = document.querySelectorAll('.secao-depoimentos .depoimento');
    let index = 0;

    function showDepoimento(i, showAll = false) {
        depoimentos.forEach(function (depoimento) {
            depoimento.style.display = showAll ? 'block' : 'none';
        });
        if (!showAll && depoimentos[i]) {
            depoimentos[i].style.display = 'block';
        }
    }

    function nextDepoimento() {
        index++;
        if (index >= depoimentos.length) {
            index = 0;
        }
        showDepoimento(index);
    }

    function checkScreenSize() {
        let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
        if (isMobile) {
            showDepoimento(index);
            let btnNext = document.querySelector('.secao-depoimentos button');
            if (!btnNext) {
                btnNext = document.createElement('button');
                btnNext.addEventListener('click', nextDepoimento);
                document.querySelector('.secao-depoimentos').appendChild(btnNext);
            }
        } else {
            showDepoimento(0, true);
            let btnNext = document.querySelector('.secao-depoimentos button');
            if (btnNext) {
                btnNext.remove();
            }
        }
    }

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Imagem saltando
    const images = document.querySelectorAll('.secao-bonus img');

    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.classList.add('hovered');
        });

        img.addEventListener('mouseleave', () => {
            img.classList.remove('hovered');
        });
    });

    // Banner Image Animation
    const bannerImage = document.querySelector('.banner img'); // Ajuste o seletor conforme necessário

    function checkBannerScreenWidth() {
        if (bannerImage) {
            if (window.innerWidth <= 430) {
                bannerImage.style.animation = 'slide 10s linear infinite';
            } else {
                bannerImage.style.animation = 'none'; // Remove a animação para telas maiores
                bannerImage.style.transform = 'translateX(0)'; // Reinicia a posição
            }
        }
    }

    checkBannerScreenWidth(); // Executa na carga da página

    window.addEventListener('resize', checkBannerScreenWidth);

    // Adicionar listeners de clique para redirecionar os botões
    const botaoCompra1 = document.getElementById('botaocompra1');
    if (botaoCompra1) {
        botaoCompra1.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar comportamento padrão do botão
            window.open('https://hotmart.com/pt-br/marketplace/produtos/desinflama-3x/M92273721N', '_blank');
        });
    }

    const botaoCompra2 = document.getElementById('botaocompra2');
    if (botaoCompra2) {
        botaoCompra2.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar comportamento padrão do botão
            window.open('https://hotmart.com/pt-br/marketplace/produtos/desinflama-3x/M92273721N', '_blank');
        });
    }
});
