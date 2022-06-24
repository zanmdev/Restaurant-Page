function menuPage() {
    const main = document.querySelector(".main");

    const menuDiv = document.createElement("div");

    const test = document.createElement("p");
    test.textContent = "Lorem, IPSUM ITENAONSEALKNBDSUIBDJASDNMASLKMDASBANDJK";

    menuDiv.appendChild(test);

    main.appendChild(menuDiv);
}

export default menuPage;