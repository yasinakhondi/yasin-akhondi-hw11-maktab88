let fs = require("fs");

let data = fs.readFileSync("./user-data.json");

let userData = JSON.parse(data)

// console.log(userData);


for (let i = 0; i < userData.length; i++) {
    if (userData[i].age >= 18) {
        console.log(userData[i].age);
    }
}