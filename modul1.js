const { response, request } = require("express")
let express = require("express")
let app = express()

//SOAL 1
app.get("/kubus/:sisi", (request,response)=> { 
    let sisi = request.params.sisi
    let volume = null

    volume = sisi*sisi*sisi

    return response.json({
        message : `volume kubus adalah ${volume}`
    })

})

//SOAL 2
app.get("/tabung/:jari/:tinggi", (request,response) =>{
    let jari = request.params.jari
    let tinggi = request.params.tinggi
    let phi = 3.14;
    
    
    let volume = null
    volume = phi*(jari*jari)*tinggi
    return response.json({
        message : `volume tabung adalah ${volume}`
    })

})

//SOAL 3
app.get("/kerucut/:jari/:tinggi", (request,response) => {
    let jari = request.params.jari
    let tinggi = request.params.tinggi
    phi = 3.14;

    let volume = null
    volume = 1/3*phi*jari*jari*tinggi
    return response.json({
        message : `volume kerucut adalah ${volume}`
    })
})

//SOAL 4
app.get("/balok/:tinggi/:lebar/:panjang", (request,response) => {
    let tinggi = request.params.tinggi
    let lebar = request.params.lebar
    let panjang = request.params.panjang
    let volume = null

    volume = tinggi*lebar*panjang
    return response.json({
        message : `volume balok adalah ${volume}`
    })
})
app.listen(8001,() => {
    console.log(`server run on post 8001`);
})