(this.webpackJsonptagthepage=this.webpackJsonptagthepage||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){e.exports=a.p+"static/media/GitHub_Logo.cefc2023.png"},104:function(e,t,a){e.exports=a.p+"static/media/logo-linkedin.0cbd7270.svg"},107:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(7),o=a.n(r),c=(a(85),a(26)),s=a(156),i=a(155),m=a(146),u=a(158),h=a(157),d=a(147),f=a(148),p=a(149),g=a(143),E=a(9);function b(e){var t=Object(E.f)(),a=Object(l.useState)(!1),r=Object(c.a)(a,2),o=r[0],b=r[1],x=function(e){window.scrollTo(0,0),0===e?t.push("/Henk"):1===e?t.push("/Henk/Contact"):2===e&&t.push("/Henk/Projects")},w=Object(g.a)({drawer:{width:"140px"},paper:{width:"140px",background:e.color,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflow:"hidden"},buttonBackground:{background:e.color}})();return n.a.createElement("div",null,n.a.createElement(s.a,{smDown:!0},n.a.createElement(i.a,{variant:"permanent",classes:{paper:w.paper,root:w.drawer}},n.a.createElement(m.a,null,["Home","Contact","Projects"].map((function(e,t){return n.a.createElement(u.a,{button:!0,onClick:function(){return x(t)},key:e},n.a.createElement(h.a,{primary:e}))}))))),n.a.createElement("div",null,n.a.createElement(i.a,{variant:"temporary",open:o,classes:{paper:w.paper,root:w.drawer}},n.a.createElement(m.a,null,["Home","Contact","Projects"].map((function(e,t){return n.a.createElement(u.a,{button:!0,onClick:function(){x(t),b(!o)},key:e},n.a.createElement(h.a,{primary:e}))})),n.a.createElement(u.a,null,n.a.createElement(d.a,{onClick:function(){return b(!o)}},n.a.createElement(f.a,null)))))),n.a.createElement(s.a,{mdUp:!0},n.a.createElement("div",{style:{position:"fixed",top:"50%"}},n.a.createElement(d.a,{onClick:function(){return b(!o)}},n.a.createElement(p.a,null)))))}var x=a(72);var w=function(e){return 3===e?Object(x.a)({palette:{primary:{light:"#DBBEA1",main:"#DB7F67",dark:"#A37B73",contrastText:"black"},secondary:{main:"#DBBEA1"}}}):1===e?Object(x.a)({palette:{primary:{light:"#FFAA00",main:"#FF5400",dark:"#FF7900",contrastText:"black"},secondary:{main:"#DBBEA1"}}}):2===e?Object(x.a)({palette:{primary:{light:"#E7ECEF",main:"#274C77",dark:"#6096BA",contrastText:"white"},secondary:{main:"#DBBEA1"}}}):void 0},y=a(67),v=a(68),k=a(74),C=a(73),N=a(151),F=a(150),j=a(34),B=(a(100),a(69)),A=a.n(B),S=a(49),O=a.n(S),D=a(70),H=a.n(D);a(59);function I(e){return n.a.createElement(F.a,{style:{outline:"none"},className:"mdc-button",onClick:e.schemeChanger},n.a.createElement("div",{className:"mdc-button__ripple"}),n.a.createElement("span",{className:"mdc-button__label nameFont font-xs"},"change scheme"))}var R=a(50),T=a.n(R),_=function(e){console.log("Custom bubble click func")},z=function(e){console.log("Customer legend click func")};var P=function(e){return 1===e.version?n.a.createElement(T.a,{graph:{zoom:1.1,offsetX:-.05,offsetY:-.01},width:600,height:700,padding:0,showLegend:!1,legendPercentage:20,legendFont:{family:"Arial",size:12,color:"#000",weight:"bold"},valueFont:{family:"Arial",size:12,color:e.color[1],weight:"bold"},labelFont:{family:"Arial",size:16,color:e.color[4],weight:"lighter"},bubbleClickFunc:_,legendClickFun:z,data:[{label:"plants",value:2,color:e.color[1]},{label:"cooking",value:7,color:e.color[1]},{label:"video games",value:23,color:e.color[1]},{label:"climbing",value:23,color:e.color[1]},{label:"fantasy books",value:14,color:e.color[1]},{label:"meditation",value:5,color:e.color[1]},{label:"running",value:40,color:e.color[1]},{label:"code",value:25,color:e.color[1]}]}):n.a.createElement(T.a,{graph:{zoom:1.1,offsetX:-.05,offsetY:-.01},width:600,height:700,padding:0,showLegend:!1,legendPercentage:20,legendFont:{family:"Arial",size:12,color:"#000",weight:"bold"},valueFont:{family:"Arial",size:12,color:e.color[1],weight:"bold"},labelFont:{family:"Arial",size:16,color:e.color[4],weight:"lighter"},bubbleClickFunc:_,legendClickFun:z,data:[{label:"C",value:2,color:e.color[1]},{label:"python",value:7,color:e.color[1]},{label:"nodeJS",value:23,color:e.color[1]},{label:"React",value:23,color:e.color[1]},{label:"ES6",value:14,color:e.color[1]},{label:"Java",value:5,color:e.color[1]},{label:"Ethereum",value:30,color:e.color[1]},{label:"MERN",value:15,color:e.color[1]},{label:"Kubernetes",value:8,color:e.color[1]},{label:"GNU/Linux",value:14,color:e.color[1]}]})},W=function(e){Object(k.a)(a,e);var t=Object(C.a)(a);function a(e){return Object(y.a)(this,a),t.call(this,e)}return Object(v.a)(a,[{key:"returnColor",value:function(){return 3===this.props.scheme?["#DBBEA1","#DB7F67","#A37B73","#DB7F67","black"]:2===this.props.scheme?["#E7ECEF","#274C77","#6096BA","#274C77","#E7ECEF"]:["#FFAA00","#FF5400","#FF7900","#FF4800","black"]}},{key:"render",value:function(){return n.a.createElement("div",{className:"flex flex-row"},n.a.createElement(N.a,{theme:w(this.props.scheme)},n.a.createElement("div",{style:{background:this.returnColor()[0],height:"5000px"},className:"xs:pl-5 pl-6 container-fluid flex flex-column flex-wrap justify-start items-center w-auto h-screen"},n.a.createElement("div",{style:{background:this.returnColor()[0],height:"1.5%",minHeight:"50px",width:"95%"},className:"p-2 mb-1 sm:mb-5"},n.a.createElement("h2",{style:{color:this.returnColor()[3]},className:"fromRight nameFont font-xs md:font-xl lg:font-2xl"}," HENK VAN DER SLOOT.")),n.a.createElement("div",{style:{background:this.returnColor()[0]},className:"flex flex-row flex-wrap justify-center w-full "},n.a.createElement("div",{style:{background:this.returnColor()[1],height:"400px",minHeight:"200px",minWidth:"350px"},className:"fadeIn mb-2 p-2 w-3/5 shadow-4 grid grid has-6-columns has-6-rows column-gap-5 row-gap-5"},n.a.createElement("div",{style:{background:this.returnColor()[1]},className:" fadeIn column-start-3 column-end-6 row-start-6 flex items-end justify-end"},n.a.createElement(F.a,{style:{outline:"none"},className:"mdc-button",onClick:this.props.schemeChanger},n.a.createElement("div",{className:"mdc-button__ripple"}),n.a.createElement("span",{className:"mdc-button__label nameFont font-xs"},"change scheme"))),n.a.createElement("div",{className:"textFont column-start-1 column-end-6 row-start-1 row-end-5"},n.a.createElement("p",{style:{color:this.returnColor()[4]},className:" font-xs sm:font-xs md:font-xs lg:font-base"},"I'm a software engineer studying applied computer science at HTW Berlin. In 2019 I started working with Ethereum and Smart Contracts which immediately sparked my interest in making the world a more decentralized space."))),n.a.createElement("div",{style:{background:this.returnColor()[1],height:"400px",minWidth:"300px"},className:" h-4/5 shadow-4 ml-2 grid p-2 fromRight flex flex-row items-center justify-center"},n.a.createElement("img",{style:{height:"380px"},src:A.a}))),n.a.createElement("div",{style:{height:"7%"},className:" fadeIn nameFont w-full flex flex-column justify-end items-center pb-5"},n.a.createElement("h3",{className:""},"Work & Education")),n.a.createElement("div",{className:"fadeIn"},n.a.createElement(j.VerticalTimeline,null,n.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element",contentStyle:{background:this.returnColor()[1],color:"black"},contentArrowStyle:{borderRight:"20px solid ".concat(this.returnColor()[1])},date:"2019 - 2020",iconStyle:{background:this.returnColor()[3],color:this.returnColor()[4]},icon:n.a.createElement("img",{style:{width:"60%",height:"60%",borderRadius:"50%",display:"block",margin:"20%"},src:O.a})},n.a.createElement("h3",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-title"},"Informatik Bsc."),n.a.createElement("h4",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-subtitle"},"Uni Leipzig"),n.a.createElement("p",{style:{color:this.returnColor()[4]}})),n.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element",contentStyle:{background:this.returnColor()[1],color:"black"},contentArrowStyle:{borderRight:"20px solid ".concat(this.returnColor()[1])},date:"2019 - 2020",iconStyle:{background:this.returnColor()[3],color:this.returnColor()[4]},icon:n.a.createElement("img",{style:{width:"60%",height:"60%",borderRadius:"50%",display:"block",margin:"20%"},src:H.a})},n.a.createElement("h3",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-title"},"Software Engineer"),n.a.createElement("h4",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-subtitle"},"Exxeta GmbH, Leipzig"),n.a.createElement("p",{style:{color:this.returnColor()[4]}},"Werkstudent, eigenes Projekt: Ethereum, Smart-Contracts, React, NodeJS")),n.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element",contentStyle:{background:this.returnColor()[1],color:"black"},contentArrowStyle:{borderRight:"20px solid ".concat(this.returnColor()[1])},date:"2020 - present",iconStyle:{background:this.returnColor()[3],color:this.returnColor()[4]},icon:n.a.createElement("img",{style:{width:"60%",height:"60%",borderRadius:"50%",display:"block",margin:"20%"},src:O.a})},n.a.createElement("h3",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-title"},"angewandte Informatik"),n.a.createElement("h4",{style:{color:this.returnColor()[4]},className:"vertical-timeline-element-subtitle"},"HTW Berlin"),n.a.createElement("p",{style:{color:this.returnColor()[4]}}," Bachelor fertigstellen"))),n.a.createElement("div",{className:" h-full flex flex-column items-center pt-5"},n.a.createElement("h2",{className:"textFont"}," things I like "),n.a.createElement(P,{version:1,color:this.returnColor()}),n.a.createElement("div",{style:{alignSelf:"flex-end"}},n.a.createElement(I,{schemeChanger:this.props.schemeChanger,color:this.returnColor()[3]})),n.a.createElement("h2",null,"tech skills"),n.a.createElement(P,{version:2,color:this.returnColor()})),n.a.createElement("div",null)))))}}]),a}(l.Component);function L(e){return n.a.createElement("div",null,n.a.createElement(W,{schemeChanger:e.schemeChanger,scheme:e.scheme}))}function J(e){return n.a.createElement("div",null,n.a.createElement(N.a,{theme:w(e.scheme)},n.a.createElement("div",{style:{background:e.getColor(e.scheme)[0],minHeight:"100vh",minWidth:"100vw"},className:"xs:pl-5 pl-6 md:pr-2 pr-1 pt-2 pb-2 container-fluid flex flex-column items-start justify-start h-auto"},n.a.createElement("div",{className:" flex flex-row flex-row flex-wrap "},n.a.createElement("img",{className:" m-1  p-1 shadow-4 w-5/6 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 ",style:{background:e.getColor()[1]},src:"https://i.ibb.co/42kbX5d/screenshot.png"}),n.a.createElement("div",{style:{background:e.getColor()[1],height:"100%"},className:" w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5 sm:shadow-4 shadow-4 md:shadow-4 p-2 m-1 flex flex-column items-center justify-start flex-wrap"},n.a.createElement("h4",{className:"p-1 nameFont font-xs sm:font-sm"}," shareYourPlant "),n.a.createElement("div",{className:"p-1 textFont font-xs sm:font-xs flex flex-column items-center justify-center"},n.a.createElement("p",null,"In this project I used the MERN stack to start working on my webApp idea in which you can share plants with other people in your city and discuss about taking care of your beloved green roommates."),n.a.createElement("h4",{className:"pt-2"}," ",n.a.createElement("a",{href:"https://h3nk42.github.io/ShareYourPlant/"}," open demo  ")," "),n.a.createElement("h4",{className:"pt-2"}," ",n.a.createElement("a",{href:"https://github.com/h3nk42/ShareYourPlant"}," github repo  ")," "))),n.a.createElement("div",{className:"self-end",style:{width:"100px"}},n.a.createElement(F.a,{style:{outline:"none"},className:"mdc-button",onClick:e.schemeChanger},n.a.createElement("div",{className:"mdc-button__ripple"}),n.a.createElement("span",{className:"mdc-button__label nameFont font-xs"},"change scheme")))),n.a.createElement("div",{className:" flex mt-6 flex-row flex-row flex-wrap "},n.a.createElement("img",{className:" m-1  p-1 shadow-4 w-5/6 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-2/5 ",style:{background:e.getColor()[1]},src:"https://i.ibb.co/rfS50xK/calendar.png"}),n.a.createElement("div",{style:{background:e.getColor()[1]},className:" w-full sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-1/5 sm:shadow-4 shadow-4 md:shadow-4 p-2 m-1 flex flex-column items-center justify-start flex-wrap"},n.a.createElement("h4",{className:"p-1 nameFont font-xs sm:font-sm"}," everyDayCalendar "),n.a.createElement("div",{className:"p-1 textFont font-xs sm:font-xs flex flex-column items-center justify-center"},n.a.createElement("p",null,"Simple habit tracker to see if you managed to meditate every day in the last year ;-)"),n.a.createElement("h4",{className:"pt-2"}," ",n.a.createElement("a",{href:"https://h3nk42.github.io/everydayCalendar/"}," open demo  ")," "),n.a.createElement("h4",{className:"pt-2"}," ",n.a.createElement("a",{href:"https://github.com/h3nk42/everydayCalendar"}," github repo  ")," ")))))))}a(102);var M=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"hover-container"},n.a.createElement("a",{href:"mailto:henk.vandrsloot@gmail.com"},n.a.createElement("h1",{className:"mailButton"},"Mail me!"))))};function V(e){var t=function(){return 3===e.scheme?["#DBBEA1","#DB7F67","#A37B73","#DB7F67","black"]:2===e.scheme?["#E7ECEF","#274C77","#6096BA","#274C77","#E7ECEF"]:["#FFAA00","#FF5400","#FF7900","#FF4800","black"]};return n.a.createElement(N.a,{theme:w(e.scheme)},n.a.createElement("div",{style:{background:t()[0],height:"100vh"},className:"xs:pl-5 pl-6 container-fluid flex flex-column flex-wrap justify-start items-center w-screen h-screen"},n.a.createElement("div",{style:{height:"200px",minHeight:"200px",minWidth:"350px"},className:"flex flex-column justify-center "}," ",n.a.createElement("h2",null," CONTACT ME! ")," "),n.a.createElement("div",{style:{background:t()[1],height:"400px",minHeight:"200px",minWidth:"350px"},className:"fadeIn mb-2 p-2 w-3/5 shadow-4 grid grid has-6-columns has-7-rows column-gap-5 row-gap-5"},n.a.createElement("div",{style:{},className:" fadeIn column-start-5 column-end-5 row-start-3 flex items-end justify-end flex flex-column justify-center items-center"},n.a.createElement(M,null)),n.a.createElement("div",{style:{},className:" fadeIn column-start-3 column-end-4 row-start-4 flex items-end justify-end flex flex-column justify-center items-center"},n.a.createElement("a",{className:"flex flex-row items-start justify-center",href:"https://github.com/h3nk42"},n.a.createElement("img",{style:{width:"120px",height:"50px"},src:a(103)}))),n.a.createElement("div",{style:{},className:" fadeIn column-start-4 column-end-4  row-end-6 flex items-end justify-end flex flex-column justify-center items-center"},n.a.createElement("a",{className:"flex flex-row items-start justify-center",href:"https://linkedin.com/in/henk-van-der-sloot-7a06581b4"},n.a.createElement("img",{style:{width:"50px",height:"50px"},src:a(104)}))))))}var Y=Object(g.a)({container:{display:"flex",flexDirection:"row"}});function G(){var e=Object(l.useState)(3),t=Object(c.a)(e,2),a=t[0],r=t[1],o=function(){r(a<3?a+1:1)},s=function(){return 3===a?["#DBBEA1","#DB7F67","#A37B73","#DB7F67","black"]:2===a?["#E7ECEF","#274C77","#6096BA","#274C77","#E7ECEF"]:["#FFAA00","#FF5400","#FF7900","#FF4800","black"]},i=Y();return n.a.createElement("div",{className:i.container,style:{overflowX:"hidden"},id:"scrollTopDiv"},n.a.createElement(b,{color:s()[0]}),n.a.createElement(E.c,null,n.a.createElement(E.a,{exact:!0,from:"/Henk",render:function(e){return n.a.createElement(L,Object.assign({schemeChanger:o,scheme:a},e))}}),n.a.createElement(E.a,{exact:!0,from:"/Henk/Projects",render:function(e){return n.a.createElement(J,Object.assign({getColor:s,schemeChanger:o,scheme:a},e))}}),n.a.createElement(E.a,{exact:!0,from:"/Henk/Contact",render:function(e){return n.a.createElement(V,Object.assign({schemeChanger:o,scheme:a},e))}})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(45),K=a(154);a(152),a(51),a(153),a(52),a(71),a(15),Object(g.a)((function(e){return{root:{display:"flex"},drawer:Object(X.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(X.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(X.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240,backgroundColor:"blue"},content:{flexGrow:1,padding:e.spacing(3)}}}));var U=a(37);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(U.a,null,n.a.createElement(K.a,null),n.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,a){e.exports=a.p+"static/media/school-24px.e0ea3d9e.svg"},59:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/henkShot2.aa837ea9.png"},70:function(e,t,a){e.exports=a.p+"static/media/work_outline-black-18dp.4a02b14a.svg"},80:function(e,t,a){e.exports=a(107)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.9fba75d0.chunk.js.map