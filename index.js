// Simple Store Inventory
console.log("<-----task 1------>");

// Store items array
const storeItems = [
  { name: "Laptop", price: 850, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Mouse", price: 45, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Webcam", price: 60, inStock: false }
];

// 1. Show all items
console.log("Store Inventory:");
for (let item of storeItems) {
  console.log(item.name + " - $" + item.price + " - In Stock: " + item.inStock);
}

// 2. Calculate total value of all items
console.log("<-----task 2------>");

let totalValue = 0;
for (let item of storeItems) {
    
  totalValue += item.price;
}
console.log("Total Value of Store Items: $" + totalValue);

// 3. Check if a specific item is in store
console.log("<-----task 3------>");
let searchItem = "Mouse";
let found = false;

for (let item of storeItems) {
  if (item.name === searchItem) {
    found = true;
    console.log(searchItem + " is available? " + item.inStock);
  }
}

if (!found) {
  console.log(searchItem + " not found in store.");
}