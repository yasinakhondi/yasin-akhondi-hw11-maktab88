let fs = require("fs")

fs.writeFile("./text.txt", "Hello World", (err) => {
    fs.appendFile("./text.txt", "\n secend line", (err) => {
    })
})