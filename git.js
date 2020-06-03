let fetch = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('Andi')
  }, 3000)
});

async function getData() {
  let nama = 'budi'
  try {
    nama = await fetch
  } catch (error) {
    alert(error)
  }
  console.log(nama);
  lain()
}

function lain() {
  console.log('halo');

}
getData()
