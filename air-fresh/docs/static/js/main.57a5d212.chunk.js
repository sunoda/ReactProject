(this["webpackJsonpair-fresh"]=this["webpackJsonpair-fresh"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(16),i=n.n(a),s=(n(25),n(7)),o=n.n(s),u=n(19),l=n(20),d=n(17),j=n(4),b=(n(27),n(18)),f=n.n(b),h=n(0);var O=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),i=Object(j.a)(a,2),s=i[0],b=i[1],O=Object(c.useState)(),p=Object(j.a)(O,2),x=p[0],m=p[1],v=Object(c.useState)(!1),g=Object(j.a)(v,2),y=g[0],N=g[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://data.epa.gov.tw/api/v1/aqx_p_02?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json");case 2:(t=e.sent).data.records.sort((function(e,t){return e.PM25-t.PM25})),r(Object(l.a)({},t.data)),m(t.data.records),n=new Set(t.data.records.map((function(e){return e.county}))),b(Object(u.a)(n));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsxs)("div",{className:"App-main",children:[Object(h.jsxs)("div",{className:"functionArea",children:[Object(h.jsx)("label",{children:"\u67e5\u8a62\u6aa2\u6e2c\u7ad9"}),Object(h.jsx)("input",{type:"text",onKeyPress:function(e){return function(e){var t;console.log(e),t=e?n.records.filter((function(t){return t.Site.indexOf(e)>=0})):n.records,m(t),console.log(n.records),console.log(t)}(e.target.value)}}),Object(h.jsxs)("select",{onChange:function(e){return function(e){var t;t=e?n.records.filter((function(t){return t.county===e})):n.records,m(t)}(e.target.value)},children:[Object(h.jsx)("option",{value:"",default:!0,children:"\u5168\u90e8\u57ce\u5e02"}),null===s||void 0===s?void 0:s.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]}),Object(h.jsx)("button",{onClick:function(){m((function(e){return y?e.sort((function(e,t){return e.PM25-t.PM25})):e.sort((function(e,t){return t.PM25-e.PM25}))})),N(!y)},children:"\u6fc3\u5ea6\u6392\u5e8f"})]}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:null===n||void 0===n?void 0:n.fields.map((function(e){return Object(h.jsx)("th",{className:"item",children:e.info.label},e.info.label)}))})}),Object(h.jsx)("tbody",{children:null===x||void 0===x?void 0:x.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"item",children:e.Site}),Object(h.jsx)("td",{className:"item",children:e.county}),Object(h.jsx)("td",{className:"item",children:e.PM25}),Object(h.jsx)("td",{className:"item",children:e.DataCreationDate}),Object(h.jsx)("td",{className:"item",children:e.ItemUnit})]},e.Site)}))})]})]})})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),p()}},[[47,1,2]]]);
//# sourceMappingURL=main.57a5d212.chunk.js.map