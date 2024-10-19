// materi 1
let nama = "fandi";
let usia = 20;
let tinggi = 20;
let berat;
let warna = null;

berat = 65;

if (warna == null) {
  warna = "tidak ada";
} else {
  warna = "ada";
}

let saldoAwal = 10000;
let saldoTambahan = 1000000;
const hutang = 20000000;
const saldoAkhir = saldoAwal + saldoTambahan - hutang;

const x = 20;
const y = 30;
const z = x / y;

alert(`nilai x = ${x} nilai y = ${y} maka nilai z dalah ${z}`);
alert(
  `nama saya adalah ${nama} usa saya ${usia} tinggi saya ${tinggi} berat saya ${berat}kg warna ${warna}`
);

alert(
  `saldo awal saya adalah ${saldoAwal} dan saldo akhir ssaya adalah ${saldoAkhir} jadi total saldo saya adalah ${saldoAkhir}`
);

// materi 2
let namaGuru = ["budi", "bunga", "ayu"];
namaGuru.push("dea", "fikri");
namaGuru.shift();
namaGuru.pop();
alert(namaGuru);

// looping

const namaGuru1 = ["dea", "fikri", "bayu"];
for (let i = 0; i <= namaGuru1.length; i++) {
  console.log(namaGuru1[i]);
}
