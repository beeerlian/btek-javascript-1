export default function numberMethods() {



       // 1. toFixed()
       // kegunaan : sebuah function yang berfungsi untuk melakukan pembulatan sebuah bilangan desimal dengan jumlah digit desimal bergantung pada paramater yang diberikan

       // contoh penggunaan :
       console.log(`To Fixed`)
       let number = 12.99999;

       let toFixed0 = number.toFixed(0)
       let toFixed2 = number.toFixed(2)

       console.log(`toFixed 0: ${toFixed0}`)
       console.log(`toFixed 2: ${toFixed2}`)
       console.log(``)

       // expected output:
       // 13
       // 13.00


       // 2. parseInt()
       // kegunaan : sebuah function yang berfungsi untuk melakukan melakukan casting sebuah string kedalam number (Integer), jika string tidak dapat dicasting, 
       // maka kembaliannya akan berupa NaN

       // contoh penggunaan :
       console.log(`Parse Int`)
       let string1 = "12.99999";
       let string2 = "hallo ";

       let int1 = parseInt(string1)
       let int2 = parseInt(string2)

       console.log(`1: ${int1}`)
       console.log(`2: ${int2}`)
       console.log(``)

       // expected output:
       // 12
       // NaN


       // 3. parseFloat()
       // kegunaan : sebuah function yang berfungsi untuk melakukan melakukan casting sebuah string kedalam number (Float), jika string tidak dapat dicasting, 
       // maka kembaliannya akan berupa NaN

       // contoh penggunaan :
       console.log(`Parse Float`)
       string1 = "12.9999999";
       string2 = "hallo ";

       let float1 = parseFloat(string1)
       let float2 = parseInt(string2)

       console.log(`1: ${float1}`)
       console.log(`2: ${float2}`)
       console.log(``)

       // expected output:
       // 12.9999999
       // NaN

       // 4. toPrecision()
       // kegunaan : sebuah function yang berfungsi untuk mendapatkan string yang berisi number
       // dengan panjang digit yang ditentukan dalam parapmeter

       // contoh penggunaan :
       console.log(`To Precision`)
       number = 12.14532;
       

       let hasil = number.toPrecision(3)

       console.log(`sebelum: ${number}`)
       console.log(`sesudah: ${hasil}`)
       console.log(``)

       // expected output: 12.1

}