(this["webpackJsonpspa-sample-app"]=this["webpackJsonpspa-sample-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n(56)},21:function(e,t,n){},22:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(15),i=n.n(r),s=(n(21),n(22),n(1)),c={emptyLabel:"Text",isEmpty:function(e){return!e||!e.text||e.text.trim().length<1},resourceType:"editorxpdevelopment/components/content/text"},l=function(e){var t=e.cqPath,n=e.richText,a=e.text;return n?o.a.createElement("div",{className:"aem_text",id:t.substr(t.lastIndexOf("/")+1),"data-rte-editelement":!0,dangerouslySetInnerHTML:{__html:a}}):o.a.createElement("div",{className:"aem_text"},a)},p=l,u=(Object(s.withMappable)(l,c),n(3)),h=n(4),m=n(6),d=n(5),f="https://author-p15902-e23962-cmstg.adobeaemcloud.com",g={emptyLabel:"Image",isEmpty:function(e){return!e||!e.src||e.src.trim().length<1}},v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return g.isEmpty(this.props)?null:o.a.createElement("div",null,o.a.createElement("img",{style:{height:"400px"},src:f+this.props.src,alt:this.props.alt,title:this.props.title?this.props.title:this.props.alt}))}}]),n}(a.Component),b=Object(s.withMappable)(s.Page);Object(s.MapTo)("wcm/foundation/components/responsivegrid")(s.ResponsiveGrid),Object(s.MapTo)("editorxpdevelopment/components/content/text")(p,c),Object(s.MapTo)("editorxpdevelopment/components/content/image")(v,g);var y={backgroundColor:"rgb(133, 226, 109)",margin:"10px auto",padding:"10px 50px",font:"18pt/1.5 Courier",maxWidth:"800px"},x=function(){return o.a.createElement("div",{style:y},o.a.createElement("h4",null,"Now, back to our SPA"),o.a.createElement("p",null,'Now it is such a bizarrely improbable coincidence that anything so mind-bogglingly useful could have evolved purely by chance that some thinkers have chosen to see it as the final and clinching proof of the non-existence of God. The argument goes something like this: "I refuse to prove that I exist,\'" says God, "for proof denies faith, and without faith I am nothing." "But," says Man, "The Babel fish is a dead giveaway, isn\'t it? It could not have evolved by chance. It proves you exist, and so therefore, by your own arguments, you don\'t. QED." "Oh dear," says God, "I hadn\'t thought of that," and promptly vanishes in a puff of logic. "Oh, that was easy," says Man, and for an encore goes on to prove that black is white and gets himself killed on the next zebra crossing.'))},E={backgroundColor:"rgb(142 218 214)",margin:"10px auto",padding:"10px 50px",font:"18pt/1.5 Courier",maxWidth:"800px"},w=function(){return o.a.createElement("main",null,o.a.createElement("h2",null,"Sample AEM + SPA"),o.a.createElement("div",{style:E},o.a.createElement("h4",null,"Content from AEM"),o.a.createElement(b,{pagePath:"/content/editorxpdevelopment/us/en"})),o.a.createElement(x,null),o.a.createElement("h4",null,"SPA footer."))},j=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(2),M={headers:{}},k=new(function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){if(!e){var t="Fetching model rejected for path: "+e;return Promise.reject(new Error(t))}var n="".concat(this._apiHost).concat(e);return fetch(n,M).then((function(e){if(e.status>=200&&e.status<300)return e.json();var t=new Error("while fetching the model for url: "+n,e.statusText||e.status);return t.response=e,Promise.reject(t)}))}))}]),n}(O.ModelClient))(f);O.ModelManager.initializeAsync({modelClient:k}),i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.f407f5fd.chunk.js.map