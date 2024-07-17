const formData = {
    email: "",
    message: ""
};

const KEY = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form");

feedbackForm.addEventListener('input', onInputForm);
feedbackForm.addEventListener('submit', onFormSubmit);

onSaveFormInfo();

function onInputForm(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
}

function onSaveFormInfo() {
    const savedData = localStorage.getItem(KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        feedbackForm.email.value = formData.email || '';
        feedbackForm.message.value = formData.message || '';
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();

    if (feedbackForm.email.value !== '' && feedbackForm.message.value !== '') {
        console.log({
            email: feedbackForm.email.value,
            message: feedbackForm.message.value
        });

        localStorage.removeItem(KEY);
        feedbackForm.reset();
    } else {
        alert('Fill please all fields');
    }
}