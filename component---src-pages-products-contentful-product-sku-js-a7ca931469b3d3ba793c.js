"use strict";(self.webpackChunkbarcadia=self.webpackChunkbarcadia||[]).push([[869],{7630:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(1597),c=a(9692).default.section.withConfig({displayName:"BannerModuleStyles",componentId:"sc-7qvn72-0"})(["height:100vh;position:relative;padding:30px var(--borderSpacing);.container{height:100%;display:flex;align-items:flex-end;justify-content:flex-start;}.gradient,.banner__image{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;}.gradient{background:radial-gradient( at bottom left,rgba(0,0,0,0.5),rgba(0,0,0,0) );}.banner__content{position:relative;z-index:2;min-height:33vh;width:100%;max-width:700px;@media (min-width:768px){width:66vw;}h1,h2{text-shadow:var(--textShadow);}h1{border-bottom:2px solid rgba(255,255,255,0.15);display:inline-block;}h2{font-size:var(--h5);font-weight:400;}h1,.price{margin-top:0;font-size:var(--bannerTitle);}}.banner__btns{display:flex;gap:var(--gap);}"]),A=a(8945),i=a(3761),l=function(e){var t=e.children,l=e.title,o=e.subTitle,s=e.price,m=e.enquire;return n.createElement(n.Fragment,null,n.createElement(c,null,t||n.createElement(A.S,{className:"banner__image",imgClassName:"banner__image--content",src:"../../../static/macbook-color.jpg",alt:"Banner Image",layout:"fullWidth",placeholder:"blurred",__imageData:a(6058)}),n.createElement("div",{className:"container"},n.createElement("div",{className:"banner__content"},l&&n.createElement("h1",null,l,n.createElement("span",{style:{color:"var(--primary)"}},".")),o&&n.createElement("h2",null,o),s&&n.createElement("h2",{className:"price"},"£",s,n.createElement("span",{style:{color:"var(--primary)"}},".")),n.createElement("div",{className:"banner__btns"},m&&n.createElement(i.Z,{className:"btn",text:"Enquire Now",as:r.rU,to:"/contact"}),n.createElement(i.Z,{onClick:function(){(0,r.c4)("#topContent")},text:"Learn More"})))),n.createElement("div",{className:"gradient"})),n.createElement("span",{id:"topContent"}))}},3978:function(e,t,a){var n=a(7294),r=a(1597),c=a(1148),A=a(3865),i=a(3055),l=a(3761);t.Z=function(e){var t=e.title,a=e.introduction,o=(0,i.Z)();return n.createElement(c.d,{className:"section"},t||a?n.createElement("div",{className:"container container__tight"},n.createElement("div",{className:"intro__area"},t&&n.createElement("h2",null,t),a&&n.createElement("p",null,a))):null,n.createElement("div",{className:"container container__tight container__scroll"},o.map((function(e,t){return n.createElement(A.Z,{feature:e,key:t})}))),n.createElement("div",{className:"container container__tight learn__more"},n.createElement(l.Z,{as:r.rU,to:"/products",text:"All Products"})))}},3333:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),r=a(3370),c=a(8945),A=a(9692),i=a(7630),l=A.default.section.withConfig({displayName:"FaqStyles",componentId:"sc-c3c2cb-0"})([".question{min-height:calc(var(--gap) * 2);border-radius:6px;width:100%;background-color:transparent;border:2px solid rgba(255,255,255,0.15);color:#fff;display:flex;align-items:center;justify-content:space-between;padding:8px 20px;font-size:var(--p);cursor:pointer;transition:border-color 0.3s ease;&:hover{border-color:var(--primary);}.trigger{display:inline-flex;height:40px;width:50px;position:relative;font-size:35px;justify-content:center;align-items:center;color:var(--primary);transform-origin:center;transition:transform 0.6s ease;}}.answer{padding:calc(var(--gap) / 2);font-size:var(--p);}margin-bottom:calc(var(--gap) / 2);&.faq-open{.trigger{transform:rotate(-180deg);}}"]),o=a(2775),s=a(8872),m=a(4976),d=function(e){var t=e.title,a=e.description,r=(0,n.useState)(!1),c=r[0],A=r[1];return n.createElement(l,{className:c?"faq-open":"faq-closed"},n.createElement("button",{className:"question",onClick:function(){A((function(e){return!e}))}},t,n.createElement("div",{className:"trigger"},n.createElement(o.Yc6,null))),c&&n.createElement(m.E.div,{initial:"closed",animate:c?"open":"closed",variants:{open:{opacity:1,height:"auto"},closed:{opacity:0,height:0}},className:"answer"},(0,s.Z)(a)))},p=a(3978),f=a(5288),u=A.default.div.withConfig({displayName:"product-template__ProductTemplateStyles",componentId:"sc-bde07-0"})([".container{display:flex;flex-wrap:wrap;.column{flex:0 0 100%;@media (min-width:768px){flex-basis:50%;&:nth-child(1){padding-right:20px;}&:nth-child(2){padding-left:20px;}> *{&:last-child{margin-bottom:0;}}}> *{&:first-child{margin-top:0;}}}}"]),g=A.default.section.withConfig({displayName:"product-template__ProductGallery",componentId:"sc-bde07-1"})(["width:100%;> .container{display:flex;flex-wrap:wrap;gap:calc(var(--gap) / 2);@media (min-width:1024px){gap:var(--gap);}> *{width:calc(50% - 10px);@media (min-width:768px){width:calc(33.333% - 14px);}@media (min-width:1024px){width:calc(25% - 30px);}}}"]),h=function(e){var t=e.headerImage,a=e.title,A=e.price,l=e.introduction,o=e.description,s=e.faqs,m=e.gallery,h=(0,c.d)(t);return n.createElement(n.Fragment,null,n.createElement(r.Z,{title:a}),n.createElement(i.Z,{title:a,price:A,subTitle:l,enquire:!0},n.createElement(c.G,{className:"banner__image",image:h,alt:a})),n.createElement(u,{className:"section"},n.createElement("div",{className:"container container__tight"},o&&n.createElement("div",{className:"column"},n.createElement(f.Z,{richText:o})),s&&n.createElement("div",{className:"column"},s.map((function(e,t){return n.createElement(d,{key:t,title:e.question,description:e.answer})}))))),m&&n.createElement(g,{className:"section"},n.createElement("div",{className:"container container__tight"},m.map((function(e,t){var a=(0,c.d)(e);return n.createElement(c.G,{key:t,image:a})})))),n.createElement(p.Z,{title:"Featured Products from Barcadia.",introduction:"Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."}))},E=a(9935),b=function(e){var t=e.data.contentfulProduct;return n.createElement(n.Fragment,null,n.createElement(r.Z,{title:t.title}),n.createElement(E.Z,null,n.createElement(h,t)))}},6058:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4LKNM5If/8QAGRABAQADAQAAAAAAAAAAAAAAAQACAxES/9oACAEBAAEFAg7Za/JCk7ckv//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAAQEQH/2gAIAQEABj8CLccX/8QAGRABAAMBAQAAAAAAAAAAAAAAAQAQESFh/9oACAEBAAE/IWWROg87TujNia//2gAMAwEAAgADAAAAEEsP/8QAFhEAAwAAAAAAAAAAAAAAAAAAARBh/9oACAEDAQE/EBV//8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8Qh//EABwQAQACAQUAAAAAAAAAAAAAAAEAESEQMUFRkf/aAAgBAQABPxAWBpasFqPaU4AfENBChOouwHeo5n//2Q=="},"images":{"fallback":{"src":"/static/2247c39f145df7505f72ce04ceaeef39/71357/macbook-color.jpg","srcSet":"/static/2247c39f145df7505f72ce04ceaeef39/982db/macbook-color.jpg 750w,\\n/static/2247c39f145df7505f72ce04ceaeef39/e4f86/macbook-color.jpg 1080w,\\n/static/2247c39f145df7505f72ce04ceaeef39/c255e/macbook-color.jpg 1366w,\\n/static/2247c39f145df7505f72ce04ceaeef39/71357/macbook-color.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/2247c39f145df7505f72ce04ceaeef39/b99ea/macbook-color.webp 750w,\\n/static/2247c39f145df7505f72ce04ceaeef39/acf6c/macbook-color.webp 1080w,\\n/static/2247c39f145df7505f72ce04ceaeef39/8245d/macbook-color.webp 1366w,\\n/static/2247c39f145df7505f72ce04ceaeef39/74526/macbook-color.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7078125}')}}]);
//# sourceMappingURL=component---src-pages-products-contentful-product-sku-js-a7ca931469b3d3ba793c.js.map