(this["webpackJsonpreact-restaurant-app"]=this["webpackJsonpreact-restaurant-app"]||[]).push([[0],{14:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var c=i(1),r=i.n(c),n=i(8),a=i.n(n),d=(i(14),i(7)),s=i.n(d),o=i(9),l=i(5),u=i(2),p=(i(16),i.p+"static/media/Eggplant-Parmesan-Recipe-f.b77fd2d4.jpeg"),g=i.p+"static/media/dgos.8f082f68.jpeg",m=i.p+"static/media/nugs.b5dc5178.jpeg",j=i.p+"static/media/Banana-Pancakes-2-2.d494b637.jpeg",b=(i.p,i.p+"static/media/egg sandwich.f57b907e.jpeg"),f=i.p+"static/media/pancakkes.9a9b952e.jpeg",h=i.p+"static/media/steak.270307fc.jpeg",O=i.p+"static/media/waffle.4c0aacb9.jpeg",v=i.p+"static/media/ar-eggs-benedict-articleLarge.ecdc1d6a.jpeg",k=i.p+"static/media/cornflake-fried-chicken-waffles-with-pecans-0318-103284235.027ab3d3.jpeg",y=i.p+"static/media/Breakfast-Burritos.33d020c7.jpeg",x=i.p+"static/media/french-toast-11-1200.d6998c28.jpeg",S=i.p+"static/media/wings.e3fe43f1.jpeg",B=i.p+"static/media/burger.7fefc0da.jpeg",C=i.p+"static/media/blt.5ac29764.jpeg",I=i.p+"static/media/tacos.f77234aa.jpeg",w=i.p+"static/media/halibut.567debe6.jpeg",D=i.p+"static/media/shrimp.ef0f749d.jpeg",F=i.p+"static/media/alfredo.5d2815c9.jpeg",P=i.p+"static/media/strip.1e7304f6.jpeg",L=[{id:1,title:"Buttermilk Pancakes",category:"Breakfast",price:10.99,img:f,desc:"All the Butter"},{id:2,title:"Banana Pancakes",category:"Breakfast",price:11.99,img:j,desc:"Like the Song"},{id:3,title:"Waffles",category:"Breakfast",price:13.99,img:O,desc:"Butter and Syrup included"},{id:4,title:"Egg Sandwich",category:"Breakfast",price:7.99,img:b,desc:"I'm baby woke mlkshk wolf bitters',"},{id:18,title:"French Toast",category:"Breakfast",price:10.99,img:x,desc:""},{id:15,title:"Eggs Bennies",category:"Breakfast",price:10.99,img:v,desc:""},{id:16,title:"Chicken & Waffles",category:"Breakfast",price:14.99,img:k,desc:""},{id:17,title:"Breakfast Burrito",category:"Breakfast",price:10.99,img:y,desc:""},{id:12,title:"Wings",category:"Lunch",price:9.99,img:S,desc:"Sauces: Barbecue, Jerk, Franks, Sweet-Chili"},{id:5,title:"Burger",category:"Lunch",price:12.99,img:B,desc:"Nothing over medium"},{id:7,title:"Dogs",category:"Lunch",price:10.99,img:g,desc:"Dog in a bun, relish included"},{id:6,title:"Chicken Nuggies",category:"Lunch",price:12.99,img:m,desc:"I'm baby woke mlkshk wolf bitters',"},{id:24,title:"Turkey BLT",category:"Lunch",price:8.99,img:C,desc:""},{id:23,title:"Pork Carnita Tacos",category:"Lunch",price:15.99,img:I,desc:""},{id:19,title:"Halibut",category:"Dinner",price:28.99,img:w,desc:""},{id:21,title:"Shrimp Scampi",category:"Dinner",price:25.99,img:D,desc:""},{id:22,title:"Chicken Alfredo",category:"Dinner",price:19.99,img:F,desc:""},{id:9,title:"Chicken Piccata",category:"Dinner",price:15.99,img:i.p+"static/media/piccata.eb615444.jpeg",desc:"Grilled Chicken Fillet"},{id:20,title:"Pan Seared Duck Breast",category:"Dinner",price:27.99,img:i.p+"static/media/duck.44b2bc62.jpeg",desc:""},{id:8,title:"Ribeye",category:"Dinner",price:35.99,img:h,desc:"14 oz"},{id:11,title:"NewYork Strip",category:"Dinner",price:30.99,img:P,desc:"8 oz"},{id:10,title:"Eggplant Parm",category:"Dinner",price:18.99,img:p,desc:"Eggplant Parm"},{id:13,title:"Seared Sea Scallops",category:"Dinner",price:29.99,img:i.p+"static/media/scallops.ef011da2.jpeg",desc:""},{id:14,title:"Swordfish",category:"Dinner",price:26.99,img:i.p+"static/media/sword.a999f015.jpeg",desc:""}],N=i(0);var T=function(e){var t,i,c,r,n=Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{class:"menuItemList",children:[Object(N.jsx)("h3",{class:"itemName",children:null===(t=e.menuItem)||void 0===t?void 0:t.title}),Object(N.jsx)("p",{children:null===(i=e.menuItem)||void 0===i?void 0:i.price}),Object(N.jsx)("img",{src:null===(c=e.menuItem)||void 0===c?void 0:c.img,alt:""}),Object(N.jsxs)("p",{children:["'",null===(r=e.menuItem)||void 0===r?void 0:r.desc,"'"]}),Object(N.jsx)("button",{class:"btn2",type:"button",onClick:function(){var t,i;return e.addOrder(null===(t=e.menuItem)||void 0===t?void 0:t.title,null===(i=e.menuItem)||void 0===i?void 0:i.price)},children:"Add to order "}),Object(N.jsx)("button",{class:"btn2",type:"button",onClick:function(){return e.deleteItem(e.id)},children:"Remove from order "})]})});return Object(N.jsx)(N.Fragment,{children:n})};var A=function(e){var t=e.menuItems.map((function(t){return Object(N.jsx)(T,{menuItem:t,deleteItem:e.deleteItem,addOrder:e.addOrder})}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h2",{class:"headers",children:e.selection?e.selection.toUpperCase():"All"}),t]})};var E=function(e){var t,i,c;console.log(null===e||void 0===e?void 0:e.order);var r=null===(t=e.order)||void 0===t?void 0:t.map((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:e.title}),Object(N.jsx)("p",{children:e.price})]})}));console.log(r),null===(i=e.order)||void 0===i||i.map((function(e){return e.price}));var n=null===(c=e.order)||void 0===c?void 0:c.reduce((function(e,t){return e+t.price}),0);return console.log(n),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{class:"order",children:[Object(N.jsx)("h2",{children:"Order"}),r,Object(N.jsx)("p",{children:"Subtotal: $".concat(n)}),Object(N.jsx)("button",{class:"delete-btn",type:"delete",onClick:e.deleteOrder,children:"Clear Order"})]})})};var J=function(e){var t=Object(c.useState)(""),i=Object(u.a)(t,2),r=i[0],n=i[1],a=Object(c.useState)(""),d=Object(u.a)(a,2),s=d[0],o=d[1];return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("form",{class:"form",action:"",onSubmit:function(t){t.preventDefault(),e.submitOrder(r,null===e||void 0===e?void 0:e.order,s),n(""),o(""),console.log(t.target.value),console.log(t)},children:[Object(N.jsx)("input",{name:"name",type:"text",value:r,placeholder:"Full Name",onChange:function(e){n(e.target.value)}}),Object(N.jsx)("input",{name:"number",type:"tel",value:s,placeholder:"Phone Number",onChange:function(e){o(e.target.value)}}),Object(N.jsx)("button",{class:"submit-btn",type:"submit",children:"Place Order"})]})})};var R=function(){var e=Object(c.useState)(L),t=Object(u.a)(e,2),i=t[0],r=(t[1],Object(c.useState)()),n=Object(u.a)(r,2),a=n[0],d=n[1],p=Object(c.useState)([]),g=Object(u.a)(p,2),m=g[0],j=g[1],b=Object(l.a)(new Set(L.map((function(e){return e.category})))).map((function(e){return Object(N.jsx)("button",{class:"nav-btn",onClick:function(){return d(e)},children:e},e)})),f=i.filter((function(e){return a?e.category===a:e}));function h(){return h=Object(o.a)(s.a.mark((function e(t,i,c){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={fullname:t,title:i,number:c},console.log(r),e.next=4,fetch("https://tiny-taco-server.herokuapp.com/FeedMe/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 4:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("button",{class:"nav-btn",onClick:function(){return d(null)},children:"All"}),b]}),Object(N.jsx)(A,{selection:a,menuItems:f,deleteItem:function(e){var t=m.findIndex((function(t){return t.id===e})),i=Object(l.a)(m);i.splice(t,1),j(i)},addOrder:function(e,t){var i={title:e,price:t};j([].concat(Object(l.a)(m),[i]))}}),Object(N.jsx)("div",{class:"menuOrder",children:Object(N.jsx)(E,{order:m,menuItem:i,deleteOrder:function(){j([])}})}),Object(N.jsx)(J,{order:m,submitOrder:function(e,t,i){return h.apply(this,arguments)}})]})},W=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(t){var i=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;i(e),c(e),r(e),n(e),a(e)}))};a.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(R,{})}),document.getElementById("root")),W()}},[[18,1,2]]]);
//# sourceMappingURL=main.d1042f2e.chunk.js.map