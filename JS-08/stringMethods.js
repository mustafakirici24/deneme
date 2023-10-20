// ?======================================================
// ?                     STRING METOTLARI

// let str1 = "This is a string";
// let str2 = "This is a string";
// let str3 = `This is a string`;
// let str4 = new String("This is a string"); //?  String constructor ile yaptığımız için obj olarak dönüyor.

// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);
// console.log(typeof str4);

//! LENGTH PROPERTY

// let str1 = "Eypes Edu.";
// let str2 = "Full Stack";
// let str3 = "";
// let str4 = str1 + " " + str2;

// console.log(str1.concat(" ", str2));
//? Önceki işlemle aynı ama "+" işlemi concatten hızlı çalışır.

// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);
// console.log(str4.length);

//! INDEX

// let str = "Hello World";

// str[3] = "L";

// console.log(str);
// console.log(str.length);

// console.log(str[str.length - 1]);
// console.log(str[2]);
// console.log(str[7]);

//? str'nin elemanlarını for döngüsü ile yazdırma

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//? str'nin elemanlarını for döngüsü ile tersten yazdırma

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// let a = 5;

// let b = a;

// // console.log({ a }, { b });

// a = 10;

// console.log({ a }, { b });

// alert("merhaba\tdünya")
// console.log("merhaba\tdünya")
// console.log("merhaba \tdünya")
// console.log("merhaba\0dünya")
// console.log("merhaba\ndünya")
// console.log(`merhaba


// dünya`)



// let str1="Eypes Education"
// console.log(str1.slice(1,9))
// console.log(str1.slice(-8,-2))

// console.log(str1.slice(3))

// console.log(str1.substring(1,9))
// console.log(str1.substring(9,1))

// console.log(str1.substring(str1.length-4))


// let str1 = "Eypes Edu.";
// let str2 = "Full Stack";
// let str3 = "";
// let str4 = str1 + " " + str2;

// console.log(str1.concat(" ",str2," ",str3))

// let email = "nicolas.o@eypes.com"
// console.log(email.includes("@"))
// console.log(email.includes("*"))
// if(email.includes("@")){
//     console.log("Email is valid")
// }else{
//     console.log("Invalid Email")
// }

// console.log(email.indexOf("@"))
// console.log(email.indexOf("*"))


// let str = "You do not KNOW what you do not Know Until you know."

// console.log(str.length-1)
// console.log(str.lastIndexOf("K"))
// console.log(str.lastIndexOf("K",46))

// console.log(str.search("knowt"))
// console.log(str.search("Know"))
// console.log(str.search(/Know/))
// console.log(str.search(/Know/i)) 

// let str = "Mr Brown has a brown house and a brown car"
// // let newStr = str.replace("brown","red")
// // let newStr = str.replace(/brown/g,"red")
// let newStr = str.replace(/brown/ig,"red")

// console.log(newStr)

// let str = "welcome to : Full Stack"

// console.log(str.split())
// console.log(str.split(""))
// console.log(str.split(" "))
// console.log(str.split("",10))
// console.log(str.split(","))
// console.log(str.split("Full"))

// let arr =str.split("Full")
// console.log(arr.join(""))

// console.log(str.toLowerCase())

// console.log(str.toUpperCase())

let x= prompt("kullanıcı adını girsin").trim().toUpperCase().split(" ")
console.log(x)