(this["webpackJsonpair-fresh"]=this["webpackJsonpair-fresh"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(15),s=n.n(a),r=(n(22),n(4)),o=n.n(r),d=n(6),l=n(16),u=n(5),j=(n(24),n(17)),b=n.n(j),f=n(0);var h=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),s=Object(u.a)(a,2),r=s[0],j=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://data.epa.gov.tw/api/v1/aqx_p_02?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json");case 2:(t=e.sent).data.records.sort((function(e,t){return e.PM25-t.PM25})),i(Object(d.a)({},t.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{className:"App-header",children:Object(f.jsxs)("div",{className:"App-main",children:[Object(f.jsx)("button",{onClick:function(){r?n.records.sort((function(e,t){return e.PM25-t.PM25})):n.records.sort((function(e,t){return t.PM25-e.PM25})),i((function(e){return Object(d.a)({},e)})),j(!r)},children:"\u6fc3\u5ea6\u6392\u5e8f"}),Object(f.jsx)("div",{className:"title",children:null===n||void 0===n?void 0:n.fields.map((function(e){return Object(f.jsx)("div",{className:"title",children:e.info.label},e.info.label)}))}),null===n||void 0===n?void 0:n.records.map((function(e){return Object(f.jsxs)("div",{className:"item",children:[Object(f.jsx)("div",{className:"item",children:e.Site}),Object(f.jsx)("div",{className:"item",children:e.county}),Object(f.jsx)("div",{className:"item",children:e.PM25}),Object(f.jsx)("div",{className:"item",children:e.DataCreationDate}),Object(f.jsx)("div",{className:"item",children:e.ItemUnit})]},e.Site)}))]})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.0b59fe80.chunk.js.map