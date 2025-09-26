/*
Ekranda bir sayı var.

“Arttır” butonuna basıldıkça sayı 1 artsın.

Sayı 10 ve üzeri olunca <p> yazısı kırmızıya dönsün, 10’un altına gelince tekrar siyah olsun.

“Sıfırla” butonuna basınca sayı sıfırlansın ve renk tekrar siyah olsun.

*/

const sayac = document.querySelector("#sayac");
const arttir =document.querySelector("#arttir");
const sifirla = document.querySelector("#sifirla");

arttir.addEventListener("click", ()=>{
	sayac.textContent = Number(sayac.textContent) +1
	if(sayac.textContent >= 10) {
		sayac.style.color = "red";
	}else {
		sayac.style.color = "black";
	}
});

sifirla.addEventListener("click", ()=>{
	sayac.textContent = "0";
	sayac.style.color = "black";
})



/*
Sayfada bir resim ve bir <div> var.

“Göster / Gizle” butonuna basıldığında resim kaybolup tekrar görünür olsun.

Aynı anda <div> içindeki yazı da değişsin: “Gizlendi” / “Gösteriliyor”. */
 const buton = document.querySelector("#toggleBtn");
 const resim =document.querySelector("#resim");
 const resimYazi = document.querySelector("#resimYazi");

//  console.log(buton,resim,resimYazi)
let resminDurumu = true;
buton.addEventListener("click", ()=>{
	if(resminDurumu){
		resim.style.display = "none";
		gizlendi();
	}else {
		resim.style.display = "block";
		goster();
	}
	resminDurumu = !resminDurumu;
})


function gizlendi(){
	resimYazi.textContent= "Gizlendi"
}
function goster(){
	resimYazi.textContent = "Gösteriliyor"
}

/*
Bir <ul> listesi var (ör: meyveler).

Fare öğenin üzerine gelince arka plan rengi değişsin, ayrıldığında eski haline dönsün.

Ekstra olarak: Her <li>’nin yanında bir “Sil” butonu olsun, tıklandığında o öğe listeden silinsin.
*/

const list = document.querySelectorAll("#liste li");
const sil = document.querySelectorAll (".sil-btn");

list.forEach((li)=>{
	li.addEventListener("mouseover", ()=>{
		li.style.backgroundColor = "#4b0235ff";
		li.style.color ="white";
	});
	li.addEventListener("mouseout", ()=>{
		li.style.backgroundColor = "white";
		li.style.color = "black";
	});
})

sil.forEach((silBtn)=>{ 
	silBtn.addEventListener("click" , ()=>{
	silBtn.parentElement.remove();
})

})



