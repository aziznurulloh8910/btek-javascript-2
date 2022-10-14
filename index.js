const readline = require('readline')
const currency = require('currency-formatter')

var rl = readline.createInterface(process.stdin, process.stdout)

const hitungOngkir = ()=> {
  return new Promise((resolve, reject) => {
    rl.question('\nInput Jarak (km) : ', (jarak)=> {
      try {
        jarak = parseInt(jarak)
        
        if(!jarak){
          reject()
        }

        if(jarak <= 2){
          var ongkir = 8000
        } else {
          ongkir = jarak * 5000
        }
        
        biayaLayanan = ongkir * 0.045
        console.log("Total Ongkos Kirim : "+ currency.format(ongkir,{code: 'IDR'})
          +"\nBiaya Layanan : "+ currency.format(biayaLayanan,{code: 'IDR'}) + '\nInput Huruf Untuk Keluar')
        
        resolve(true)
      } catch (error) {

      }
    })
  })
}

const app = async() => {
  let run = true

  while(run) {
    try {
      const data = await hitungOngkir()
      run = data
    } catch(error) {
      console.log('Thanks')
      run = false
      rl.close()
    }
  }
}

app()
