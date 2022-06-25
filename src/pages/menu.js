import returnItems from "../object/menuItem";

function menuPage() {

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("tab-content");
    menuDiv.id = "menu";

    const title = document.createElement("h1");
    title.textContent = "Menu";

    const items = document.createElement("div");
    items.classList.add("items");



   menuDiv.appendChild(title);

    returnItems().forEach(item => {
        const img = document.createElement("img");
        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("description");
        const itemTitle = document.createElement("h3");
        const itemDesc = document.createElement("p");
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
    
        img.src = item.image;
        itemTitle.textContent = item.name;
        itemDesc.textContent = item.Desc;

        itemDiv.appendChild(img);
        descriptionDiv.appendChild(itemTitle);
        descriptionDiv.appendChild(itemDesc);
        itemDiv.appendChild(descriptionDiv);
    
        items.appendChild(itemDiv);
        
        
    });

    menuDiv.appendChild(items);

    return menuDiv;
}

export default menuPage;