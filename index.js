const readline = require('readline')
const currency = require('currency-formatter')

var input = readline.createInterface(process.stdin, process.stdout)

const hitungOngkir = ()=> {
  input.question('Input Jarak (km) : ', (jarak)=> {
    if(jarak <= 2){
      var ongkir = 8000
    } else {
      ongkir = jarak * 5000
    }
    
    biayaLayanan = ongkir * 0.045
    hasil = console.log("Total Ongkos Kirim : "+ currency.format(ongkir,{code: 'IDR'})
      +"\nBiaya Layanan : "+ currency.format(biayaLayanan,{code: 'IDR'}))
    
    return hasil
  })
}

hitungOngkir()
