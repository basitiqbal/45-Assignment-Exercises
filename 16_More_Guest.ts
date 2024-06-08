//making guest list array
let guestList: string[] = ["Moiz", "Farooq", "Danish"];

let dontCame=guestList[0];// not came equal to 0 index
console.log(dontCame,`Not Came;~`);
 
guestList.splice(0,1,"Abdullah");// add or remove from guest list array
console.log("\nGreat news! I found a bigger dinner table!");
guestList.unshift("Jamal");// add new  begining of guest list 
// add a new value ending array
guestList.push("Hamid");
//adding middle index of array

let middleIndex : number= Math.floor(guestList.length/2);
//adding new guest in the middle of array
guestList.splice(middleIndex,1,"Haris");
console.log("\n\t -:Updated List of Guest are Here:-\n");
guestList.forEach(oneguest=>console.log(`Dear ${oneguest},  would like to invite you to dinner. It would be an honor to have your company.`));

// Simulate not enough space for all guests
console.log("\nUnfortunately, we can only invite two people for dinner.");