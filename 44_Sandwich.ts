function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with a different number of arguments each time
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss cheese");
make_sandwich("Peanut butter", "Jelly");
