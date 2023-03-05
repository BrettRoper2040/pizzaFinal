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

Order.prototype.finish = function () {
  let string;
  let totalprice = 0.0;
  string = `You ordered ${this.pizzaNumber} pizzas.`;
  //for all the pizzas
  for (let i = 1; i <= this.pizzaNumber; i++) {
    let pizza = this.pizza[i];
    string += `\n Pizza ${i} \n \n`;

    const pizzaKeys = Object.keys(pizza);
    //for each key in pizza
    pizzaKeys.forEach(function (key) {
      string += `\n ${key}: \n`;
      console.log(pizza[key]);
      if (key === "size") {
        string += `\n ${pizza[key]}`;
      } else if (key === "cost") {
        string += `$${pizza.Price()}`;
        totalprice += pizza.Price();
      } else {
        //for each item in that key of that pizza
        for (let i = 0; i < pizza[key].length; i++) {
          string += `\n ${pizza[key][i]}`;
        }
      }
    });
    string += `\n Your total is ${totalprice} dollars.\n Thank you for dining with us today.`;
    return string;
  }
};

function Pizza() {
  this.size = 0;
  this.sauce = [];
  this.cheese = [];
  this.toppings = [];
  this.cost = 0;
}

Pizza.prototype.Price = function () {
  if (this.sauce.length > 1) {
    this.cost += 0.5 * (this.sauce.length - 1);
  }
  if (this.cheese.length > 2) {
    this.cost += 0.25 * (this.cheese.length - 2);
  }
  if (this.toppings.length > 3) {
    this.cost += 1 * (this.toppings.length - 3);
  }
  return this.cost;
};
//the only true global varibles 

let OrderUP = new Order();
let x = 1;
window.addEventListener("load", main);

function main() {
  //declaring individual elements
  const startOrder = document.getElementById("startOrder");
  const pizzaNumber = document.getElementById("pizzaNumber");
  const header = document.getElementById("header");
  const finishPizza = document.getElementById("finish");
  const priceDisplay = document.getElementById("price");
  const pizzaHead = document.getElementById("dad");
  const output = document.getElementById("output");

  //getting all of the elements in a class
  let startElements = document.getElementsByClassName("start");
  let makelineElements = document.getElementsByClassName(
    "makelineInteractable"
  );
  let makelineElementsNonUser = document.getElementsByClassName(
    "makelineNonInteractable"
  );
  let endElements = document.getElementsByClassName("end");

  //globalish varible
  let currentPizza;

  //turn all of our elements in classes into an array of elements
  makelineElements = Array.from(makelineElements);
  startElements = Array.from(startElements);
  makelineElementsNonUser = Array.from(makelineElementsNonUser);
  endElements = Array.from(endElements);

//When clicked hide the start stuff and reveal the rest
  startOrder.addEventListener("click", () => {
    header.innerText =
      "Welcome to the Mountain Top Pizza Palace Digital Makeline";
    Toggler(startElements);
    Toggler(startElements);
    Toggler(makelineElements);
    Toggler(makelineElementsNonUser);
    for (let i = 0; i < pizzaNumber.value; i++) {
      let newPizza = new Pizza();
      OrderUP.addPizza(newPizza);
    }
    pizzaHead.innerText = `Working on pizza ${x} of ${OrderUP.pizzaNumber}`;
    currentPizza = OrderUP.pizza[x];
  });
  
  //another globalish varible
  let list;

  //this thing is the coolest thing I've ever coded. Basically it goes through all of the elements and adds the same event listener, so I don't have to write it 60 billion times
  //add this event lister to every single item in the makelineElements that the user is supposed to be able to interact with
  makelineElements.forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target.classList.contains("sauces")) {
        list = document.getElementById("saucesList");
        currentPizza.sauce.push(event.target.innerText);
      } else if (event.target.classList.contains("cheeses")) {
        list = document.getElementById("cheesesList");
        currentPizza.cheese.push(event.target.innerText);
      } else if (event.target.classList.contains("toppings")) {
        list = document.getElementById("toppingsList");
        currentPizza.toppings.push(event.target.innerText);
      } else if (event.target.classList.contains("size")) {
        list = document.getElementById("sizeText");
        //this one has a special rule so that you only ever change the size of a pizza, not give multiple pizzas one size
        if (list.hasChildNodes()) {
          list.removeChild(list.children[0]);
        }
        currentPizza.size = event.target.innerText;
        currentPizza.cost = parseInt(event.target.id);
      }
      //adding the ingredient to the right list. 
      let li = document.createElement("li");
      li.innerText = event.target.innerText;
      list.appendChild(li);
    });
  });
  //if there is a price, add to it. if theres not, declare it
  finishPizza.addEventListener("click", () => {
    if (isNaN(parseFloat(priceDisplay.innerText))) {
      priceDisplay.innerText = currentPizza.Price();
    } else {
      priceDisplay.innerText =
        parseFloat(priceDisplay.innerText) + currentPizza.Price();
    }
    //increasing the amount of pizzas worked through
    x = x + 1;

    //if theres more pizzas to work on, empty out the lists. If theres not, hide the makeline stuff and reveal the final things.
    if (x <= OrderUP.pizzaNumber) {
      currentPizza = OrderUP.pizza[x];
      Emptier(document.getElementById("saucesList"));
      Emptier(document.getElementById("cheesesList"));
      Emptier(document.getElementById("toppingsList"));
      Emptier(document.getElementById("sizeText"));
      pizzaHead.innerText = `Working on pizza ${x} of ${OrderUP.pizzaNumber}`;
    } else {
      Toggler(makelineElements);
      Toggler(makelineElementsNonUser);
      Toggler(endElements);
      output.innerText = OrderUP.finish();
    }
  });
}

//simple function for collasping and making visible things. 
function Toggler(element) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].style.visibility === "visible") {
      element[i].style.visibility = "collapse";
    } else {
      element[i].style.visibility = "visible";
    }
  }
}
//simple function for emptying out node lists
function Emptier(list) {
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  return list;
}