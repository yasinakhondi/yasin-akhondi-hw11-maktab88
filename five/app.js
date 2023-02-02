try {
    let fs = require("fs");

    let data = fs.readFileSync("./user-data.json");

    let userData = JSON.parse(data)

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].age >= 18) {
            console.log(userData[i]);
        }
    }
} catch (error) {
    console.log(error);
}