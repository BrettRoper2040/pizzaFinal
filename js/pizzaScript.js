window.addEventListener("load", main);

function main()
{
    const startOrder = document.getElementById("startOrder");
    const pizzaNumber = document.getElementById("pizzaNumber");
    const header = document.getElementById("header");
    let startElements = document.getElementsByClassName("start");
    let makelineElements = document.getElementsByClassName("makeline");
    const ingedientsList = document.getElementById("ingredientsList")

        //This should turn nodelists into arrrays according to stack overflow
        makelineElements = Array.from(makelineElements);
        startElements = Array.from(startElements);

    startOrder.addEventListener("click", () => {
        header.innerText = ("Welcome to the Mountain Top Pizza Palace Digital Makeline")
        console.log(`You ordered ${pizzaNumber.value} pizzas`)
        Toggler(startElements)
        Toggler(startElements)
        //Why does running this twice make it work? Shouldnt they all already have the visible style?
        Toggler(makelineElements)
    });



    makelineElements.forEach((element) => {
        element.addEventListener("click", (event) => {
            ingedientsList.innerText += event.target.innerText;
        });
      });
}

function Toggler(element) {
    for (let i = 0; i < element.length; i++) {
    if (element[i].style.visibility === "visible") {
      element[i].style.visibility = "collapse";
    } else {
      element[i].style.visibility = "visible";
    }
    }
}