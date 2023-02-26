function Order() {
    this.pizza = {};
    this.pizzaNumber = 0;
  }
  
  Order.prototype.addPizza = function (pizza) {
    pizza.id = this.assignNum();
    this.pizza[pizza.id] = pizza;
  };
  
  Order.prototype.assignNum = function () {
    this.pizzaNumber += 1;
    return this.pizzaNumber;
  };

  function Pizza() {
    this.size = 0;
    this.sauce = [];
    this.cheese = [];
    this.toppings = [];
    this.finish = [];
    this.price = 0;
  }

let OrderUP = new Order();
window.addEventListener("load", main);

function main()
{
    const startOrder = document.getElementById("startOrder");
    const pizzaNumber = document.getElementById("pizzaNumber");
    const header = document.getElementById("header");
    let startElements = document.getElementsByClassName("start");
    let makelineElements = document.getElementsByClassName("makeline");
    const ingedientsList = document.getElementById("ingredientsList");
    let currentPizza;

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

        for(let i = 0; i < pizzaNumber.value; i++)
        {
            let newPizza = new Pizza();
            OrderUP.addPizza(newPizza);
        }

        console.log(OrderUP)
        currentPizza = OrderUP.pizza[1];
        console.log(currentPizza);
    

    });

 //this thing is the coolest thing I've ever coded. Basically it goes through all of the elements and adds the same event listener, so I don't have to write it 60 billion times
    makelineElements.forEach((element) => {
        element.addEventListener("click", (event) => {
            ingedientsList.innerText += "" + event.target.innerText + " ";
            console.log(event.target.classList.contains("sauces"))
            if(event.target.classList.contains("sauces"))
        {
                currentPizza.sauce.push(event.target.innerText);
                console.log(currentPizza);
            }
            else if(event.target.classList.contains("cheeses"))
        {
                currentPizza.cheese.push(event.target.innerText);
                console.log(currentPizza);
            }
            else if(event.target.classList.contains("toppings"))
            {
                    currentPizza.toppings.push(event.target.innerText);
                    console.log(currentPizza);
                }

                else if(event.target.classList.contains("garnish"))
                {
                        currentPizza.finish.push(event.target.innerText);
                        console.log(currentPizza);
                    }


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