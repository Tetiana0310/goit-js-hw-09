import"./assets/styles-6e28a9d1.js";let t={email:"",message:""};const l="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("input",o);e.addEventListener("submit",s);m();function o(a){t[a.target.name]=a.target.value,localStorage.setItem(l,JSON.stringify(t))}function m(){const a=localStorage.getItem(l);a&&(t=JSON.parse(a),e.email.value=t.email||"",e.message.value=t.message||"")}function s(a){a.preventDefault(),e.email.value!==""&&e.message.value!==""?(console.log({email:e.email.value,message:e.message.value}),localStorage.removeItem(l),e.reset()):alert("Fill please all fields")}
//# sourceMappingURL=commonHelpers2.js.map