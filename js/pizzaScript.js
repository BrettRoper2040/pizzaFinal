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

 let list;

    makelineElements.forEach((element) => {
        element.addEventListener("click", (event) => {
           



            //ingedientsList.innerText += "" + event.target.innerText + " ";
            if(event.target.classList.contains("sauces"))
        {
          list = document.getElementById("saucesList");
                currentPizza.sauce.push(event.target.innerText);
            }
            else if(event.target.classList.contains("cheeses"))
        {
          list = document.getElementById("cheesesList");
                currentPizza.cheese.push(event.target.innerText);
            }
            else if(event.target.classList.contains("toppings"))
            {
              list = document.getElementById("toppingsList");
                    currentPizza.toppings.push(event.target.innerText);
                }

                else if(event.target.classList.contains("garnish"))
                {
                  //list = document.getElementById("saucesList");
                        //currentPizza.finish.push(event.target.innerText);
                    }
                    else if(event.target.classList.contains("size"))
                    {
                      list = document.getElementById("sizeText");
                      list.removeChild(list.firstElementChild);
                            currentPizza.size = (parseInt(event.target.id));
                        }
                        let li = document.createElement("li");
          li.innerText = event.target.innerText;
          list.appendChild(li);
        });
      });
      finishPizza.addEventListener("click", () => {
          if(isNaN(parseFloat(priceDisplay.innerText)))
          {
            priceDisplay.innerText = (currentPizza.Price());
          }
          else
          {
            priceDisplay.innerText = parseFloat(priceDisplay.innerText) + (currentPizza.Price());
          }
            x = x+1

            console.log(OrderUP)
            if(x < OrderUP.pizzaNumber)
            {
            currentPizza = OrderUP[x]
            Emptier(document.getElementById("saucesList"));
            Emptier(document.getElementById("cheesesList"));
            Emptier(document.getElementById("toppingsList"));
            Emptier(document.getElementById("sizeText"));
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

function Emptier(list) {
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  return list;
}