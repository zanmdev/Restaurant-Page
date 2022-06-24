import home from "../pages/home.js"
import navigation from "../pages/header.js"


function firstLoad(){
    
    const content = document.querySelector(".content");
    content.appendChild(navigation());

    const main = document.createElement("div");
    main.classList.add("main");
    main.appendChild(home());

    content.appendChild(main);
}

export default firstLoad;