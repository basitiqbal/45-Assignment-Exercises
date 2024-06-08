interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary additional properties
}

function store_car_info(manufacturer: string, model: string, ...args: { [key: string]: any }[]): Car {
    let car_info: Car = {
        manufacturer: manufacturer,
        model: model
    };

    // Adding additional properties
    args.forEach(arg => {
        for (let key in arg) {
            car_info[key] = arg[key];
        }
    });

    return car_info;
}

// Call the function with required information and additional properties
let car_info = store_car_info("Toyota", "Camry", { color: "Red" }, { features: ["Navigation", "Sunroof"] });

// Print the object returned by the function
console.log(car_info);
