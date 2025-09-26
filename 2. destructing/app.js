
//! Bir kullanıcı nesnesinden name ve age değerlerini çıkar ve ekrana yazdır.

const user = { 
	name: "Asude",
	age: 23,
	city: "İstanbul"
}

let {name:isim,age} = user;
console.log(isim,age);