"use strict";(self.webpackChunkrtkq_practice=self.webpackChunkrtkq_practice||[]).push([[293],{894:(e,t,a)=>{a.d(t,{z:()=>o});a(791);var c=a(733);const n="Button_btn__RBtNK",s="Button_isSelected__-6JYv";var r=a(184);const o=e=>{let{selected:t=!1,type:a="button",children:o,...l}=e;return(0,r.jsx)("button",{className:(0,c.Z)(n,{[s]:t}),type:a,...l,children:o})}},639:(e,t,a)=>{a.d(t,{a:()=>r});var c=a(272);const n="Loader_loader__+lRPl";var s=a(184);const r=()=>(0,s.jsx)(c.gy,{visible:!0,height:"90",width:"90",color:"#fdaa3d",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:n})},293:(e,t,a)=>{a.r(t),a.d(t,{Phonebookpage:()=>k,default:()=>w});var c=a(791),n=a(420),s=a(704),r=a(911);const o="ContactForm_contactForm__y0Rca",l="ContactForm_formLabel__TSwxK",i="ContactForm_formInput__GszVU",d="ContactForm_contactFormBtn__Vy3TA";var m=a(184);const h=()=>{const e=(0,n.I0)(),[t,a]=(0,c.useState)(""),[h,_]=(0,c.useState)(""),u=e=>{const{name:t,value:c}=e.target;switch(t){case"name":a(c);break;case"number":_(c)}};return(0,m.jsxs)("form",{className:o,onSubmit:c=>{c.preventDefault(),e((0,r.je)({id:(0,s.x0)(),name:t,number:h})),a(""),_("")},children:[(0,m.jsxs)("label",{className:l,children:["Name",(0,m.jsx)("input",{className:i,type:"text",name:"name",placeholder:"Name",required:!0,value:t,onChange:u})]}),(0,m.jsxs)("label",{className:l,children:["Number",(0,m.jsx)("input",{className:i,type:"text",name:"number",placeholder:"000-000-000",required:!0,value:h,onChange:u})]}),(0,m.jsx)("button",{className:d,type:"submit",children:"Add contact"})]})};var _=a(543);const u="ContactSearcher_label__EwlfK",C="ContactSearcher_nameFilter__ugULm",x=()=>{const e=(0,n.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{className:"subTitle",children:"ContactSearcher: "}),(0,m.jsx)("label",{className:u,children:(0,m.jsx)("input",{type:"text",className:C,placeholder:"Start entering the search name here...",onChange:t=>{e((0,_.M)(t.target.value.trim())),console.log(t.target.value)}})})]})};var j=a(942),p=a(894);const b={contactCard:"ContactCard_contactCard__oGzDq",contactCardBody:"ContactCard_contactCardBody__kJIUy",contactName:"ContactCard_contactName__PCV2E",contactPhone:"ContactCard_contactPhone__otcGv",contactBtn:"ContactCard_contactBtn__93oVC"},N=e=>{let{contact:t,deleteContact:a}=e;const{name:c,number:n}=t;return(0,m.jsxs)("li",{className:b.contactCard,children:[(0,m.jsx)("h5",{className:b.contactName,children:c}),(0,m.jsx)("p",{className:b.contactPhone,children:n}),(0,m.jsx)(p.z,{className:b.contactBtn,onClick:a,children:(0,m.jsx)(j.GnT,{className:b.deleteIcon})})]})};var v=a(639),g=a(495);const f="ContactsList_contactsList__ZQI1L",y=()=>{const e=(0,n.I0)(),{items:t,isLoading:a,error:s}=(0,n.v9)(g.Af),o=(0,n.v9)(g.AD),l=[...t].sort(((e,t)=>e.name.localeCompare(t.name))).filter((e=>{let{name:t}=e;return t.toLowerCase().includes(o.toLowerCase())}));return(0,c.useEffect)((()=>{e((0,r.m$)())}),[e,t.length]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{className:"subTitle",children:"Contacts: "}),a&&(0,m.jsx)(v.a,{}),t&&(0,m.jsx)("ul",{className:f,children:l.map((t=>(0,m.jsx)(N,{contact:t,deleteContact:()=>e((0,r.xX)(t.id))},t.id)))}),s&&(0,m.jsx)("p",{children:"error"})]})},k=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{className:"pageTitle",children:"Phonebook"}),(0,m.jsx)("section",{children:(0,m.jsx)(h,{})}),(0,m.jsx)("section",{children:(0,m.jsx)(x,{})}),(0,m.jsx)("section",{children:(0,m.jsx)(y,{})})]}),w=k}}]);
//# sourceMappingURL=293.90a33ffe.chunk.js.map