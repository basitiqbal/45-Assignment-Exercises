let alien_color: string = 'green';

if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else if (alien_color != 'green') {
    console.log("You just earned 10 points for shooting the alien.");
}
//Version that runs the else block (alien color is not green):

alien_color = 'red';

if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else if (alien_color != 'green') {
    console.log("You just earned 10 points for shooting the alien.");
}
