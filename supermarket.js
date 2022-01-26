// load library express
const { request, response } = require("express")
let express = require("express")

//inisiasi objek baru dari express
let app = express()

//end point untuk supermarket
app.post("/supermarket", (request,response) => {
    let 
})

app.listen(8001,() => {
    console.log(`server run on post 8001`);
})