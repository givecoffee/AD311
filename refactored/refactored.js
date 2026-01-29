function checkAccess(loggedIn) {
    // switching var -> let because accessLevel gets reassigned
    let accessLevel;

    // let instead of var because userRole can be reassigned
    let userRole;

    if (loggedIn) {
        // use const instead of var because messages are assigned once and never change
        const message = "User is logged in.";
        console.log(message);
        if (userRole === "admin") {
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else {
        // replacing const here because variable is block-scoped
        var message = "User not logged in.";
        console.log(message);
        accessLevel = "none";
    }
    return accessLevel;
}

// using let for loop variable, increments (which is reassigned) each loop
for (let i = 0; i < 3; i++) {
    console.log("Attempt", i);
    // using const because loggedIn is assigned once per iteration and never changes
    var loggedIn = Math.random() >= 0.5;
    checkAccess(loggedIn);
    console.log("Access Level:", checkAccess(loggedIn));
}