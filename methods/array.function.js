export default function arraymethods() {
       
       // 1. pop()
       // kegunaan : sebuah function yang berfungsi menghapus nilai dari suatu index array
       
       // contoh penggunaan :
       console.log(`POP`)
       let array = ["a", "b", "c", "d"];
       console.log(`sebelum pop: [${array}]`)

       array.pop()

       console.log(`sesudah pop: [${array}]`)
       console.log(``)

       // expected output: ["a", "b", "c"]

       // 2. push()
       // kegunaan : sebuah function yang berfungsi menambah nilai pada akhir suatu array

       // contoh penggunaan :
       console.log(`PUSH`)
       array = ["a", "b", "c", "d"];
       console.log(`sebelum push: [${array}]`)

       array.push('e')

       console.log(`sesudah push: [${array}]`)
       console.log(``)

       // expected output: ["a", "b", "c", "d", "e"]

       // 3. join()
       // kegunaan : sebuah function yang berfungsi untuk menggabungkan nilai pada semua array
       // menjadi string, paramater yang diisi merupakan nilai yang akan menjadi separator 

       // contoh penggunaan :
       console.log(`JOIN`)
       array = ["a", "b", "c", "d"];
       console.log(`sebelum join: [${array}]`)

       let hasil = array.join(" | ")

       console.log(`sesudah join: ${hasil}`)
       console.log(``)

       // expected output: a | b | c | d

       // 3. concat()
       // kegunaan : sebuah function yang berfungsi untuk membuat sebuah array baru dengan 
       // nilai yang didapat dari hasil merge array-array

       // contoh penggunaan :
       console.log(`CONCAT`)
       let array1 = ["a", "b", "c", "d"];
       let aarray2 = ["f", "g"]

       hasil = array1.concat(aarray2)

       console.log(`sesudah concat: ${hasil}`)
       console.log(``)

       // expected output: a,b,c,d,f,g

       // 4. splice()
       // kegunaan : sebuah function yang berfungsi untuk menambah item baru pada array
       // params pertama disii posisi dari item yang akan ditambahkan
       // params kedua berisi banyaknya item pada array yang akan terhapus

       // contoh penggunaan :
       console.log(`SPLICE`)
       array = ["lama", "lama", "lama"];
       console.log(`sebelum concat: ${array}`)
       array.splice(0, 0, "baru", "baru")

       console.log(`sesudah concat: ${array}`)
       console.log(``)

       // expected output:  baru,baru,lama,lama,lama

       // 5. slice()
       // kegunaan : membuat array baru dengan value dari array sebelumnya
       // params satu merupakan awal index item yang akan diambil
       // params kedua berisi akhir index item yang akan diambil bila tidak diisi maka item yg akan diambil 
       // sampai akhir array tsb

       // contoh penggunaan :
       console.log(`SLICE`)
       array = ["1", "2", "3"];
       console.log(`sebelum slice: ${array}`)

       hasil = array.slice(0, 2)
       console.log(`sesudah slice: ${hasil}`)
       console.log(``)
       // expected output:  1,2




}