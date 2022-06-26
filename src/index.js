import home from "./pages/home"
import menuPage from "./pages/menu"
import contact from "./pages/contact"

import firstLoad from "./functions/firstLoad";
import clear from "./functions/clear"


firstLoad();

let homeBtn = document.querySelector("#home");
let menuBtn = document.querySelector("#menu");
let contactBtn = document.querySelector("#contact");

let main = document.querySelector(".main");
homeBtn.classList.add("red");

homeBtn.addEventListener("click", () =>{
    clear();
    main.appendChild(home());
    homeBtn.classList.add("red");
    menuBtn.classList.remove("red");
    contactBtn.classList.remove("red");
    
});


menuBtn.addEventListener("click", () =>{
    clear();
    main.appendChild(menuPage());
    menuBtn.classList.add("red");
    homeBtn.classList.remove("red");
    contactBtn.classList.remove("red");
});

contactBtn.addEventListener("click", () =>{
    clear();
    main.appendChild(contact());
    contactBtn.classList.add("red");
    menuBtn.classList.remove("red");
    homeBtn.classList.remove("red");
    
});



