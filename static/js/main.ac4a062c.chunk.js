(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),l=n(6),u=n.n(l),r=(n(13),n(7)),o=n(4),i=(n(14),n(8)),s=(n(15),n(16),n(0)),v=function(e){return Object(s.jsx)("button",{onClick:function(){return e.onClickCallback(e.id)},className:"square",children:e.value})},j=function(e){var a=function(e,a){var n;return(n=[]).concat.apply(n,Object(i.a)(e)).map((function(e){return Object(s.jsx)(v,{value:e.value,id:e.id,onClickCallback:a},e.id)}))}(e.squares,e.onClickCallback);return console.log(a),Object(s.jsx)("div",{className:"grid",children:a})},d="x",b=function(){for(var e=[],a=0,n=0;n<3;n+=1){e.push([]);for(var t=0;t<3;t+=1)e[n].push({id:a,value:""}),a+=1}return e},f=function(){var e=Object(t.useState)(b()),a=Object(o.a)(e,2),n=a[0],c=a[1],l=Object(t.useState)(d),u=Object(o.a)(l,2),i=u[0],v=u[1],f=Object(t.useState)(null),h=Object(o.a)(f,2),O=h[0],m=h[1],p=function(){for(var e=0;e<3;){if(n[e][0].value===n[e][1].value&&n[e][2].value===n[e][1].value&&""!==n[e][0].value)return n[e][0].value;if(n[0][e].value===n[1][e].value&&n[2][e].value===n[1][e].value&&""!==n[0][e].value)return n[0][e].value;e+=1}return n[0][0].value===n[1][1].value&&n[2][2].value===n[1][1].value&&""!==n[1][1].value?n[0][0].value:n[0][2].value===n[1][1].value&&n[2][0].value===n[1][1].value&&""!==n[1][1].value?n[0][2].value:null};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("h1",{children:"React Tic Tac Toe"}),Object(s.jsxs)("h2",{children:["Winner is ",O]}),Object(s.jsx)("button",{onClick:function(){c(b()),v(d),m(null)},children:"Reset Game"})]}),Object(s.jsx)("main",{children:Object(s.jsx)(j,{squares:n,onClickCallback:function(e){console.log("Squares",n);var a=n.map((function(a){var n,t=Object(r.a)(a);try{for(t.s();!(n=t.n()).done;){var c=n.value;c.id===e&&""===c.value&&(c.value=i)}}catch(l){t.e(l)}finally{t.f()}return a}));v(i===d?"o":d),c(a),p(),console.log(p()),m(p())}})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.ac4a062c.chunk.js.map