lfunction show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let modified_magicians: string[] = [];
    for (let magician of magicians) {
        modified_magicians.push(`the Great ${magician}`);
    }
    return modified_magicians;
}

// Original array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great function with a copy of the magician_names array
let great_magicians: string[] = make_great([...magician_names]);

// Call show_magicians to show the original list
console.log("Original Magicians:");
show_magicians(magician_names);

// Call show_magicians to show the modified list with "the Great" added
console.log("\nModified Magicians:");
show_magicians(great_magicians);
