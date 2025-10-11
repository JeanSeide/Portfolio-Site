(function() {
    const ctaInput = document.getElementById('cta-input');
    const ctaButton = document.getElementById('cta-button');
    const ctaHeadline = document.getElementById('cta-headline');
    const defaultCtaText = ctaHeadline.textContent;

    function getNewHeadline(inputValue) {
        return inputValue.trim() === '' ? defaultCtaText : inputValue;
    }

    ctaInput.addEventListener('input', (event) => {
        const newText = event.target.value;
        ctaHeadline.textContent = getNewHeadline(newText);
    });

    ctaButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        const finalNewText = ctaInput.value;
        ctaHeadline.textContent = getNewHeadline(finalNewText);
        ctaInput.value = '';
        ctaInput.focus();
    });
})();
