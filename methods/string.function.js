export default function stringMethods() {
       // 1. slice()
       // kegunaan : sebuah function yang berfungsi untuk mengambil bagian dari sebuah string, string yang akan diambil akan dikembalikan dalam bentuk string yang baru. 
       // dimulai dari index start sampai index end - 1 (index end ini bersifa exclude), jika tidak mengisi index end maka string yang akan diambil dimulai dari index start sampai akhir dari string tsb

       // contoh penggunaan :
       console.log(`Slice`)
       let string = "javascript";
       let newString = string.slice(1, 4)
       let newStringNoEnd = string.slice(1)

       console.log(newString)
       console.log(newStringNoEnd)
       console.log(``)
       // expected output: "ava"
       // expected output: "avascript"


       // 2. replace()
       // kegunaan : sebuah function yang berfungsi untuk mengganti value tertentu dalam sebuah string dengan suatu value yang ditentukan

       // contoh penggunaan :
       console.log(`Replace`)
       string = "javascript, dart";
       newString = string.replace('dart', "flutter")

       console.log(newString)
       console.log(``)
       // expected output: "javascript, flutter"


       // 3. toUpperCase()
       // kegunaan : sebuah function yang berfungsi untuk mengganti semua value dalam sebuah string menjadi huruf kapital

       // contoh penggunaan :
       console.log(`To Upper Case`)
       string = "javascript";
       newString = string.toUpperCase()

       console.log(newString)
       // expected output: "JAVASCRIPT"

       // 4. toLowerCase()
       // kegunaan : sebuah function yang berfungsi untuk mengganti semua value dalam sebuah string menjadi huruf kecil/ non kapital

       // contoh penggunaan :
       console.log(`\nTo Lower Case`)
       string = "JAVASCRIPT";
       newString = string.toLowerCase()

       console.log(newString)
       // expected output: "javascript"


       // 5. concat()
       // kegunaan : sebuah function yang berfungsi menggabungkan dua atau lebih string menjadi sebuah string, parameter pertama diisi dengan string yang akan menjadi seperator

       // contoh penggunaan :
       console.log(`\nConcat`)
       let string1 = "react";
       let string2 = "js";
       newString = string1.concat(", ", string2)

       console.log(newString)
       // expected output: "react, js"

       // 6. trim()
       // kegunaan : sebuah function yang berfungsi untuk menghapus semua whitespace yang ada dalam sebuah string

       // contoh penggunaan :
       console.log(`\nTrim`)
       string = "    react    ";

       newString = string.trim()

       console.log(newString)
       // expected output: "react"


       // 7. toString()
       // kegunaan : sebuah function yang berfungsi untuk melakukan proses casting sebuah data menjadi string

       // contoh penggunaan :
       console.log(`\nTo String`)
       let number = 1234;

       newString = number.toString()

       console.log(`${newString} \ntipe: ${typeof newString}`)

       // expected output: "123" tipe: string

       // 8. substr()
       // kegunaan : sebuah function yang berfungsi untuk mengambil bagian dari sebuah string, 
       // string yang akan diambil akan dikembalikan dalam bentuk string yang baru. 
       // dimulai dari index start dengan jumlah length yang diambil sesuai dengan nilai params kedua, 

       // contoh penggunaan :
       console.log(`\nSubstr`)
       string = "javascript";
       newString = string.substr(0, 4)

       console.log(newString)
       // expected output: "ava"
       // expected output: "avascript"



}