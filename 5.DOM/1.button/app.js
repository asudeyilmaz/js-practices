// Bir <button> ekle, tıklandığında sayfadaki <h1> yazısını değiştir

const degistir = document.querySelector("#o2");

const h1 = document.querySelector("#o1")

degistir.addEventListener("click", ()=>{
	h1.innerHTML = 'değişti'
	const div =document.querySelector("#div");
	div.remove();

})

//Bir <p> paragrafını seçip rengini kırmızı yap.
const p = document.getElementById("0p");
p.style.color = "#D94A38";

//Bir <ul> listesine yeni <li> öğesi ekle.
const ul = document.querySelector("#ul");
const li= document.createElement("li");
li.textContent = "eklenen liste";
ul.appendChild(li);


//Bir butona tıkladığında <div> içindeki yazıyı sil.
//*üsttekine ekleyeceğim
/* const div =document.querySelector("#div");
	div.remove();
*/

//Kullanıcı bir inputa isim yazıp “Ekle” butonuna bastığında, o ismi listeye ekle.
const form = document.querySelector("#form");
form.addEventListener("submit", ekle);

function ekle(e) {
const input = document.querySelector("#isim");
const inputText = input.value.trim();
listeyeEkle(inputText);
	e.preventDefault();
}

function listeyeEkle(yeniDeger){
	const ul = document.querySelector("#ul");
const lis= document.createElement("li");
lis.textContent = yeniDeger;
ul.appendChild(lis);
}