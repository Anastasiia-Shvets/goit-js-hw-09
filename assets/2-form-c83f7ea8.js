const o="feedback-form-state",t=document.querySelector(".feedback-form");t.addEventListener("input",l);t.addEventListener("submit",m);function l(){const e=t.elements.email.value,a=t.elements.message.value;r(o,{email:e,message:a})}function m(e){e.preventDefault();const a=t.elements.email.value,n=t.elements.message.value;a&&n?(localStorage.removeItem(o),t.reset(),s()):alert("Please fill in both fields of the form.")}function r(e,a){const n=JSON.stringify(a);localStorage.setItem(e,n)}function c(e){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return null}}function s(){const e=c(o);e&&(t.elements.email.value=e.email||"",t.elements.message.value=e.message||"")}s();
//# sourceMappingURL=2-form-c83f7ea8.js.map
