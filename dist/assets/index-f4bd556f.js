const a={_origin:"https://api.emailjs.com"},p=(t,e="https://api.emailjs.com")=>{a._userID=t,a._origin=e},m=(t,e,i)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class c{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const u=(t,e,i={})=>new Promise((o,n)=>{const r=new XMLHttpRequest;r.addEventListener("load",({target:s})=>{const d=new c(s);d.status===200||d.text==="OK"?o(d):n(d)}),r.addEventListener("error",({target:s})=>{n(new c(s))}),r.open("POST",a._origin+t,!0),Object.keys(i).forEach(s=>{r.setRequestHeader(s,i[s])}),r.send(e)}),l=(t,e,i,o)=>{const n=o||a._userID;m(n,t,e);const r={lib_version:"3.10.0",user_id:n,service_id:t,template_id:e,template_params:i};return u("/api/v1.0/email/send",JSON.stringify(r),{"Content-type":"application/json"})},h=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},_=(t,e,i,o)=>{const n=o||a._userID,r=h(i);m(n,t,e);const s=new FormData(r);return s.append("lib_version","3.10.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",n),u("/api/v1.0/email/send-form",s)},f={init:p,send:l,sendForm:_};export{f as e};