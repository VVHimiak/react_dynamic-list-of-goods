(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(3),s=n.n(o),c=(n(12),n(1)),i=n.n(c),r=n(4),a=n(5),l=n(7),d=n(6);function u(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(t){return t.slice(0,5)},f=function(t){return t.filter((function(t){return"red"===t.color}))},j=(n(13),n(0)),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={goods:[],visibleGoods:[]},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;u().then((function(e){t.setState({goods:e,visibleGoods:e})}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.goods,o=e.visibleGoods;return Object(j.jsxs)("div",{className:"text-center container w-50",children:[Object(j.jsx)("div",{className:" list-of-goods__container pt-3 pb-3 mb-3",children:Object(j.jsx)("ul",{className:"list-group d-flex flex-column align-items-center justify-content-around",children:o.map((function(t){return Object(j.jsx)("li",{className:"list-group-item w-25 mb-1",style:{color:t.color},children:t.name},t.id)}))})}),Object(j.jsxs)("div",{className:"buttons-group d-flex justify-content-around",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-primary w-25",onClick:function(){o!==n&&t.setState({visibleGoods:n})},children:"Load All goods"}),Object(j.jsx)("button",{type:"button",className:"btn btn-secondary w-25",onClick:function(){t.setState({visibleGoods:b(n)})},children:"Load 5 first goods"}),Object(j.jsx)("button",{type:"button",className:"btn btn-danger w-25",onClick:function(){t.setState({visibleGoods:f(n)})},children:"Load red goods"})]})]})}}]),n}(i.a.Component),h=(n(15),function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"list-of-goods__wrapper d-flex flex-column",children:[Object(j.jsx)("h1",{className:"w-50 text-center align-self-center",children:"Dynamic list of Goods"}),Object(j.jsx)(m,{getAll:u,get5First:b,getRedGoods:f})]})})});s.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4c148697.chunk.js.map