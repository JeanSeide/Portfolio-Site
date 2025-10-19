const form = document.getElementById('feedback-form');
const feedbackDisplay = document.getElementById('feedback-display');
const charCount = document.getElementById('char-count');
const MAX_CHARS = 100;

form.addEventListener('mouseover', handleMouseEvents, true);
form.addEventListener('mouseout', handleMouseEvents, true);

form.addEventListener('input', handleInputEvents);

function handleMouseEvents(event) {
    const target = event.target;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        const tooltipText = target.dataset.tooltip;
        const tooltipElement = target.closest('.form-group').querySelector('.tooltip');

        if (tooltipText && tooltipElement) {
            if (event.type === 'mouseover') {
                tooltipElement.textContent = tooltipText;
                tooltipElement.classList.add('visible');
            } else if (event.type === 'mouseout') {
                tooltipElement.classList.remove('visible');
            }
        }
    }
}

function handleInputEvents(event) {
    const target = event.target;

    if (target.id === 'comments') {
        const currentLength = target.value.length;
        charCount.textContent = `${currentLength}/${MAX_CHARS}`;
    }

    validateField(target);
}

function validateField(field) {
    const messageElement = field.closest('.form-group').querySelector('.validation-message');
    
    if (field.value.trim() === '') {
        field.classList.add('error');
        messageElement.textContent = `${field.id} cannot be empty.`;
        return false;
    } 
    
    if (field.id === 'email' && !field.value.includes('@')) {
         field.classList.add('error');
         messageElement.textContent = `Please enter a valid email address.`;
          return false;
    }
    
    field.classList.remove('error');
    messageElement.textContent = '';
    return true;
}

form.addEventListener('submit', function(event) {

    event.preventDefault(); 
    

    event.stopPropagation();

    let formValid = true;
    const formData = {};


    const fields = form.querySelectorAll('input, textarea');

    fields.forEach(field => {

        if (!validateField(field)) {
            formValid = false;
        }
        

        formData[field.id] = field.value.trim();
    });

    if (formValid) {

        displayFeedback(formData);
        
        form.reset();
        charCount.textContent = `0/${MAX_CHARS}`;
    } else {
        console.log("Form submission blocked due to validation errors.");
    }
});

function displayFeedback(data) {
    if (feedbackDisplay.querySelector('p')) {
        feedbackDisplay.innerHTML = '';
    }

    const entryDiv = document.createElement('div');
    entryDiv.classList.add('feedback-entry');

    const namePara = document.createElement('p');
    namePara.classList.add('name');
    namePara.textContent = `Name: ${data.username}`;

    const commentPara = document.createElement('p');
    commentPara.classList.add('comment');
    commentPara.textContent = `Comment: ${data.comments}`;

    entryDiv.appendChild(namePara);
    entryDiv.appendChild(commentPara);
    
    feedbackDisplay.prepend(entryDiv);
}