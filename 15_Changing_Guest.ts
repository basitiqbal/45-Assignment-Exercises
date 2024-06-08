let guestList : string[]=["Moiz","Farooq","Danish","Mamun"];
let dontCome= guestList[0]; 
console.log(dontCome,`Not Came!!`);
guestList.splice(0,2,"Abdullah");
guestList.forEach(guest =>console.log(`Dear${guest},Would you like to diner to me:-`));