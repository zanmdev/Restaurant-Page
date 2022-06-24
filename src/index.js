import home from "./pages/home"
import menuPage from "./pages/menu"

import navigation from "./pages/header"
import firstLoad from "./functions/firstLoad";
import clear from "./functions/clear"


firstLoad();

let homeBtn = document.querySelector("#home");
let menuBtn = document.querySelector("#menu");
let contactBtn = document.querySelector("#contact");

let main = document.querySelector(".main");


homeBtn.addEventListener("click", () =>{
    clear();
    main.appendChild(home());
    
});


menuBtn.addEventListener("click", () =>{
    clear();
    menuPage();
});


