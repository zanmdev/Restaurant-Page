import burger from "../assets/burger.jpg";
import sushi from "../assets/sushi.jpg";
import bowl from "../assets/bowl.jpg";
import pizza from "../assets/pizza.jpg";

let menuItems = [
    {
        "name":"Burger",
        "Desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Price":"$24.99",
        "image":burger,
    },
    {
        "name":"Sushi",
        "Desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Price":"$15.99",
        "image":sushi
    },
    {
        "name":"Salad Bowl",
        "Desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Price":"$10.99",
        "image":bowl
    },
    {
        "name":"Pizza",
        "Desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        "Price":"$19.99",
        "image":pizza
    },
    
]

function returnItems() {
    return menuItems;
}

export default returnItems;