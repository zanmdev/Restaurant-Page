function home() {



    const element = document.createElement("div");
    element.id ="home";
    element.classList.add("tab-content");

    const title = document.createElement("h1");
    const description = document.createElement("p");


    title.textContent = "Restaurant";
    
    description.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequuntur nulla voluptates, porro exercitationem laborum qui possimus suscipit et dignissimos eligendi praesentium assumenda rerum";
    

    element.appendChild(title);
    element.appendChild(description);
    const main = document.querySelector(".main");

    return element
}

export default home