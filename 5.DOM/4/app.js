/* Input alanına yazılan metni, “Ekle” butonuna basınca listeye ekle.

Eklenen her öğenin yanında “Sil” butonu olsun, ona basılınca o öğe silinsin. */

const input = document.querySelector("#itemInput");
const addInput =document.querySelector("#ekleBtn");
const ul = document.querySelector("#dinamikListe");

 addInput.addEventListener("click", listeOlusturVeSil);

function listeOlusturVeSil(){
	const inputText = input.value.trim();

	const li =document.createElement("li")
	li.textContent= inputText;

	const silBtn = document.createElement("button");
	silBtn.textContent="Sil";
	silBtn.id ="sil";
	li.appendChild(silBtn);
	ul.appendChild(li);
	

//silme butonu
	// const butonlar = document.querySelectorAll("#sil");
	// butonlar.forEach((buton)=>{
	// 	buton.addEventListener("click", ()=>{
	// 		buton.parentElement.remove();
	// 	})
	// })
//! kısa çözüm
silBtn.addEventListener("click", () => {
  li.remove();
}); 
}

/*Bir buton olsun, tıklandığında sayfanın arka planı ve yazı renkleri değişsin.

Butonun yazısı da değişsin: “Dark Mode” → “Light Mode” */

const modDegistir = document.querySelector("#temaBtn");
const body = document.querySelector("body");

modDegistir.addEventListener("click", ()=>{
	body.classList.toggle("dark")
	//! silme butonu kısa çözüm
	modDegistir.textContent = modDegistir.textContent === "Dark Mode" ? "Light Mode" : "Dark Mode";

	// yazıDegistir(modDegistir.textContent)
})
// function yazıDegistir(yeniYazi){
// 	if(yeniYazi == "Dark Mode"){
// 		modDegistir.textContent= "Light Mode";
// 	}else if(yeniYazi == "Light Mode"){
// 		modDegistir.textContent = "Dark Mode"
// 	}
// }

/* Bir textarea olsun.

Kullanıcı yazdıkça, anlık olarak altındaki <span> içinde kaç karakter yazıldığı görünsün.

Maksimum 100 karakter olsun, aşıldığında sayacın rengi kırmızı olsun.*/
 const text = document.querySelector("#metin");
 const sayac = document.querySelector("#sayac");

 text.addEventListener("input" , ()=>{
	const textDeger= text.value;
	sayac.textContent = textDeger.length;
	//! kısa çözüm
	sayac.style.color = sayac.textContent > 100 ? "red" : "black";

	// if(Number(sayac.textContent) > 100){
	// 	sayac.style.color = "red"
	// }
 })