window.addEventListener("load", main);

function main()
{
    const startOrder = document.getElementById("startOrder");
    const pizzaNumber = document.getElementById("pizzaNumber");
    const header = document.getElementById("header");
    const startElements = document.getElementsByClassName("start");
    const makelineElements = document.getElementsByClassName("makeline");
    console.log(startElements);
    console.log(typeof(startElements));
    console.log(startElements.length);

    startOrder.addEventListener("click", () => {
        header.innerText = ("Welcome to the Mountain Top Pizza Palace Digital Makeline")
        console.log(`You ordered ${pizzaNumber.value} pizzas`)
        Toggler(startElements[0])
        Toggler(makelineElements[0])
    });
}

function Toggler(element) {

    if (element.style.visibility === "visible") {
      element.style.visibility = "collapse";
    } else {
      element.style.visibility = "visible";
    }
}