(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var d=n.getElementsByTagName("script");d.length&&(t=d[d.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=function(){const e=document.createElement("div");e.id="home",e.classList.add("tab-content");const t=document.createElement("h1"),n=document.createElement("p");return t.textContent="Restaurant",n.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequuntur nulla voluptates, porro exercitationem laborum qui possimus suscipit et dignissimos eligendi praesentium assumenda rerum",e.appendChild(t),e.appendChild(n),document.querySelector(".main"),e};let n=[{name:"Burger",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",Price:"$24.99",image:e.p+"889cbe800b3f22fccd75.jpg"},{name:"Sushi",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",Price:"$15.99",image:e.p+"627ec4ed26288b0a2303.jpg"},{name:"Salad Bowl",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",Price:"$10.99",image:e.p+"0ebeb4b0af5c214760b2.jpg"},{name:"Pizza",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",Price:"$19.99",image:e.p+"2ba4b19ac35ff2a9e4d8.jpg"}];const d=function(){const e=document.createElement("div");e.classList.add("tab-content"),e.id="menu";const t=document.createElement("h1");t.textContent="Menu";const d=document.createElement("div");return d.classList.add("items"),e.appendChild(t),n.forEach((e=>{const t=document.createElement("img"),n=document.createElement("div");n.classList.add("description");const c=document.createElement("h3"),a=document.createElement("h6"),i=document.createElement("p"),s=document.createElement("div");s.classList.add("item"),t.src=e.image,c.textContent=e.name,i.textContent=e.Desc,a.textContent=e.Price,s.appendChild(t),n.appendChild(c),n.appendChild(a),n.appendChild(i),s.appendChild(n),d.appendChild(s)})),e.appendChild(d),e},c=function(){const e=document.querySelector(".main");for(;e.firstChild;)e.removeChild(e.lastChild)};!function(){const e=document.querySelector(".content");e.appendChild(function(){const e=document.createElement("nav");e.id="navigation";const t=document.createElement("h1"),n=document.createElement("button"),d=document.createElement("button"),c=document.createElement("button"),a=document.createElement("div");return t.id="title",t.textContent="RESTAURANT",n.id="home",n.classList.add("btn"),n.textContent="Home",d.id="menu",d.classList.add("btn"),d.textContent="Menu",c.id="contact",c.classList.add("btn"),c.textContent="Contact Us",a.classList.add("btn-container"),e.appendChild(t),a.appendChild(n),a.appendChild(d),a.appendChild(c),e.appendChild(a),e}());const n=document.createElement("div");n.classList.add("main"),n.appendChild(t()),e.appendChild(n)}();let a=document.querySelector("#home"),i=document.querySelector("#menu"),s=document.querySelector("#contact"),o=document.querySelector(".main");a.classList.add("red"),a.addEventListener("click",(()=>{c(),o.appendChild(t()),a.classList.add("red"),i.classList.remove("red"),s.classList.remove("red")})),i.addEventListener("click",(()=>{c(),o.appendChild(d()),i.classList.add("red"),a.classList.remove("red"),s.classList.remove("red")})),s.addEventListener("click",(()=>{c(),o.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("h1"),c=document.createElement("h3"),a=document.createElement("p"),i=document.createElement("p"),s=document.createElement("p"),o=document.createElement("iframe");return e.id="contact",e.classList.add("tab-content"),n.classList.add("address-container"),d.textContent="Contact Us",c.textContent="123 Fake Street",a.textContent="Oak Lawn, IL 60453, USA",i.textContent="P: 999-999-9999",s.textContent="E: fakeEmail@notreal.com",o.classList.add("map"),o.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.781748875347!2d-87.75088408444928!3d41.72522817923468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3bd3bb6db18d%3A0x6582323d7a833d16!2s123%20Fake%20Street%2C%20Oak%20Lawn%2C%20IL%2060453%2C%20USA!5e0!3m2!1sen!2sca!4v1656211512795!5m2!1sen!2sca",t.classList.add("map-container"),e.appendChild(d),t.appendChild(o),n.appendChild(c),n.appendChild(a),n.appendChild(i),n.appendChild(s),t.appendChild(n),e.appendChild(t),e}()),s.classList.add("red"),i.classList.remove("red"),a.classList.remove("red")}))})();