/*
Görev 1 – Kullanıcıları Listele

https://jsonplaceholder.typicode.com/users adresine fetch ile GET isteği at.

Dönen kullanıcıların name alanlarını konsola yazdır.
*/

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=> {
	for(let value of data){
		console.log(value.name);
	}
})
.catch((err)=> console.log(err))


/*
https://jsonplaceholder.typicode.com/posts adresinden ilk 10 gönderiyi al.

Her gönderinin title kısmını konsola sırayla yazdır.
*/

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=> response.json())
.then((data)=>{
	for(let value of data.slice(0,10)){
		console.log(value.title);
	}
})
.catch((err)=> console.log(err))

/*
Bir fonksiyon yaz: getPostById(id)

Bu fonksiyon https://jsonplaceholder.typicode.com/posts/{id} isteği atsın.

Promise ile sonucu dön ve başlığı konsola yazdır
*/

function getPostById(id){
	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	.then((res)=> res.json())
	.then((data)=>console.log(data))
	.catch((err)=>console.log(`${err}   
		Post Bulunamadı`));
}

function getUsersById(id){
	fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	.then((res)=> res.json())
	.then((data)=>{
		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
		.then((res)=>res.json())
		.then((posts)=>{
			console.log(`Name: ${data.name}`);
			console.log("Gönderiler:")
			for(let value of posts){
				console.log(value.title);
			}
		})
	})
	.catch((err)=>console.log(`${err}   
		Post Bulunamadı`));
}