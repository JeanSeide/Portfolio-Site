
document.addEventListener('DOMContentLoaded', () => {

    const updateButton = document.getElementById('update-cta-button');
    const newCtaInput = document.getElementById('new-cta-input');
    const mainCtaHeadline = document.getElementById('main-cta-headline');

    const handleCtaUpdate = () => {

        const newText = newCtaInput.value.trim();

        if (newText) {

            mainCtaHeadline.textContent = newText;

            newCtaInput.value = '';
            newCtaInput.focus();
        } else {
            console.warn("Input field is empty. Please enter a headline to update.");
            mainCtaHeadline.textContent = "Elevate Your Business with Clarity and Speed.";
        }
    };


    updateButton.addEventListener('click', handleCtaUpdate);


    newCtaInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleCtaUpdate();
        }
    });

    console.log("CTA Editor script initialized. Ready for dynamic updates.");
});