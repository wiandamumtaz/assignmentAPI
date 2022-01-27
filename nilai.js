const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/nilai",(request,response)=>{
    let data = request.body.school
    let rata = 0, rataSiswa = 0
    let lulus = []
    let tidak_lulus = []

    // for untuk emnghitung rata keseluruhan
    for (let i = 0; i < data.length; i++) {
        rata += data[i].math+data[i].english
    }
    rata = rata/8

    //for untuk menghitung rata@ per siswa
    for (let j = 0; j < data.length; j++) {

        rataSiswa = (data[j].math+data[j].english)/2

        if (rataSiswa>=rata) {
            lulus.push({
                nama : data[j].nama
            })
        } else if(rataSiswa<rata){
            tidak_lulus.push({
                nama : data[j].nama
            })
        }
        
    }
    return response.json({
        lulus,
        tidak_lulus,
        Rata_rata : `${rata}`
    })
})


app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})