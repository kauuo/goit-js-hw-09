import"./assets/modulepreload-polyfill-3cfb730f.js";const e={email:"",message:""},n=document.querySelector(".feedback-form"),o=document.querySelector(".form-email"),r=document.querySelector(".form-text-area");n.addEventListener("submit",s);o.addEventListener("input",m);r.addEventListener("input",m);l();function s(t){if(t.preventDefault(),!e.email||!e.message){alert("Заповніть обидва поля.");return}console.log(e),t.target.reset(),localStorage.removeItem("formData")}function m(){e.email=o.value,e.message=r.value,localStorage.setItem("formData",JSON.stringify(e))}function l(){const t=localStorage.getItem("formData");if(t){const a=JSON.parse(t);o.value=a.email,r.value=a.message,Object.assign(e,a)}}
//# sourceMappingURL=commonHelpers2.js.map
