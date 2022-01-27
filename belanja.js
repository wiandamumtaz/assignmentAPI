const express = require ("express")
const app = express()
app.use(express.json())

app.post("/belanja", (request,response)=>{
    let data = request.body.belanja
    totalperbarang = 0
    for (let i = 0; i < data.length; i++) {
        totalperbarang = data[i].price*data[i].qty
        if (qty[1] <= 5 ) {
            totalperbarang = totalperbarang[1]*0.3
        }
        if(qty[2] <= 10) {
            totalperbarang = totalperbarang[2]*0.2
        }
        if (qty[3] <= 15) {
            totalperbarang = totalperbarang[3]*0.1
        }
    }
    
    return response.json({
        
    })
})

app.listen(8001, () => {
    console.log(`Server run on port 8001`);
})