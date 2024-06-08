function describe_city(city: string, country: string = "Default Country"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Jaddah", "Saudia Arab");
describe_city("Lahore"); // Using the default country
