
const sayac = document.querySelector("#sayac");
const arttir = document.querySelector("#arttir");
const sifirla = document.querySelector("#sifirla")
const gosteGizleBtn = document.querySelector("#toggleBtn");
const resim = document.querySelector("#resim");
const list =document.querySelectorAll("#liste li")


runEvents ();

let resminDurumu = true;

function runEvents(){
    arttir.addEventListener("click", sayiArttir);
	sifirla.addEventListener("click", sayiSifirla);
	gosteGizleBtn.addEventListener("click", resmiDegistir);


}


function sayiArttir(){
let i = +(sayac.textContent) 
i++;
sayac.textContent = i;
}

function sayiSifirla() {
	sayac.textContent = "0"
}

function resmiDegistir() {

if(resminDurumu){
	resim.style.display= "block";
} else {
	resim.style.display= "none"
}
resminDurumu = !resminDurumu;
}

    list.forEach((li)=>{
      li.addEventListener("mouseover", ()=>{
        li.style.backgroundColor = "lightblue";
      });
      li.addEventListener("mouseout", ()=>{
        li.style.backgroundColor = "";
      });
    });





