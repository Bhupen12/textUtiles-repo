(this.webpackJsonptextutiles=this.webpackJsonptextutiles||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),l=n.n(r),s=(n(9),n(2)),o=(n(10),n(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable dark Mode"})]})]})]})})}function d(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#051c3f"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){r(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:"dark"===e.mode?"#112e39":"white",color:"dark"===e.mode?"white":"#051c3f"}})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var t=c.toUpperCase();r(t),e.showAlert("Converted to uppercase","success")},children:"Convert To UpperCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var e=c.toLowerCase();r(e)},children:"Convert To LowerCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2 my-2",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"handleExtraSpace"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#051c3f"},children:[Object(o.jsx)("h1",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[c.split(" ").filter((function(e){return 0!==e.length})).length," words , ",c.length," characters"]}),Object(o.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," minutes read time"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:c})]})]})}var b=function(e){var t;return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:(t=e.alert.type,t.charAt(0).toUpperCase()+t.slice(1))}),": ",e.alert.msg]})})})};var j=function(){var e=Object(a.useState)("light"),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),l=Object(s.a)(r,2),j=l[0],m=l[1],h=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtiles",about:"About Text",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#051c3f",h("dark mode enabled","success"),document.title="Text Utiles Dark Mode",setInterval((function(){document.title="Text Utiles is amazing"}),2e3),setInterval((function(){document.title="Install TextUtiles Now"}),5e3)):(c("light"),document.body.style.backgroundColor="white",h("light mode enabled","success"),document.title="text Utiles light Mode")}}),Object(o.jsx)(b,{alert:j}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{showAlert:h,heading:"Enter the text",mode:n})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.de334a69.chunk.js.map