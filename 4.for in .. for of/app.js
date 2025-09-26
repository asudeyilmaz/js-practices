// Bir nesnenin tüm key ve value’larını ekrana yazdır.

const person = { name: "Ali", 
	age: 30, 
	city: "Ankara" 
};
// for…in ve for…of kullanmayı dene

for ( let user in person){
	console.log(user, person[user]);
}


for (let key of Object.keys(person)) {
    console.log(key, person[key]);
}
