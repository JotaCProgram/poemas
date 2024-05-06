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
    }

    document.getElementById('nextButton').addEventListener('click', nextPage);

    // Adicionando evento de clique na página para avançar
    document.body.addEventListener('click', nextPage);
});
