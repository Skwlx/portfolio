(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/book.27b18f8c.png"},19:function(e,t,a){e.exports=a.p+"static/media/picker.7b9cd50e.png"},20:function(e,t,a){e.exports=a.p+"static/media/brochacki.aba00db8.png"},21:function(e,t,a){e.exports=a.p+"static/media/melodypark.96416837.png"},22:function(e,t,a){e.exports=a.p+"static/media/bindly.b172853a.png"},24:function(e,t,a){e.exports=a(71)},29:function(e,t,a){},30:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/gym.27577615.png"},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),i=a.n(o),c=function e(t,a){if(window.innerWidth>=700){var n=document.querySelector(t),l=[a[0],a[1]],o=window.innerWidth-175,i=window.innerHeight-100,c=Math.floor(Math.random()*(o+10)),s=Math.floor(Math.random()*(i+10));n.textContent=l[Math.floor(2*Math.random())],n.style.top="".concat(s,"px"),n.style.left="".concat(c,"px"),setTimeout((function(){e(t,a)}),3e3)}},s=(a(29),function(){return Object(n.useEffect)((function(){c(".hidden-about",["ABOUT","ME"]);var e=document.querySelector(".about");window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect().top;e.style.opacity=t<=300?1:0}))})),l.a.createElement("div",{className:"about"},l.a.createElement("span",{className:"hidden-text hidden-about"}),l.a.createElement("div",{className:"about__content"},l.a.createElement("div",{className:"about__content-title"},l.a.createElement("h2",null,"Hi, my name is Pawe\u0142")),l.a.createElement("div",{className:"about__content-text"},l.a.createElement("p",null,"I'm ",(new Date).getFullYear()-1999," years old CS student at Politechnika Cz\u0119stochowska. I'm intrested in technology and programming."),l.a.createElement("ul",null,l.a.createElement("li",null,"My hobbies are: "),l.a.createElement("li",null,"Programming,"),l.a.createElement("li",null,"Reading books,"),l.a.createElement("li",null,"Learning,"),l.a.createElement("li",null,"Swimming,"),l.a.createElement("li",null,"Playing games (I love Rocket League ",l.a.createElement("span",{role:"img"},"\u2764\ufe0f"),")")))))}),r=a(3),m=(a(30),function(){return Object(n.useEffect)((function(){var e=document.querySelector(".background__canvas"),t=new r.e,a=new r.d(65,window.innerWidth/window.innerHeight,.1,1e3),n=new r.f({alpha:!0,antialias:!0});n.setSize(window.innerWidth,window.innerHeight),e.appendChild(n.domElement);var l=new r.a(1,4),o=new r.c({color:14277081,wireframe:!0}),i=new r.b(l,o);t.add(i),a.position.z=5;window.addEventListener("resize",(function(){var e=window,t=e.innerWidth,l=e.innerHeight;n.setSize(t,l),a.aspect=t/l,a.updateProjectionMatrix()})),window.innerWidth>=800?window.addEventListener("scroll",(function(){!function(){var e=(window.scrollY+100)/100;i.scale.x=e,i.scale.y=e,i.scale.z=e}()})):(i.scale.x=5,i.scale.y=5,i.scale.z=5),function e(){requestAnimationFrame(e),i.rotation.y+=.001,i.rotation.x+=.001,n.render(t,a)}()})),l.a.createElement("div",{className:"background__canvas"})}),d=a(17),u=a.n(d),p=(a(57),a(2)),f=a(5),_=a(7),E=(a(63),a(18)),w=a.n(E),h=a(19),b=a.n(h),k=a(20),g=a.n(k),v=a(21),S=a.n(v),y=a(22),N=a.n(y),x={skills:[{id:1,name:"HTML",level:"Good knowledge"},{id:2,name:"CSS",level:"Good knowledge"},{id:3,name:"Scss",level:"Good knowledge"},{id:4,name:"Bootstrap",level:"Basic knowledge"},{id:5,name:"SQL",level:"Basic knowledge"},{id:23,name:"C#",level:"Good knowledge"}]},j={skills:[{id:6,name:"TypeScript",level:"Good knowledge"},{id:7,name:"React",level:"Good knowledge"},{id:8,name:"Redux",level:"Good knowledge"},{id:9,name:"GatsbyJS",level:"Good knowledge"},{id:10,name:"Node",level:"Basic knowledge"},{id:11,name:"Styled Components",level:"Good knowledge"}]},C={projects:[{id:13,title:"MelodyPark",description:"Commercial project made for RendPro. ",stack:"Gatsby, React, Styled Components",image:S.a,code:"",live:"https://www.melodypark.pl/"},{id:14,title:"Brochacki",description:"Commercial project made for RendPro. Dynamic website with Strapi as a CMS.",stack:"Gatsby, React, Styled Components, Strapi",image:g.a,code:"",live:"https://brochacki.pl/"},{id:15,title:"Bindly widget",description:"One of my commercial projects. I created styles for the Bindly widget in Scss and added some changes in js files.",stack:"Html, Scss, Js",image:N.a,code:"",live:"https://www.bindly.pl"},{id:17,title:"BookApi",description:"Website made for searching books.",stack:"React, Google Books API, SCSS",image:w.a,code:"https://github.com/Skwlx/BookApi",live:"https://skwlx.github.io/BookApi/"},{id:18,title:"Car picker",description:"App made for recrutation process.",stack:"React, Redux, SCSS",image:b.a,code:"https://github.com/Skwlx/CarPicker",live:"https://car-picker.netlify.app"}]},P=(a(64),function(){return Object(n.useEffect)((function(){c(".hidden-project",["MY","PROJECTS"])})),l.a.createElement("div",{className:"projects"},l.a.createElement("span",{className:"hidden-text hidden-project"}),l.a.createElement("div",{className:"projects__box"},l.a.createElement(u.a,{animationType:"fadeout",disableDotsControls:!0,autoPlay:!0,infinite:!0,autoPlayInterval:4e3,fadeOutAnimation:!0},C.projects.map((function(e){return l.a.createElement("div",{className:"projects__box__content",key:e.id},l.a.createElement("a",{href:e.live},l.a.createElement("img",{className:"projects__box__content-image",src:e.image,alt:e.title})),l.a.createElement("h3",{className:"projects__box__content-title"},e.title),l.a.createElement("p",{className:"projects__box__content-text"},e.description),l.a.createElement("p",{className:"projects__box__content-text"},e.stack),e.code?l.a.createElement("a",{href:e.code,className:"projects__box__content-icon"},l.a.createElement(p.a,{icon:f.b})):"",l.a.createElement("a",{href:e.live,className:"projects__box__content-icon"},l.a.createElement(p.a,{icon:_.b})))})))))}),B=(a(65),function(){return Object(n.useEffect)((function(){var e=document.querySelector(".jumbotron__title");window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect().top;e.style.opacity=t>=100?1:0}))})),l.a.createElement("div",{className:"jumbotron"},l.a.createElement("div",{className:"jumbotron__title"},l.a.createElement("h1",{className:"jumbotron__title-name"},"Pawe\u0142 S\u0142awuta"),l.a.createElement("h2",{className:"jumbotron__title-info"},"I create web apps and websites")))}),M=a(23),R=a.n(M),G=(a(66),a(67),function(){return Object(n.useEffect)((function(){R.a.init({offset:-10}),c(".hidden-skill",["MY","SKILLS"])})),l.a.createElement("div",{className:"skillSet"},l.a.createElement("span",{className:"hidden-text hidden-skill"}),l.a.createElement("div",{className:"skillSet__box"},l.a.createElement("ul",{className:"skillSet__box-list","data-aos":"fade-down"},x.skills.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("span",{className:"skillSet__box-list__title"},e.name),l.a.createElement("p",{className:"skilSet__box-list__content"},e.level))})))),l.a.createElement("div",{className:"skillSet__box"},l.a.createElement("ul",{className:"skillSet__box-list","data-aos":"fade-up"},j.skills.map((function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"skillSet__box-list__title"},e.name),l.a.createElement("p",{className:"skilSet__box-list__content"},e.level))})))))}),L=(a(68),a(69),function(){return Object(n.useEffect)((function(){c(".hidden-contact",["CONTACT","ME"]);var e=document.querySelector("footer");window.addEventListener("scroll",(function(){var t=e.getBoundingClientRect().top;e.style.opacity=t<=500?1:0}))})),l.a.createElement("footer",null,l.a.createElement("div",{className:"footer__content"},l.a.createElement("span",{className:"hidden-text hidden-contact"}),l.a.createElement("h2",{className:"footer__header"},"Get in touch..."),l.a.createElement("ul",{className:"footer__social-list"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Skwlx",className:"footer__social-list-icon"},l.a.createElement(p.a,{icon:f.b})),l.a.createElement("p",{className:"footer__social-list-info"},"Skwlx")),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:pawel.slawuta@o2.pl",className:"footer__social-list-icon"},l.a.createElement(p.a,{icon:_.a})),l.a.createElement("p",{className:"footer__social-list-info"},"pawel.slawuta@o2.pl")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100005753820598",className:"footer__social-list-icon"},l.a.createElement(p.a,{icon:f.a})),l.a.createElement("p",{className:"footer__social-list-info"},"Pawe\u0142 S\u0142awuta")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/pawe\u0142-s\u0142awuta-64709219a/",className:"footer__social-list-icon"},l.a.createElement(p.a,{icon:f.c})),l.a.createElement("p",{className:"footer__social-list-info"},"Pawe\u0142 S\u0142awuta")))),l.a.createElement("div",{className:"footer__info"},l.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()," Pawe\u0142 S\u0142awuta")))}),O=(a(70),function(){return l.a.createElement("header",{className:"header"},l.a.createElement("button",{className:"header__dark-mode-button",onClick:function(){document.querySelector("body").classList.toggle("dark-mode")}},"Dark mode"))}),A=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(O,null),l.a.createElement(B,null),l.a.createElement(s,null),l.a.createElement(G,null),l.a.createElement(P,null),l.a.createElement(L,null))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.a7f4922f.chunk.js.map