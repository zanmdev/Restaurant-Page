function navigation() {

    const nav = document.createElement("nav");
    nav.id = "navigation";

    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const contactButton = document.createElement("button");

    homeButton.id = "home"
    homeButton.classList.add("btn");
    homeButton.textContent = "Home";

    menuButton.id = "menu"
    menuButton.classList.add("btn");
    menuButton.textContent ="Menu"

    contactButton.id = "contact";
    contactButton.classList.add("btn");
    contactButton.textContent = "Contact Us";

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav

}

export default navigation;