(this.webpackJsonptagthepage=this.webpackJsonptagthepage||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){e.exports=a.p+"static/media/GitHub_Logo.cefc2023.png"},108:function(e,t,a){e.exports=a.p+"static/media/logo-linkedin.0cbd7270.svg"},111:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),c=(a(88),a(27)),i=a(168),s=a(167),m=a(151),u=a(169),h=a(152),d=a(153),p=a(154),g=a(155),f=a(148),E=a(9);function b(e){var t=Object(E.f)(),a=Object(n.useState)(!1),r=Object(c.a)(a,2),o=r[0],b=r[1],x=function(e){window.scrollTo(0,0),0===e?t.push("/Henk"):2===e?t.push("/Showcases"):1===e&&t.push("/Contact")},v=Object(f.a)({drawer:{width:"140px"},paper:{width:"140px",background:e.color,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflow:"hidden"},buttonBackground:{background:e.color}})();return l.a.createElement("div",null,l.a.createElement(i.a,{smDown:!0},l.a.createElement(s.a,{variant:"permanent",classes:{paper:v.paper,root:v.drawer}},l.a.createElement(m.a,null,["Home","Contact","D-App"].map((function(e,t){return l.a.createElement(u.a,{button:!0,onClick:function(){return x(t)},key:e},l.a.createElement(h.a,{primary:e}))}))))),l.a.createElement("div",null,l.a.createElement(s.a,{variant:"temporary",open:o,classes:{paper:v.paper,root:v.drawer}},l.a.createElement(m.a,null,["Home","D-App","Contact"].map((function(e,t){return l.a.createElement(u.a,{button:!0,onClick:function(){x(t),b(!o)},key:e},l.a.createElement(h.a,{primary:e}))})),l.a.createElement(u.a,null,l.a.createElement(d.a,{onClick:function(){return b(!o)}},l.a.createElement(p.a,null)))))),l.a.createElement(i.a,{mdUp:!0},l.a.createElement("div",{style:{position:"fixed",top:"50%"}},l.a.createElement(d.a,{onClick:function(){return b(!o)}},l.a.createElement(g.a,null)))))}var x=a(75);var v=function(e){return 3===e?Object(x.a)({palette:{primary:{light:"#DBBEA1",main:"#DB7F67",dark:"#A37B73",contrastText:"black"},secondary:{main:"#DBBEA1"}}}):1===e?Object(x.a)({palette:{primary:{light:"#FFAA00",main:"#FF5400",dark:"#FF7900",contrastText:"black"},secondary:{main:"#DBBEA1"}}}):2===e?Object(x.a)({palette:{primary:{light:"#E7ECEF",main:"#274C77",dark:"#6096BA",contrastText:"white"},secondary:{main:"#DBBEA1"}}}):void 0},y=a(68),C=a(69),k=a(77),w=a(76),F=a(157),N=a(156),j=a(35),B=(a(103),a(70)),A=a.n(B),S=a(52),O=a.n(S),D=a(71),z=a.n(D);a(104);function I(e){return l.a.createElement(N.a,{style:{outline:"none"},className:"mdc-button",onClick:e.schemeChanger},l.a.createElement("div",{className:"mdc-button__ripple"}),l.a.createElement("span",{className:"mdc-button__label nameFont font-xs"},"change scheme"))}var R=a(53),H=a.n(R),T=function(e){console.log("Custom bubble click func")},W=function(e){console.log("Customer legend click func")};var _=function(e){return 1===e.version?l.a.createElement(H.a,{graph:{zoom:1.1,offsetX:-.05,offsetY:-.01},width:600,height:700,padding:0,showLegend:!1,legendPercentage:20,legendFont:{family:"Arial",size:12,color:"#000",weight:"bold"},valueFont:{family:"Arial",size:12,color:e.color[1],weight:"bold"},labelFont:{family:"Arial",size:16,color:e.color[4],weight:"lighter"},bubbleClickFunc:T,legendClickFun:W,data:[{label:"plants",value:2,color:e.color[1]},{label:"cooking",value:7,color:e.color[1]},{label:"video games",value:23,color:e.color[1]},{label:"climbing",value:23,color:e.color[1]},{label:"fantasy books",value:14,color:e.color[1]},{label:"meditation",value:5,color:e.color[1]},{label:"running",value:40,color:e.color[1]},{label:"code",value:25,color:e.color[1]}]}):l.a.createElement(H.a,{graph:{zoom:1.1,offsetX:-.05,offsetY:-.01},width:600,height:700,padding:0,showLegend:!1,legendPercentage:20,legendFont:{family:"Arial",size:12,color:"#000",weight:"bold"},valueFont:{family:"Arial",size:12,color:e.color[1],weight:"bold"},labelFont:{family:"Arial",size:16,color:e.color[4],weight:"lighter"},bubbleClickFunc:T,legendClickFun:W,data:[{label:"C",value:2,color:e.color[1]},{label:"python",value:7,color:e.color[1]},{label:"nodeJS",value:23,color:e.color[1]},{label:"React",value:23,color:e.color[1]},{label:"ES6",value:14,color:e.color[1]},{label:"Java",value:5,color:e.color[1]},{label:"Ethereum",value:30,color:e.color[1]},{label:"MERN",value:15,color:e.color[1]},{label:"Kubernetes",value:8,color:e.color[1]},{label:"GNU/Linux",value:14,color:e.color[1]}]})},L=function(e){Object(k.a)(a,e);var t=Object(w.a)(a);function a(e){return Object(y.a)(this,a),t.call(this,e)}return Object(C.a)(a,[{key:"returnColor",value:function(){return 3===this.props.scheme?["#DBBEA1","#DB7F67","#A37B73","#DB7F67","black"]:2===this.props.scheme?["#E7ECEF","#274C77","#6096BA","#274C77","#E7ECEF"]:["#FFAA00","#FF5400","#FF7900","#FF4800","black"]}},{key:"render",value:function(){return l.a.createElement("div",{className:"flex flex-row"},l.a.createElement(F.a,{theme:v(this.props.scheme)},l.a.createElement("div",{style:{background:this.returnColor()[0],height:"5000px"},className:"xs:pl-5 pl-6 container-fluid flex flex-column flex-wrap justify-start items-center w-auto h-screen"},l.a.createElement("div",{style:{background:this.returnColor()[0],height:"1.5%",minHeight:"50px",width:"95%"},className:"p-2 mb-1 sm:mb-5"},l.a.createElement("h2",{style:{color:this.returnColor()[3]},className:"fromRight nameFont font-xs md:font-xl lg:font-2xl"}," HENK VAN DER SLOOT.")),l.a.createElement("div",{style:{background:this.returnColor()[0]},className:"flex flex-row flex-wrap justify-center w-full "},l.a.createElement("div",{style:{background:this.returnColor()[1],height:"400px",minHeight:"200px",minWidth:"350px"},className:"fadeIn mb-2 p-2 w-3/5 shadow-4 grid grid has-6-columns has-6-rows column-gap-5 row-gap-5"},l.a.createElement("div",{style:{background:this.returnColor()[1]},className:" fadeIn column-start-3 column-end-6 row-start-6 flex items-end justify-end"},l.a.createElement(N.a,{style:{outline:"none"},className:"mdc-button",onClick:this.props.schemeChanger},l.a.createElement("div",{className:"mdc-button__ripple"}),l.a.createElement("span",{className:"mdc-button__label nameFont font-xs"},"change scheme"))),l.a.createElement("div",{className:"textFont column-start-1 column-end-6 row-start-1 row-end-5"},l.a.createElement("p",{style:{color:this.returnColor()[4]},className:" font-xs sm:font-xs md:font-xs lg:font-base"},"I'm a software engineer studying applied computer science at HTW Berlin. In 2019 I started working with Ethereum and Smart Contracts which immediately sparked my interest in making the world a more decentralized space."))),l.a.createElement("div",{style:{background:this.returnColor()[1],height:"400px",minWidth:"300px"},className:"w-1/5 h-4/5 shadow-4 ml-2 grid p-2 fromRight flex flex-row items-center justify-center"},l.a.createElement("img",{style:{height:"380px"},src:A.a}))),l.a.createElement("div",{style:{height:"7%"},className:" fadeIn nameFont w-full flex flex-column justify-end items-center pb-5"},l.a.createElement("h3",{className:""},"Work & Education")),l.a.createElement("div",{className:"fadeIn"},l.a.createElement(j.VerticalTimeline,null,l.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element",contentStyle:{background:this.returnColor()[1],color:"black"},contentArrowStyle:{borderRight:"20px solid ".concat(this.returnColor()[1])},date:"2018 - 2020",iconStyle:{background:this.returnColor()[3],color:this.returnColor()[4]},icon:l.a.createElement("img",{style:{width:"60%",height:"60%",borderRadius:"50%",display:"block",margin:"20%"},src:O.a})},l.a.createElement("h3",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-title"},"Informatik Bsc."),l.a.createElement("h4",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-subtitle"},"Uni Leipzig"),l.a.createElement("p",{style:{color:this.returnColor()[4]}})),l.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element",contentStyle:{background:this.returnColor()[1],color:"black"},contentArrowStyle:{borderRight:"20px solid ".concat(this.returnColor()[1])},date:"2019 - 2020",iconStyle:{background:this.returnColor()[3],color:this.returnColor()[4]},icon:l.a.createElement("img",{style:{width:"60%",height:"60%",borderRadius:"50%",display:"block",margin:"20%"},src:z.a})},l.a.createElement("h3",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-title"},"Software Engineer"),l.a.createElement("h4",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-subtitle"},"Exxeta GmbH, Leipzig"),l.a.createElement("p",{style:{color:this.returnColor()[4]}},"Werkstudent, eigenes Projekt: Ethereum, Smart-Contracts, React, NodeJS")),l.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element",contentStyle:{background:this.returnColor()[1],color:"black"},contentArrowStyle:{borderRight:"20px solid ".concat(this.returnColor()[1])},date:"2020 - present",iconStyle:{background:this.returnColor()[3],color:this.returnColor()[4]},icon:l.a.createElement("img",{style:{width:"60%",height:"60%",borderRadius:"50%",display:"block",margin:"20%"},src:O.a})},l.a.createElement("h3",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-title"},"angewandte Informatik"),l.a.createElement("h4",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-subtitle"},"HTW Berlin"),l.a.createElement("p",{style:{color:this.returnColor()[4]}}," Bachelor fertigstellen"))),l.a.createElement("div",{className:" h-full flex flex-column items-center pt-5"},l.a.createElement("h2",{className:"textFont"}," things I like "),l.a.createElement(_,{version:1,color:this.returnColor()}),l.a.createElement("div",{style:{alignSelf:"flex-end"}},l.a.createElement(I,{schemeChanger:this.props.schemeChanger,color:this.returnColor()[3]})),l.a.createElement("h2",null,"tech skills"),l.a.createElement(_,{version:2,color:this.returnColor()})),l.a.createElement("div",null)))))}}]),a}(n.Component);function J(e){return l.a.createElement("div",null,l.a.createElement(L,{schemeChanger:e.schemeChanger,scheme:e.scheme}))}var M=a(163),P=a(23),V=a(158),G=a(159),U=a(160),X=a(161),K=a(47),Y=a(162),$=a(72),q=a.n($),Q=a(73),Z=a.n(Q);function ee(e){var t,a=Object(f.a)({root:{maxWidth:"345",background:e.bgColor},media:{height:"140"}}),n=Object(x.a)();n.typography.body2=Object(P.a)({fontSize:"80%","@media (min-width:600px)":{fontSize:"80%"}},n.breakpoints.up("md"),{fontSize:"90%"}),n.typography.h5=(t={fontSize:"1rem"},Object(P.a)(t,n.breakpoints.up("sm"),{fontSize:"1.4rem"}),Object(P.a)(t,n.breakpoints.up("md"),{}),Object(P.a)(t,n.breakpoints.up("lg"),{}),t);var r,o=a();return l.a.createElement(V.a,{className:o.root},l.a.createElement(G.a,null,l.a.createElement(U.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:(r=e.num,1===r?q.a:2===r?Z.a:void 0),title:"Contemplative Reptile"}),l.a.createElement(X.a,null,l.a.createElement(F.a,{theme:n},l.a.createElement(K.a,{gutterBottom:!0,variant:"h5",component:"h2"},function(e){return 1===e?"Monstera":2===e?"Calathea":void 0}(e.num)),l.a.createElement(K.a,{variant:"body2",color:"mainSecondary",component:"p"},"Schoene Pflanze")))),l.a.createElement(Y.a,null,l.a.createElement(N.a,{size:"small",color:"secondary"},"Buy")))}function te(e){return l.a.createElement("div",{className:"flex flex-row"},l.a.createElement(F.a,{theme:v(e.scheme)},l.a.createElement("div",{style:{background:e.getColor(e.scheme)[0],minHeight:"100vh"},className:"xs:pl-5 pl-6 md:pr-2  pr-1 pt-2 pb-2 container-fluid flex h-auto"},l.a.createElement("div",{className:"h-auto"},l.a.createElement("h1",null," under construction "),l.a.createElement(M.a,{container:!0,spacing:2},l.a.createElement(M.a,{item:!0,xs:8,sm:5,md:4,lg:3},l.a.createElement(ee,{num:1,bgColor:e.getColor(e.scheme)[1]})),l.a.createElement(M.a,{item:!0,xs:8,sm:5,md:4,lg:3},l.a.createElement(ee,{num:1,bgColor:e.getColor(e.scheme)[1]})),l.a.createElement(M.a,{item:!0,xs:8,sm:5,md:4,lg:3},l.a.createElement(ee,{num:1,bgColor:e.getColor(e.scheme)[1]})),l.a.createElement(M.a,{item:!0,xs:8,sm:5,md:4,lg:3},l.a.createElement(ee,{num:2,bgColor:e.getColor(e.scheme)[1]})),l.a.createElement(M.a,{item:!0,xs:8,sm:5,md:4,lg:3},l.a.createElement(ee,{num:2,bgColor:e.getColor(e.scheme)[1]})),l.a.createElement(M.a,{item:!0,xs:8,sm:5,md:4,lg:3},l.a.createElement(ee,{num:1,bgColor:e.getColor(e.scheme)[1]})))))))}a(106);var ae=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"hover-container"},l.a.createElement("a",{href:"mailto:henk.vandrsloot@gmail.com"},l.a.createElement("h1",null,"Mail me!"))))};function ne(e){var t=function(){return 3===e.scheme?["#DBBEA1","#DB7F67","#A37B73","#DB7F67","black"]:2===e.scheme?["#E7ECEF","#274C77","#6096BA","#274C77","#E7ECEF"]:["#FFAA00","#FF5400","#FF7900","#FF4800","black"]};return l.a.createElement(F.a,{theme:v(e.scheme)},l.a.createElement("div",{style:{background:t()[0],height:"100vh"},className:"xs:pl-5 pl-6 container-fluid flex flex-column flex-wrap justify-start items-center w-screen h-screen"},l.a.createElement("div",{style:{height:"200px",minHeight:"200px",minWidth:"350px"},className:"flex flex-column justify-center "}," ",l.a.createElement("h2",null," CONTACT ME! ")," "),l.a.createElement("div",{style:{background:t()[1],height:"400px",minHeight:"200px",minWidth:"350px"},className:"fadeIn mb-2 p-2 w-3/5 shadow-4 grid grid has-6-columns has-7-rows column-gap-5 row-gap-5"},l.a.createElement("div",{style:{},className:" fadeIn column-start-5 column-end-5 row-start-3 flex items-end justify-end flex flex-column justify-center items-center"},l.a.createElement(ae,null)),l.a.createElement("div",{style:{},className:" fadeIn column-start-3 column-end-3 row-start-4 flex items-end justify-end flex flex-column justify-center items-center"},l.a.createElement("a",{className:"flex flex-row items-start justify-center",href:"https://github.com/h3nk42"},l.a.createElement("img",{style:{width:"120px",height:"50px"},src:a(107)}))),l.a.createElement("div",{style:{},className:" fadeIn column-start-4 column-end-4  row-end-6 flex items-end justify-end flex flex-column justify-center items-center"},l.a.createElement("a",{className:"flex flex-row items-start justify-center",href:"https://linkedin.com/in/henk-van-der-sloot-7a06581b4"},l.a.createElement("img",{style:{width:"50px",height:"50px"},src:a(108)}))))))}var le=Object(f.a)({container:{display:"flex",flexDirection:"row"}});function re(){var e=Object(n.useState)(3),t=Object(c.a)(e,2),a=t[0],r=t[1],o=function(){r(a<3?a+1:1)},i=function(){return 3===a?["#DBBEA1","#DB7F67","#A37B73","#DB7F67","black"]:2===a?["#E7ECEF","#274C77","#6096BA","#274C77","#E7ECEF"]:["#FFAA00","#FF5400","#FF7900","#FF4800","black"]},s=le();return l.a.createElement("div",{className:s.container,style:{overflowX:"hidden"},id:"scrollTopDiv"},l.a.createElement(b,{color:i()[0]}),l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,from:"/Henk",render:function(e){return l.a.createElement(J,Object.assign({schemeChanger:o,scheme:a},e))}}),l.a.createElement(E.a,{exact:!0,from:"/Showcases",render:function(e){return l.a.createElement(te,Object.assign({getColor:i,schemeChanger:o,scheme:a},e))}}),l.a.createElement(E.a,{exact:!0,from:"/Contact",render:function(e){return l.a.createElement(ne,Object.assign({schemeChanger:o,scheme:a},e))}})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(166);a(164),a(54),a(165),a(55),a(74),a(15),Object(f.a)((function(e){return{root:{display:"flex"},drawer:Object(P.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(P.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(P.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240,backgroundColor:"blue"},content:{flexGrow:1,padding:e.spacing(3)}}}));var ce=a(39);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ce.a,null,l.a.createElement(oe.a,null),l.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,a){e.exports=a.p+"static/media/school-24px.e0ea3d9e.svg"},70:function(e,t,a){e.exports=a.p+"static/media/henkShot2.aa837ea9.png"},71:function(e,t,a){e.exports=a.p+"static/media/work_outline-black-18dp.4a02b14a.svg"},72:function(e,t,a){e.exports=a.p+"static/media/monstera.ece4f38c.png"},73:function(e,t,a){e.exports=a.p+"static/media/calathea.9e336adb.png"},83:function(e,t,a){e.exports=a(111)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.834492c1.chunk.js.map