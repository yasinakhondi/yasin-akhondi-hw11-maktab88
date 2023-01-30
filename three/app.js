const { doesNotMatch } = require("assert")
let fs = require("fs")

fs.exists("text.txt", (doesExist) => {
    if (doesExist) console.log(true);
    else console.log(false);
})