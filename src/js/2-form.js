`use strict`
const localStorageKey = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', onFormSubmit);

function onFormInput() {
    const email = formRef.elements.email.value;
    const message = formRef.elements.message.value;
    
    const obj = {
        email,
        message,
    };

    saveToLS(localStorageKey, obj);
}

function onFormSubmit(event) {
    event.preventDefault();

    const email = formRef.elements.email.value;
    const message = formRef.elements.message.value;

    if (email && message) {
        localStorage.removeItem(localStorageKey);
        formRef.reset();
        init();
    } else {
        alert('Please fill in both fields of the form.');
    }
}

function saveToLS(key, value) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
}


function loadFromLS(key) {
    const data = localStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch {
        return null;
    }
}

    function init() {
    const savedData = loadFromLS(localStorageKey);

    if (savedData) {
        formRef.elements.email.value = savedData.email || '';
        formRef.elements.message.value = savedData.message || '';
        }
}

init();