(this["webpackJsonpmoz-todo-react"]=this["webpackJsonpmoz-todo-react"]||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(27),r=a.n(c),o=(a(37),a(6)),u=a(30),i=a(12);var s=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),c.trim()&&(e.addTask(c),r(""))}},l.a.createElement("h2",{className:"label-wrapper"},l.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},"What needs to be done?")),l.a.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",placeholder:"Enter somethings",name:"text",autoComplete:"off",value:c,onChange:function(e){r(e.target.value)}}),l.a.createElement("button",{"data-testid":"hi",type:"submit",className:"btn btn__primary btn__lg"},"Add"))};var m=function(e){return l.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)}},l.a.createElement("span",{className:"visually-hidden"},"Show "),l.a.createElement("span",null,e.name),l.a.createElement("span",{className:"visually-hidden"}," tasks"))};function d(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),s=i[0],m=i[1],d=Object(n.useRef)(null),b=Object(n.useRef)(null),f=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(c);var p=l.a.createElement("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),s.trim()&&(e.editTask(e.id,s),m(""),r(!1))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"todo-label",htmlFor:e.id},"New name for ",e.name),l.a.createElement("input",{id:e.id,className:"todo-text",type:"text",value:s,onChange:function(e){m(e.target.value)},ref:d})),l.a.createElement("div",{className:"btn-group"},l.a.createElement("button",{type:"button",className:"btn todo-cancel",onClick:function(){return r(!1)}},"Cancel",l.a.createElement("span",{className:"visually-hidden"},"renaming ",e.name)),l.a.createElement("button",{type:"submit",className:"btn btn__primary todo-edit"},"Save",l.a.createElement("span",{className:"visually-hidden"},"new name for ",e.name)))),E=l.a.createElement("div",{className:"stack-small"},l.a.createElement("div",{className:"c-cb"},l.a.createElement("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),l.a.createElement("label",{className:"todo-label",htmlFor:e.id},e.name)),l.a.createElement("div",{className:"btn-group"},l.a.createElement("button",{type:"button",className:"btn",onClick:function(){return r(!0)},ref:b},"Edit ",l.a.createElement("span",{className:"visually-hidden"},e.name)),l.a.createElement("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)}},"Delete ",l.a.createElement("span",{className:"visually-hidden"},e.name))));return Object(n.useEffect)((function(){!f&&c&&d.current.focus(),f&&!c&&b.current.focus()}),[f,c]),l.a.createElement("li",{className:"todo"},c?p:E)}var b=a(31),f=function(e){return l.a.createElement("button",{type:"button",className:"btn toggle-btn",onClick:function(t){e.clear()}},l.a.createElement("span",null,"Clear"))},p={color:"white",background:"black"},E={color:"black",background:"white"},g=l.a.createContext(p),v=[];var h={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},O=Object.keys(h);var k=function(e){var t=Object(n.useContext)(g),a=Object(n.useState)(v),c=Object(o.a)(a,2),r=c[0],p=c[1],E=Object(n.useState)("All"),k=Object(o.a)(E,2),j=k[0],N=k[1];function y(e){var t=r.map((function(t){return e===t.id?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t}));p(t)}function C(e){var t=r.filter((function(t){return e!==t.id}));p(t)}function S(e,t){var a=r.map((function(a){return e===a.id?Object(i.a)(Object(i.a)({},a),{},{name:t}):a}));p(a)}Object(n.useEffect)((function(){localStorage.getItem("listofData")&&p(JSON.parse(localStorage.getItem("listofData")))}),[]),Object(n.useEffect)((function(){localStorage.setItem("listofData",JSON.stringify(r))}),[r]);var _=r.filter(h[j]).map((function(e){return l.a.createElement(d,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:y,deleteTask:C,editTask:S})})),x=O.map((function(e){return l.a.createElement(m,{key:e,name:e,isPressed:e===j,setFilter:N})})),w=1!==_.length?"tasks":"task",T="".concat(_.length," ").concat(w," remaining"),D=Object(n.useRef)(null),I=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(r.length);return Object(n.useEffect)((function(){r.length-I===-1&&D.current.focus()}),[r.length,I]),l.a.createElement("div",{className:"todoapp stack-large",style:t},l.a.createElement(s,{addTask:function(e){var t={id:"todo-"+Object(b.a)(),name:e,completed:!1};p([].concat(Object(u.a)(r),[t]))}}),l.a.createElement("div",{className:"filters btn-group stack-exception"},x),l.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:D},T),l.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},_),l.a.createElement(f,{clear:function(){localStorage.clear(),p(v)}}))};var j=function(e){return l.a.createElement("p",null,"This is a about page")};var N=function(e){return l.a.createElement("h1",null,"Oops!Pagenotfound!")},y=a(8);var C=function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement(y.b,{to:"/"},l.a.createElement("li",null,"home")),l.a.createElement(y.b,{to:"/about"},l.a.createElement("li",null,"about")),l.a.createElement(y.b,{to:"/api"},l.a.createElement("li",null,"API"))))},S=a(1),_=a(29),x=a.n(_),w=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){x.a.get("https://jsonplaceholder.typicode.com/photos/?_limit=10").then((function(e){console.log(e),c(e.data)})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e.id},e.id,e.title," ",l.a.createElement("img",{alt:"",src:e.url})," ")}))))};var T=function(e){var t=Object(n.useState)(p),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",{className:"todoapp stack-large"},l.a.createElement(g.Provider,{value:c},l.a.createElement("button",{onClick:function(){r(c===p?E:p)}},"Change Theme"),l.a.createElement(C,null),l.a.createElement(S.c,null,l.a.createElement(S.a,{path:"/",component:k,exact:!0}),l.a.createElement(S.a,{path:"/about",component:j}),l.a.createElement(S.a,{path:"/api",component:w}),l.a.createElement(S.a,{component:N}))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y.a,null,l.a.createElement(T,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.31ec86f4.chunk.js.map