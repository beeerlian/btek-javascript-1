export default function date() {
       const date = new Date();
       // 1. getTime()
       // kegunaan : mendapat nilai waktu sekarang dalam milisecond sejak 1 januari 1970

       // contoh penggunaan :
       console.log(`\nGET TIME`)

       console.log(`${date.getTime()}`)
       // expected output:  waktu sekarang dalam miliseconds

       // 2. getFullyear()
       // kegunaan : mendapat nilai tahun sekarang dalam format yyyy

       // contoh penggunaan :
       console.log(`\nGET FULL YEAR`)

       console.log(`${date.getFullYear()}`)
       // expected output:  tahun sekarang 2022

       // 3. getMonth()
       // kegunaan : mendapat nilai bulan sekarang (0-11)

       // contoh penggunaan :
       console.log(`\nGet Month`)

       console.log(`${date.getMonth()}`)
       // expected output:  9

       // 4. getDate()
       // kegunaan : mendapat nilai tanggal sekarang (1-31)

       // contoh penggunaan :
       console.log(`\nGet Date`)

       console.log(`${date.getDate()}`)
       // expected output:  tanggal sekarang ketika program ini dieksekusi

       // 5. getHours()
       // kegunaan : mendapat nilai jam sekarang (0-23)

       // contoh penggunaan :
       console.log(`\nGet Hours`)

       console.log(`${date.getHours()}`)
       // expected output:  jam sekarang ketika program ini dieksekusi
}