let fs = require("fs")

fs.writeFile("second-text.txt", "maktab-88", (err) => {
    if (err) return console.log(err);
})