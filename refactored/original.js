

function checkAccess(loggedIn) {
    var accessLevel;
    var userRole;
    if (loggedIn) {
        var message = "User is logged in.";
        console.log(message);
        if (userRole === "admin") {
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else {
        var message = "User not logged in.";
        console.log(message);
        accessLevel = "none";
    }
    return accessLevel;
}

for (var i = 0; i < 3; i++) {
    console.log("Attempt", i);
    var loggedIn = Math.random() >= 0.5;
    checkAccess(loggedIn);
    console.log("Access Level:", checkAccess(loggedIn));
}

