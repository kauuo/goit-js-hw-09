import"./assets/modulepreload-polyfill-3cfb730f.js";const e={email:"",message:""},r=document.querySelector(".feedback-form"),o=document.querySelector(".form-email"),a=document.querySelector(".form-text-area");r.addEventListener("submit",m);o.addEventListener("input",n);a.addEventListener("input",n);function m(t){t.preventDefault(),console.log(e),t.target.reset(),localStorage.removeItem("formData")}function n(){e.email=o.value,e.message=a.value,localStorage.setItem("formData",JSON.stringify(e))}
//# sourceMappingURL=commonHelpers2.js.map