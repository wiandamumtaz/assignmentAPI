// load library express
const { request, response } = require("express")
let express = require("express")

//inisiasi objek baru dari express
let app = express()

app.post("/ages" ,(request,response) =>{
    //store the rquest data 
    let data = request.body.ages
    let jmlremaja = 0, jmldewasa = 0, jmltua= 0

    for (let i =0;  i< data.length; i++) {
        if (data[i].umur >=12 && data[i].umur <=24) {
            jmlremaja+=1
        }
        if (data[i].umur >=25 && data[i].umur <=55) {
            jmldewasa+=1
        }
        if (data[i].umur >56 ) {
            jmltua+=1
        }
    }
    return response.json({
        "Jumlah_Dewasa" : jmldewasa,
        "Jumlah_Remaja" : jmlremaja,
        "Jumlah_Tua" : jmltua
    })
})
app.listen(8001,() => {
    console.log(`server run on post 8001`);
})