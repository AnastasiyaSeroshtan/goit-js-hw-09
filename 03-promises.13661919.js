var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=a);var r=a("iQIUW");const n=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),i=document.querySelector('input[name="amount"]'),c=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{},s=localStorage.getItem("feedback-form-state");if(s){const e=JSON.parse(s);l.value=e.delay||"",u.value=e.step||"",i.value=e.amount||""}else l.value="",u.value="",i.value="";function f(e,t){return new Promise(((o,a)=>{const r=Math.random()>.3;setTimeout((()=>{r?o(`✅ Fulfilled promise ${e} in ${t}ms`):a(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}n.addEventListener("input",(function(e){c[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(c))})),n.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state")));let t=+l.value,o=+u.value,a=+i.value;for(let e=1;e<=a;e+=1)f(e,t).then((e=>{r.Notify.success(e)})).catch((e=>{r.Notify.failure(e)})),t+=o;localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.13661919.js.map
