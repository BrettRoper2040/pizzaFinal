Customer will be asked how many pizzas of each size they want
A button will then create the objects as needed, then display all of the buttons for the different toppings
Each time the button is pressed it will add it to the list of toppings which will be displayed on the side
After finishing the pizza the user clicks next pizza, which saves the pizza and calculates its price
Upon finishing all pizzas a final price is calculated

pizzas will need size, sauces, cheeses, toppings, garnishes, and price attributes
price calculation will be handled by a method since it only ever needs to be run on the pizza object
a main function will add all of the event listeners for the various buttons
a secondary function will actually add it to the relevant pizza

large pizza costs 12 dollars, medium 10, and personal 6. 
First sauce is free, after that its .50 cents per
First two cheeses are free, after that its .25 cents per
First three toppings are free, after that its a dollar per
all garnishes are free 

Testing: Main
Test: Entering in the number of desired pizzas should print out the amount of pizzas ordered in the console
Result: Test passed

Test: After hitting submit, the header will change to "Welcome to the Mountain Top Pizza Palace Digital Makeline"
Result: Test passed

Testing: Toggler
Test: After clicking submit, the submit button will hide itself, then reveal a button that says read sauce
Result: It took several attempts, but after making a modified version of my toggler function, I was able to make it so that I can toggle multiple elements within the html at once.

Testing: Main
Test: A list of ingredients should be created when the user clicks submit, and should add text when the user clicks a button in the makeline class
Result: Once again this one took some time. After researching a bit I found something really helpful- I can convert the results of my document.getElementsbyClassName to an array, and then dynamically create an event listener for clicks on all of those elements. This took much longer, but is also much dryer as well.

Testing Pizza
Test: This should create an number of objects, and then print it out
Result: I was able to reuse some code from the adressbook for this. Test passed. 

Testing Main
Test: Clicking different ingridents should add it to the right spots
Result: After a lot of changes, I was able to get this working. Test Passed

Test: Expand the avalible ingredients to click on to include all classes
Result: Test passed. No errors

Test: Clicking next pizza should total up the price for currentPizza, and then move onto the next pizza
Result: Test passed. Had to change how the price was being calculated since it was doubling the price, and resetting the text was proving a bit difficult, but I got it to work.

Testing: UI functionality
Test: Clicking on the buttons should add the ingreident to the ingredients list- except for the size, which should only be replaced when each item is clicked. 
Result: Works, but the size is added multiple times. Also initally held up by a few things being undefined, but that was just from typos.

Testing: Emptier
Test: Clicking the finish pizza button should reset all of the lists of ingreidents
Result: Test passed. Initially had some problems, but it was due to an improper resetting of currentPizza, not anything to do with the new code itself.

Testing: Main
Test: The header should display what pizza is being worked on currently. 
Result: Test passed

Testing: Final
Test: An output should list to the user what they ordered. 
Result: Test passed. Ended up using keys in order to make the program more efficent, thought that was a lot more complex and time consuming. Good practice though. 
