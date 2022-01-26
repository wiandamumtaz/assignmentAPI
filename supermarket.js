// load library express
const { request, response } = require("express")
let express = require("express")

//inisiasi objek baru dari express
let app = express()

app.use(express.json())
//end point untuk supermarket
app.post("/supermarket", (request,response) => {
    let data = request.body.totalh
    let total = 0;
    for (let i = 0; i< data.length; i++) {
        total += data[i].harga * data[i].jumlah
    }
    let ppn = (total *10)/100
    total += ppn 
    
    return response.json({
        "total harga =" : total
    })
})

app.listen(8001,() => {
    console.log(`server run on post 8001`);
})