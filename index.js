/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/** @type {Item[]} */
const inventory = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

// === Complete the functions below! ===

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
function logNames(items) {
  //iterates over each item in the 'items' array
  items.forEach((item) => {
    //Logs the 'name' property of the current item to the console
    console.log(item.name);
  });
}

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUpperCaseNames(items) {
  return items.map((item) => items.name.toUpperCase());
  /**
   * .map() loops throught each item in the array
   * item.name accesses the name property of each item
   * .upperCase() converts the name to uppercase
   * .map() returns a new array with all names in uppercase
   */
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */

function getItemById(items, id) {
  return items.find((item) => item.id === id);
  // .find() goes through each item in the 'items' array
  // If it fins an item where item.id matches the given 'id', it will return taht item
  // If not match is found, it returns 'undefined'
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name` if found
 */
function getItemPriceByName(items, name) {
  //Loops through each item in the array
  for (const item of items) {
    //Checks if the current item's name matches the one we're looking for
    if (item.name === name) {
      // If we find a match, return the price of the item
      return item.price;
    }
  }
  //If no items witht the matching name is found, return undefined
}

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items) {
  // Use the 'filter' method to create a new array with only items that match the given category
  return items.filter((item) => item.category === category);
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  return items.reduce((total, item) => total + item.quantity, 0);
  // .reduce() iterates over the 'items' array and accumulates the total quanity
  // 'total' starts at 0 (the initial value)
  // On each iteration, 'item.quantity' is added to 'total'.
  // Finally, it returns the total sum of all 'quantity' values.
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function getTotalPrice(items) {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
  // reduce() iterates over the 'items' array and accumulates the total cost
  // 'total' starts at 0 (the initial value)
  //On each iteration
  //'item.quantity * item.price' calculates the cost for the current items
  // this cost is added to 'total' updating the sum
  //Finally, it returns the total cost of all items
}

/**
 * DEFINITIONS
 * map() method creates a new array
 * filter() method creates a new array containing only elements that satisfy a given condition
 * find() method returns the first element in an array that matches a given condition
 * reduce() method processes each element in an array and reduces it to a single value
 * forEach() method executes a provided function once for each element in an array. Unlike map() donesnt provide a new array
 *
 * USE return when you want to store the result in a variable or use the result somewhere else in your code
 * for example in map(), filter(), reduce()
 *
 * USE console.log() when you want to display info to console, when debugging and need to check values
 *
 * map() and filter() creates a new array
 * find() reduce() and forEach() do not create new arrays
 */

// === READ BUT DO NOT CHANGE THE CODE BELOW ===

console.log("Welcome! We carry the following items:");
logNames(inventory);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(inventory));

console.log(`In total, we have ${countItems(inventory)} items in stock.`);

const totalCost = getTotalPrice(inventory);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(inventory, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(inventory, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(inventory, category));
