(()=>{"use strict";const e=function(){const e=document.createElement("div");e.id="home",e.classList.add("tab-content");const t=document.createElement("h1"),n=document.createElement("p");return t.textContent="Restaurant",n.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequuntur nulla voluptates, porro exercitationem laborum qui possimus suscipit et dignissimos eligendi praesentium assumenda rerum",e.appendChild(t),e.appendChild(n),document.querySelector(".main"),e};let t=[{name:"Burger",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",Price:"$24.99",image:"https://via.placeholder.com/150"},{name:"Taco",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",Price:"$15.99",image:"https://via.placeholder.com/150"},{name:"Salad",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",Price:"$10.99",image:"https://via.placeholder.com/150"},{name:"Soup",Desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",Price:"$19.99",image:"https://via.placeholder.com/150"}];const n=function(){const e=document.createElement("div");e.classList.add("tab-content"),e.id="menu";const n=document.createElement("h1");n.textContent="Menu";const d=document.createElement("div");return d.classList.add("items"),e.appendChild(n),t.forEach((e=>{const t=document.createElement("img"),n=document.createElement("div");n.classList.add("description");const c=document.createElement("h3"),i=document.createElement("h6"),o=document.createElement("p"),a=document.createElement("div");a.classList.add("item"),t.src=e.image,c.textContent=e.name,o.textContent=e.Desc,i.textContent=e.Price,a.appendChild(t),n.appendChild(c),n.appendChild(i),n.appendChild(o),a.appendChild(n),d.appendChild(a)})),e.appendChild(d),e},d=function(){const e=document.querySelector(".main");for(;e.firstChild;)e.removeChild(e.lastChild)};!function(){const t=document.querySelector(".content");t.appendChild(function(){const e=document.createElement("nav");e.id="navigation";const t=document.createElement("h1"),n=document.createElement("button"),d=document.createElement("button"),c=document.createElement("button"),i=document.createElement("div");return t.id="title",t.textContent="RESTAURANT",n.id="home",n.classList.add("btn"),n.textContent="Home",d.id="menu",d.classList.add("btn"),d.textContent="Menu",c.id="contact",c.classList.add("btn"),c.textContent="Contact Us",i.classList.add("btn-container"),e.appendChild(t),i.appendChild(n),i.appendChild(d),i.appendChild(c),e.appendChild(i),e}());const n=document.createElement("div");n.classList.add("main"),n.appendChild(e()),t.appendChild(n)}();let c=document.querySelector("#home"),i=document.querySelector("#menu"),o=document.querySelector("#contact"),a=document.querySelector(".main");c.addEventListener("click",(()=>{d(),a.appendChild(e())})),i.addEventListener("click",(()=>{d(),a.appendChild(n())})),o.addEventListener("click",(()=>{d()}))})();