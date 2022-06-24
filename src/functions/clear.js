function clear () {
    const main = document.querySelector(".main");

    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
}

export default clear;