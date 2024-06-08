// Store places to visit in an array
let placesToVisit: string[] = ["Pakistan", "Canada", "Maldives", "Arab"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original order (still intact):", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original order (still intact):", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort to change the array so it’s stored in reverse alphabetical order

console.log("Sorted in reverse alphabetical order:", placesToVisit.reverse());
