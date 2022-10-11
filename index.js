const readline = require('readline')
const currency = require('currency-formatter')

var rl = readline.createInterface(process.stdin, process.stdout)

const hitungOngkir = ()=> {
  rl.question('Input Jarak (km) : ', (jarak)=> {
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

const loop = ()=> {
  let run = true
  while(run) {
    try{
      hitungOngkir()
    }catch(error){
      run = false
      console.log('exit')
    }
  }
  rl.close()
}

const a = (b) => {
  return new Promise((resolve, reject)=> {
    try{
      if (jarak.toLowerCase() === 'q') {
        throw new Error('quit')
      }
      resolve(b)
    } catch (error) {
      reject(error)
    }
  })
}


const app = async ()=> {
  try {
    await a(loop())    
  } catch(err) { 
    console.log(err.message)
  }
}

app()
