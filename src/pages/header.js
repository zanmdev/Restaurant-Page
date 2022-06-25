function navigation() {

    const nav = document.createElement("nav");
    nav.id = "navigation";  

    const header = document.createElement("h1");
    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const contactButton = document.createElement("button");
    const buttonContainer = document.createElement("div");

    header.id = "title"
    header.textContent = "RESTAURANT"

    homeButton.id = "home"
    homeButton.classList.add("btn");
    homeButton.textContent = "Home";

    menuButton.id = "menu"
    menuButton.classList.add("btn");
    menuButton.textContent ="Menu"

    contactButton.id = "contact";
    contactButton.classList.add("btn");
    contactButton.textContent = "Contact Us";

    buttonContainer.classList.add("btn-container");

    
    nav.appendChild(header);
    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);
    nav.appendChild(buttonContainer);

    return nav

}

export default navigation;