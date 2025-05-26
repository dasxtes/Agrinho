document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const toggleContrastBtn = document.getElementById('toggle-contrast');

    let currentFontSize = 16; // Tamanho de fonte base em px

    // Função para ajustar o tamanho da fonte
    function adjustFontSize(change) {
        currentFontSize = Math.max(12, Math.min(24, currentFontSize + change)); // Limita entre 12px e 24px
        body.style.fontSize = `${currentFontSize}px`;
        localStorage.setItem('fontSize', currentFontSize); // Salva a preferência
    }

    // Carrega a preferência de fonte do localStorage
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        currentFontSize = parseInt(savedFontSize);
        body.style.fontSize = `${currentFontSize}px`;
    }

    // Carrega a preferência de contraste do localStorage
    const savedContrast = localStorage.getItem('highContrast');
    if (savedContrast === 'true') {
        body.classList.add('high-contrast');
    }

    // Event Listeners para os botões de acessibilidade
    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', () => adjustFontSize(2));
    }
    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', () => adjustFontSize(-2));
    }
    if (toggleContrastBtn) {
        toggleContrastBtn.addEventListener('click', () => {
            body.classList.toggle('high-contrast');
            localStorage.setItem('highContrast', body.classList.contains('high-contrast')); // Salva a preferência
        });
    }
});