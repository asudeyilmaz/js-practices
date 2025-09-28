/*
Bir sayfada bir buton var. Bu butona basıldığında şu iki API’ye aynı anda istek at:

https://jsonplaceholder.typicode.com/users

https://jsonplaceholder.typicode.com/posts

Görevlerin:

ajaxGet(url) fonksiyonunu yine XMLHttpRequest + Promise ile yaz.

Butona tıklanınca iki isteği aynı anda başlat ve Promise.all ile sonuçları al.

Gelen sonuçlardan:

İlk API’den (users) sadece ilk kullanıcının name bilgisini al.

İkinci API’den (posts) sadece ilk gönderinin title bilgisini al.

Konsola şu formatta yazdır:

Kullanıcı: [name]
Gönderi Başlığı: [title]

Eğer herhangi biri hata verirse "İsteklerden biri başarısız oldu" mesajını konsola yazdır.
*/


function getUsers(url){
	return new Promise((resolve,reject)=>{
		const xhr = new XMLHttpRequest();
		xhr.addEventListener("readystatechange",()=>{
			try {
				if(xhr.readyState===4 && xhr.status===200){
					resolve(JSON.parse(xhr.responseText));
				}
			} catch (error) {
				reject(error);
			}
		})
		xhr.open("GET",url);
		xhr.send();
	})
}

function getPost(url){
	return new Promise((resolve,reject)=>{
		const xhr = new XMLHttpRequest();
		xhr.addEventListener("readystatechange",()=>{
			try {
				if(xhr.readyState===4 && xhr.status===200){
					resolve(JSON.parse(xhr.responseText));
				}
			} catch (error) {
				reject(error);
			}
		})
		xhr.open("GET", url);
		xhr.send();
	})
}
function getData(){

	Promise.all([getUsers("https://jsonplaceholder.typicode.com/users/1"), getPost("https://jsonplaceholder.typicode.com/posts/1")])
	.then(([user,post])=>{
		
			console.log(`
				Kullanıcı: ${user.name} 
				Gönderi Başlığı: ${post.title}
				`)
		
	})
	.catch(()=> console.log("İsteklerden biri başarısız oldu"))
}


const getDataBtn = document.querySelector("#getData");

getDataBtn.addEventListener("click", getData);