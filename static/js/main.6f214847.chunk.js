(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/gym.27577615.png"},19:function(e,t,a){e.exports=a.p+"static/media/book.27b18f8c.png"},20:function(e,t,a){e.exports=a.p+"static/media/restaurant.b855ccd2.png"},21:function(e,t,a){e.exports=a.p+"static/media/picker.7b9cd50e.png"},22:function(e,t,a){e.exports=a.p+"static/media/flapit.088a2f6e.png"},23:function(e,t,a){e.exports=a.p+"static/media/tictactoe.766b1f56.png"},24:function(e,t,a){e.exports=a.p+"static/media/exchange.cb1b190d.png"},26:function(e,t,a){e.exports=a(71)},31:function(e,t,a){},32:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),i=a.n(o),c=function e(t,a){var n=document.querySelector(t),l=[a[0],a[1]],o=window.innerWidth-175,i=window.innerHeight-100;console.log(window.innerWidth-200);var c=Math.floor(Math.random()*(o+10)),s=Math.floor(Math.random()*(i+10));n.textContent=l[Math.floor(2*Math.random())],n.style.top="".concat(s,"px"),n.style.left="".concat(c,"px"),setTimeout((function(){e(t,a)}),3e3)},s=(a(31),function(){return Object(n.useEffect)((function(){c(".hidden-about",["ABOUT","ME"]);var e=document.querySelector(".about");window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect().top;e.style.opacity=t<=300?1:0}))})),l.a.createElement("div",{className:"about"},l.a.createElement("span",{className:"hidden-text hidden-about"}),l.a.createElement("div",{className:"about__content"},l.a.createElement("div",{className:"about__content-title"},l.a.createElement("h2",null,"Hi, my name is Pawe\u0142")),l.a.createElement("div",{className:"about__content-text"},l.a.createElement("p",null,"I'm ",(new Date).getFullYear()-1999," years old CS student at Politechnika Cz\u0119stochowska. I'm intrested in technology and programming."),l.a.createElement("ul",null,l.a.createElement("li",null,"My hobbies are: "),l.a.createElement("li",null,"Proggraming,"),l.a.createElement("li",null,"Reading books,"),l.a.createElement("li",null,"Learning,"),l.a.createElement("li",null,"Swimming,"),l.a.createElement("li",null,"Playing games (I love rocket league \u2764\ufe0f)")))))}),r=a(3),m=(a(32),function(){return Object(n.useEffect)((function(){var e=document.querySelector(".background__canvas"),t=new r.e,a=new r.d(65,window.innerWidth/window.innerHeight,.1,1e3),n=new r.f({alpha:!0,antialias:!0});n.setSize(window.innerWidth,window.innerHeight),e.appendChild(n.domElement);var l=new r.a(1,4),o=new r.c({color:14277081,wireframe:!0}),i=new r.b(l,o);t.add(i),a.position.z=5;window.addEventListener("resize",(function(){var e=window,t=e.innerWidth,l=e.innerHeight;n.setSize(t,l),a.aspect=t/l,a.updateProjectionMatrix()})),window.innerWidth>=800?window.addEventListener("scroll",(function(){!function(){var e=(window.scrollY+100)/100;i.scale.x=e,i.scale.y=e,i.scale.z=e}()})):(i.scale.x=5,i.scale.y=5,i.scale.z=5),function e(){requestAnimationFrame(e),i.rotation.y+=.001,i.rotation.x+=.001,n.render(t,a)}()})),l.a.createElement("div",{className:"background__canvas"})}),u=a(17),d=a.n(u),p=(a(59),a(2)),f=a(5),h=a(7),E=a(18),_=a.n(E),w=a(19),g=a.n(w),b=a(20),k=a.n(b),v=a(21),S=a.n(v),x=a(22),y=a.n(x),N=a(23),j=a.n(N),C=a(24),I=a.n(C),R={skills:[{name:"HTML",level:"Good knowledge"},{name:"CSS",level:"Good knowledge, I can create layout in Grid, Flexbox. I know the rules of RWD"},{name:"Scss",level:"Good knowledge, I'm using this preprocesor in my daily work"},{name:"Bootstrap",level:"Basic knowledge, created one or two projects in bootstrap"},{name:"SQL",level:"Basic knowledge, currently learning"}]},M={skills:[{name:"JavaScript",level:"Good knowledge, ES6 features"},{name:"React",level:"Good knowledge, I'm using React with Hooks"},{name:"Redux",level:"Basic knowledge, currently learning"},{name:"Node",level:"Basic knowledge. Once used with ExpressJS"},{name:"Angular",level:"Currently learning"}]},A={projects:[{title:"Gym Instructor",description:"Template webiste made for practice.",stack:"GatsbyJS, GraphQl, SCSS",image:_.a,code:"https://github.com/Skwlx/GymInstructorSite",live:"https://gyminstructor.netlify.app"},{title:"BookApi",description:"Website made for searching books.",stack:"React, Google Books API, SCSS",image:g.a,code:"https://github.com/Skwlx/BookApi",live:"https://skwlx.github.io/BookApi/"},{title:"Restaurant site",description:"I love mexican food so i made a website about mexican restaurant.",stack:"React, SCSS",image:k.a,code:"https://github.com/Skwlx/RestaurantSite",live:"https://skwlx.github.io/RestaurantSite/"},{title:"Car picker",description:"App made for recrutation process.",stack:"React, Redux, SCSS",image:S.a,code:"https://github.com/Skwlx/CarPicker",live:"https://car-picker.netlify.app"},{title:"Flappit",description:"My friend made this game, so I made a website for him (Just for fun project).",stack:"Html, CSS",image:y.a,code:"https://github.com/Skwlx/Flappit",live:"https://snakerrek.github.io/Flappit/"},{title:"Tictactoe",description:"My first ever project made, simple game.",stack:"Html, CSS, Javascript",image:j.a,code:"https://github.com/Skwlx/Tictactoe",live:"https://skwlx.github.io/Tictactoe/"},{title:"ExchangeApp",description:"Very simple API app, let's you check the currency rate.",stack:"React, SCSS, Javascript",image:I.a,code:"https://github.com/Skwlx/ExchangeApp",live:"https://skwlx.github.io/ExchangeApp/"}]},B=(a(65),function(){return Object(n.useEffect)((function(){c(".hidden-project",["MY","PROJECTS"])})),l.a.createElement("div",{className:"projects"},l.a.createElement("span",{className:"hidden-text hidden-project"}),l.a.createElement("div",{className:"projects__box"},l.a.createElement(d.a,{animationType:"fadeout",disableDotsControls:!0,autoPlay:!0,infinite:!0,autoPlayInterval:4e3,fadeOutAnimation:!0},A.projects.map((function(e){return l.a.createElement("div",{className:"projects__box__content"},l.a.createElement("a",{href:e.live},l.a.createElement("img",{className:"projects__box__content-image",src:e.image})),l.a.createElement("h3",{className:"projects__box__content-title"},e.title),l.a.createElement("p",{className:"projects__box__content-text"},e.description),l.a.createElement("p",{className:"projects__box__content-text"},e.stack),l.a.createElement("a",{href:e.code,className:"projects__box__content-icon"},l.a.createElement(p.a,{icon:f.b})),l.a.createElement("a",{href:e.live,className:"projects__box__content-icon"},l.a.createElement(p.a,{icon:h.b})))})))))}),P=(a(66),function(){return Object(n.useEffect)((function(){var e=document.querySelector(".jumbotron__title");window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect().top;e.style.opacity=t>=100?1:0}))})),l.a.createElement("div",{className:"jumbotron"},l.a.createElement("div",{className:"jumbotron__title"},l.a.createElement("h1",{className:"jumbotron__title-name"},"Pawe\u0142 S\u0142awuta"),l.a.createElement("h2",{className:"jumbotron__title-info"},"I create web apps and websites")))}),G=a(25),O=a.n(G),T=(a(67),a(68),function(){return Object(n.useEffect)((function(){O.a.init({offset:-10}),c(".hidden-skill",["MY","SKILLS"])})),l.a.createElement("div",{className:"skillSet"},l.a.createElement("span",{className:"hidden-text hidden-skill"}),l.a.createElement("div",{className:"skillSet__box"},l.a.createElement("ul",{className:"skillSet__box-list","data-aos":"fade-down"},R.skills.map((function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"skillSet__box-list__title"},e.name),l.a.createElement("p",{className:"skilSet__box-list__content"},e.level))})))),l.a.createElement("div",{className:"skillSet__box"},l.a.createElement("ul",{className:"skillSet__box-list","data-aos":"fade-up"},M.skills.map((function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"skillSet__box-list__title"},e.name),l.a.createElement("p",{className:"skilSet__box-list__content"},e.level))})))))}),L=(a(69),a(70),function(){return Object(n.useEffect)((function(){c(".hidden-contact",["CONTACT","ME"]);var e=document.querySelector("footer");window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect().top;e.style.opacity=t<=500?1:0}))})),l.a.createElement("footer",null,l.a.createElement("div",{className:"footer__content"},l.a.createElement("span",{className:"hidden-text hidden-contact"}),l.a.createElement("h2",{className:"footer__header"},"Get in touch..."),l.a.createElement("ul",{className:"footer__social-list"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Skwlx",className:"footer__social-list-icon"},l.a.createElement(p.a,{icon:f.b})),l.a.createElement("p",{className:"footer__social-list-info"},"Skwlx")),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:pawel.slawuta@o2.pl",className:"footer__social-list-icon"},l.a.createElement(p.a,{icon:h.a})),l.a.createElement("p",{className:"footer__social-list-info"},"pawel.slawuta@o2.pl")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100005753820598",className:"footer__social-list-icon"},l.a.createElement(p.a,{icon:f.a})),l.a.createElement("p",{className:"footer__social-list-info"},"Pawe\u0142 S\u0142awuta")))),l.a.createElement("div",{className:"footer__info"},l.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()," Pawe\u0142 S\u0142awuta")))}),H=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(P,null),l.a.createElement(s,null),l.a.createElement(T,null),l.a.createElement(B,null),l.a.createElement(L,null))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6f214847.chunk.js.map