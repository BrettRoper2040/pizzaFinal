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
    this.size = 5;
    this.sauce = [];
    this.cheese = [];
    this.toppings = [];
    this.finish = [];
    this.cost = 0;
  }

  Pizza.prototype.Price = function () {
    this.cost = this.size;

    if(this.sauce.length > 1)
    {
        this.cost += (.5 * (this.sauce.length -1))
    }
    if(this.cheese.length > 2)
    {
        this.cost += (.25 * (this.cheese.length -2))
    }
    if(this.toppings.length > 3)
    {
        this.cost += (1 * (this.toppings.length -3))
    }
    return this.cost;
  }

let OrderUP = new Order();
let x = 1;
window.addEventListener("load", main);

function main()
{
    const startOrder = document.getElementById("startOrder");
    const pizzaNumber = document.getElementById("pizzaNumber");
    const header = document.getElementById("header");
    let startElements = document.getElementsByClassName("start");
    let makelineElements = document.getElementsByClassName("makeline");
    const ingedientsList = document.getElementById("ingredientsList");
    const finishPizza = document.getElementById("finish");
    const priceDisplay = document.getElementById("price");
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
        currentPizza = OrderUP.pizza[x];    
    });
 //this thing is the coolest thing I've ever coded. Basically it goes through all of the elements and adds the same event listener, so I don't have to write it 60 billion times
    makelineElements.forEach((element) => {
        element.addEventListener("click", (event) => {
            ingedientsList.innerText += "" + event.target.innerText + " ";
            if(event.target.classList.contains("sauces"))
        {
                currentPizza.sauce.push(event.target.innerText);
            }
            else if(event.target.classList.contains("cheeses"))
        {
                currentPizza.cheese.push(event.target.innerText);
            }
            else if(event.target.classList.contains("toppings"))
            {
                    currentPizza.toppings.push(event.target.innerText);
                }

                else if(event.target.classList.contains("garnish"))
                {
                        currentPizza.finish.push(event.target.innerText);
                    }
                    else if(event.target.classList.contains("size"))
                    {
                            currentPizza.size = (parseInt(event.target.id));
                        }
        });
      });
      finishPizza.addEventListener("click", () => {
        console.log(currentPizza.Price());
        console.log(parseFloat(priceDisplay.innerText));
        console.log((parseFloat(priceDisplay.innerText) != NaN));
          if(isNaN(parseFloat(priceDisplay.innerText)))
          {
            priceDisplay.innerText = (currentPizza.Price());
          }
          else
          {
            priceDisplay.innerText = parseFloat(priceDisplay.innerText) + (currentPizza.Price());
          }
            x = x+1
            ingedientsList.innerText = "";
            console.log(OrderUP)
            if(x < OrderUP.pizzaNumber)
            {
            currentPizza = OrderUP[x]
            }   
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