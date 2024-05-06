document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, pageIndex) => {
            if (pageIndex === index) {
                page.style.display = 'flex';
            } else {
                page.style.display = 'none';
            }
        });
    }

    showPage(currentPage);

    function nextPage() {
        currentPage++;
        if (currentPage >= pages.length) {
            currentPage = 0;
        }
        showPage(currentPage);
        randomizeColor(pages[currentPage]);
    }

    // Adicionando evento de clique na página para avançar
    document.body.addEventListener('click', nextPage);

    // Array de cores predefinidas
    const colors = ['#ffcccc', '#ffcc99', '#ffff99', '#99ff99', '#99ccff', '#cc99ff'];

    // Função para selecionar uma cor aleatória do array de cores
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Função para aplicar uma cor aleatória à página
    function randomizeColor(page) {
        const randomColor = getRandomColor();
        page.style.backgroundColor = randomColor;
    }
});
