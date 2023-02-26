window.addEventListener("load", main);

function main()
{
    const startOrder = document.getElementById("startOrder");
    const pizzaNumber = document.getElementById("pizzaNumber");

    startOrder.addEventListener("click", () => {console.log(`You ordered ${pizzaNumber.value} pizzas`)});
}