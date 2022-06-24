function home() {



    const element = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h1");
    const description = document.createElement("p");
    img.src = "https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdHVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    img.alt = "home-img";

    title.textContent = "Restaurant";
    
    description.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque consequuntur nulla voluptates, porro exercitationem laborum qui possimus suscipit et dignissimos eligendi praesentium assumenda rerum doloremque";
    
    element.appendChild(img);
    element.appendChild(title);
    element.appendChild(description);
    const main = document.querySelector(".main");

    return element
}

export default home