const localStorageKey = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const textareaRef = formRef.querySelector('textarea');

formRef.addEventListener('input', onFormInput);

function onFormInput() {
    const email = formRef.elements.email.value;
    const message = formRef.elements.message.value;
    
    const obj = {
        email,
        message,
    };

    saveToLS('localStorageKey', obj);
}

function saveToLS(key, value) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
}


function loadFromLS(key) {
    const data = localStorage.getItem(key);
    try {
        JSON.parse(data);
    } catch {
        return data;
    }
}

function init() {
    const obj = loadFromLS('localStorageKey');
}
init();