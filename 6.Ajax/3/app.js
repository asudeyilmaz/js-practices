
const button = document.querySelector("#getUsers");
const userList = document.querySelector("#userList");
userList.style.listStyle ="none";

button.addEventListener("click",()=>{
	getUsers("https://jsonplaceholder.typicode.com/users", null);
});




function getUsers(url, id){
	let newURL = prepareURL(url,id);
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", ()=>{
		if(xhr.readyState===4 && xhr.status===200){
			//veriler alındı
			const data = JSON.parse(xhr.responseText);
			clearList();
			if(Array.isArray(data)){
				//diziyse dön
				data.forEach((user)=>{
					createList(user);
				})
			}else{
				//normal liste yap
				createList(data);
			}

		}else if(xhr.readyState===4 && xhr.status!==200){
			alert("Bir hata oluştu");
		}
	})
	xhr.open("GET", newURL);
	xhr.send();
}

function clearList(){
	userList.innerHTML="";
}



function createList(user){
	const li = document.createElement("li");
	li.textContent = `${user.id} - ${user.name} - ${user.email}`;
	userList.appendChild(li);
}

function prepareURL(url,id){
	if(id===null) {
		return url;
	}
	return `${url}?id=${id}`;
}