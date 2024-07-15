let formData = {
    email: "",
    message: ""
}

const KEY = "feedback-form-state"
const feedbackForm = document.querySelector(".feedback-form")

feedbackForm.addEventListener('input', onInputForm);

onSaveFormInfo()

// function onSaveInfoForm() {
//     ;
//     if (savedData) {
//         const {email, message} = JSON.parse(savedData);
//         feedbackForm.email.value = formData.email;
//         feedbackForm.message.value = formData.message;
//         formData.email = email;
//         formData.message = message;
//     }
// }

function onInputForm(evt) {
    const value = evt.target.value
    localStorage.setItem(KEY, value)
}
function onSaveFormInfo() {
    const savedData = localStorage.getItem(KEY)
    feedbackForm.email.value = formData.email;
        feedbackForm.message.value = formData.message;
        formData.email = email;
        formData.message = message; 
 }
         
         
// function onFormSubmit(evt) {
//     evt.preventDefault();

//     evt.currentTarget.reset();
//     localStorage.removeItem(key);

//     console.log(formData)}