 // ini contoh comment
 console.log("Pak lutfi juga kece"); // semua di abaikan

 // variable itu adalah wadah untuk kita simpan value
 /** 
  * 1. var
  * 2. let
  * 3. const
 */

 // ini untuk Var
 // var firstName = "febrian"
 // firstName = "lutfi" // ini re-assign, (bisa)
 // var firstName = "febrian" // re-declare juga bisa
 // var scope global
 // hoisting di var itu bisa


 // ini untuk let
 let address = "Karawang"
 address = "Jakarta" // ini re-assign, (bisa)
 // let address /// ini tidak bisa re-declare
 // local, tidak bisa diakses diluar curly bracket
 // hoisting tidak bisa!
 // city = "jakarta"
 // let city


 // ini untuk const
 const hobby = "fun football"
 // hobby = "tennis" // ini tidak bisa di re-assgin
 // const hobby // inin tidak bisa di declare ulang

 // age = 25
 // const age  = 20 // ini tidak bisa hoisting
 // const scope itu local

 // if (true) {
 //     let age = 20
 // }
 // console.log(age); //
 
 /** 
  * Karakteristik
  * 1. re-assign, memasukan kembali value
  * 2. re-declare, membuat variable yang sama 
  * 3. scope, 
  * 4. hoisting, pengangkatan
 */

 let firstName = "febrian"
 let first_name = "amjad"
 let FirstName = "Lutfi"


 console.log(firstName, "==> ini yang line 67");
 console.log(FirstName, "==> ini yang line 70");
 
 let myHobbies2 = "fun football, tennis"

 let = ""

 let favoriteColor = "fortuner"


 // ini cara cek tipe data
//  https://www.w3schools.com/js/js_typeof.asp
// let myAge = 20
// console.log(typeof myAge);

 // ini tipe data number
 let myAge = 20
 console.log(typeof myAge);


 /**
  * Penjumlah  ( + )
  * Pengurangan ( - )
  * Perkalian ( * )
  * Pembagian ( / )
  * Modulo / Modulus ( % )
  */


let moneyOne = 20000
let moneyTwo = 100000

let hasilPenjumlahan = moneyOne + moneyTwo
console.log(hasilPenjumlahan);

let beliMakan =  moneyTwo - 40000
console.log(beliMakan);

let timesSaving = moneyTwo * 3
console.log(timesSaving);

let divideMoney = moneyTwo / 5
console.log(divideMoney);


let modulo = 5 % 2
console.log(modulo);



let myCar = "fortuner"
console.log(myCar);

let nickName = "febrian"
let middleName = "aditya"

// let fullName = nickName + " " + middleName
let fullName = `${nickName} ${middleName}`
console.log(fullName);

let stringOne = "febrian"
let numberOne = 22


let result = stringOne * numberOne

// console.log(typeof result);
console.log(result);

console.log(typeof result, "==> INI LINE 123");



/**
 * Define string itu ada 3 cara
 * 1. double quotes
 * 2. single quotes
 * 3. backtic
 */



// tipe data primitif
/**
 * string
 * number
 * boolean = true dan false
 * undefined // falsy
 * null // falsy
 */

/**
 * List falsy
 * null
 * undefined
 * 0
 */

let isTrue = false


// if (1) {
//     console.log("coba di cek"); 
// }
// true = truthy
// false = falsy
console.log(typeof isTrue);

// let cekValue

let isLife = null
console.log(isLife);



// let myHobbies = [2, 4, 6, 8] // ini array pakai=nya square bracket ([])
// // array punya index
// /**
//  * index selalu dimulain dari 0
//  * sedangkan length itu dimulai dari 1
//  * ,
//  */
// console.log(myHobbies.length, "==> ini line 177");
let favColors = ["blue", "red", "black", "green", "pink"]
console.log(favColors[0], " ==> INI LINE 180");
/**
 * score
 * umur
 * nama
 * alamat
 * kelas
 * isPassed
 */
let student = {
    nama: "amzad",
    umur: 43,
    alamat: "california",
    kelas: "B",
    isPassed: true,
    favColors: ["red", "black"],
    jenisKendaran: {
        namaKendaraan: "Toyota",
        tahun: 2020
    }

}

let cekTahunKendaraan =  student.favColors[1]
console.log(cekTahunKendaraan, "--> ini final");

/**
 * ini ada dua cara akses
 * pakai "."
 * pakai ["<nama_key nya>"]
 */



let inputUser = 2


if (typeof inputUser === "Number") {
    console.log("bener inputannya");
} else {
    console.log("bukan tipe data number");
    
}


let numberCek = 1
// console.log(numberCek);


// let resultThree = numberCek += 1
// console.log(resultThree);

let resulFour = --numberCek
console.log(resulFour);


// let resultOne = numberCek++
// // let re
// console.log(resultOne, "==> INI FINAL NUNMBER");

// increment itu penjumlahan +1

// for (let index = 0; index < array.length; index ++) {
//     const element = array[index];
    
// }

// console.log((moneyOne + moneyTwo));

