import"./assets/styles-6e28a9d1.js";let e={email:"",message:""};const t="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("input",s);l();function s(o){const m=o.target.value;localStorage.setItem(t,m)}function l(){localStorage.getItem(t),a.email.value=e.email,a.message.value=e.message,e.email=email,e.message=message}
//# sourceMappingURL=commonHelpers2.js.map
