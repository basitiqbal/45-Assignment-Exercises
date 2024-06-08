let current_users: string[] = ["MoiZ", "bAsit", "faRooq", "DaniSh", "HaMid"];
let new_users: string[] = ["basit", "sarah", "raza", "moiz", "yasir"];
new_users.forEach(newUserName => {
    let lowerCase: string = newUserName.toLocaleLowerCase()
    if (current_users.map(c_user => c_user.toLowerCase().includes(lowerCase))) {
        console.log(`the username ${newUserName} is not avaialable ,Please enter different name.`);

    }
    else
    {
        console.log(`the username ${newUserName} is  avaialable`);
    }
}
)


