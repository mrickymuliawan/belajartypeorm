// class bluprint
// new Murid(as)

let murid = {
  name: 'budi',
  nilai: [10, 20, 30],
  belajar: function () {
    this.nilai.forEach(function (element) {
      console.log(this);
      // console.log(element);

    });
  }
}
// murid.belajar();

class Guru {
  name
  address
  static is_graduated = true
  constructor(name) {
    this.name = name
  }
  static getDataGuru() {
    return 'databaru'
  }
}

let aji = new Guru('aji')
let tatang = new Guru('tatang')

let data = DB.getDataGuru()
console.log(Guru.is_graduated);

