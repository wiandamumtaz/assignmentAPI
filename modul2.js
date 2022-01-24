const { request, response } = require("express")
let express = require("express")
let app = express()

//SOAL CELCIUS
app.get("/ccelcius/:celcius" , (request,response) =>{
    let c = request.params.celcius
    let k = null
    let r = null
    let f = null

    k = c+273
    r = c*4/5
    f = 9/5*c+32

    return response.json({
        message : `Kelvin = ${k}
                   Reamur = ${r}
                   Fahrenhait = ${f}`
    })
})

//SOAL 2
app.get("/ckelvin/:kelvin" , (request,response) =>{
    let k = request.params.kelvin
    let c = null
    let r = null
    let f = null

    c = k-273
    r = 4/5*(k-273)
    f = 9/5*(k-273)+32

    return response.json({
        message : `Celcius = ${c}
                   Reamur = ${r}
                   Fahrenhait = ${f}`
    })
})

//SOAL 3
app.get("/creamur/:reamur" , (request,response) =>{
    let r = request.params.reamur
    let c = null
    let k = null
    let f = null

    c = (5/4)*r
    k = c+273
    f = (9/4)*r+32

    return response.json({
        message : `Celcius = ${c}
                   Kelvin = ${k}
                   Fahrenhait = ${f}`
    })
})

//SOAL 4
app.get("/cfahrenheit/:fahrenheit" , (request,response) =>{
    let f = request.params.fahrenheit
    let c = null
    let k = null
    let r = null

    c = 5/9*(f-32)
    k = 5/9*(f-32)+273
    r = 4/9*(f-32)

    return response.json({
        message : `Celcius = ${c}
                   Kelvin = ${k}
                   Reamur = ${r}`
    })
})
app.listen(8001,() => {
    console.log(`server run on post 8001`);
})
