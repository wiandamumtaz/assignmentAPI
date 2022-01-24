// load library express
const { request, response } = require("express")
let express = require("express")

//inisiasi objek baru dari express
let app = express()

//endpoint pertama kita 
app.get("/test", (request,response) => {
    let kata = `ya gitudeh terserah`
    return response.json({ // adalah format respon yang bersifat general
        message: kata,
        nama: "choihyunsuk",
        age: 23,
        role : "pacarku"
    })
})
//endpoint kedua hitung BMI
// request data: tinggi,berat
//response data: nilai BMI dan status BMI

//seting agar dapat membaca data request dg
//format json
app.use(express.json())
app.post("/bmi",(request,response) => {
    //tampung tinggi dan berat 
    let tinggi = request.body.tinggi
    let berat = request.body.berat
    let bmi = berat / (tinggi*tinggi)
    let status = null
    if (bmi<18.5) {
        status = `gizi buruh`
    }else if (bmi >= 18.5 && bmi < 25) {
        status = `ideal`
    }else if (bmi >= 25 && bmi < 30) {
        status = `kelebihan berat badan`
    }else if (bmi >= 30 ) {
        status = `obesitas`
    }
    return response.json({
        nilai : bmi,
        status : status
    })
})

app.listen(8000,() => {
    console.log(`server run on post 8000`);
})

//endpoint ketiga (request with GET Method)
app.get("/profile/:nama/:usia",(request,response) => {
    let nama = request.params.nama
    let usia = request.params.usia

    let status = null
    if (usia < 10) {
        status = `bocil`
    }else if (usia >=10 && usia <=20) {
        status = `Remaja`
    }else if (usia >=20 && usia <=50) {
        status = `Dewasa`
    }else if (usia >= 50) {
        status = `Tua`
    }

    return response.json({
        message : `Saya ${nama} adalah ${status}`
    })
})
app.listen(8001,() => {
    console.log(`server run on post 8001`);
})