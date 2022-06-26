function contact() {

    const element = document.createElement("div");
    const mapDiv = document.createElement("div");
    const addressDesc = document.createElement("div");
    const title = document.createElement("h1");
    const address = document.createElement("h3");
    const subAddress = document.createElement("p");
    const phoneNum = document.createElement("p");
    const email = document.createElement("p");
    const map = document.createElement("iframe");



    element.id ="contact";
    element.classList.add("tab-content");
    addressDesc.classList.add("address-container");
    title.textContent = "Contact Us";
    
    address.textContent = "123 Fake Street";
    subAddress.textContent = "Oak Lawn, IL 60453, USA";
    phoneNum.textContent = "P: 999-999-9999";
    email.textContent = "E: fakeEmail@notreal.com";

    map.classList.add("map");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.781748875347!2d-87.75088408444928!3d41.72522817923468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3bd3bb6db18d%3A0x6582323d7a833d16!2s123%20Fake%20Street%2C%20Oak%20Lawn%2C%20IL%2060453%2C%20USA!5e0!3m2!1sen!2sca!4v1656211512795!5m2!1sen!2sca"
    
    mapDiv.classList.add("map-container");

    element.appendChild(title);
    mapDiv.appendChild(map);

    addressDesc.appendChild(address);
    addressDesc.appendChild(subAddress);
    addressDesc.appendChild(phoneNum);
    addressDesc.appendChild(email);

    mapDiv.appendChild(addressDesc);
    element.appendChild(mapDiv);

    return element
}

export default contact;