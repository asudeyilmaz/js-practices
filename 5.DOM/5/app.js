/*Bir input ve "Ekle" butonu olacak.
Ekle dediğinde listeye öğe eklenecek.
Her öğenin yanında:
✅ "Tamamla" butonu (üzerine çizgi atsın).
❌ "Sil" butonu (öğeyi kaldırsın).
Bonus: Tamamlanan görevler farklı renkte görünsün. */

const todoInput = document.querySelector("#todoInput");
const todoAdd = document.querySelector("#todoEkle");
const ul = document.querySelector("#todoListe");

const addList = (newInput) => {
  newInput = todoInput.value.trim();
  if (!newInput) return;

  const li = document.createElement("li");
  li.textContent = newInput;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";

  const completedBtn = document.createElement("button");
  completedBtn.textContent = "✅";

  li.appendChild(completedBtn);
  li.appendChild(removeBtn);
  ul.appendChild(li);

  todoInput.value = "";

  removeBtn.addEventListener("click", removeList);
  completedBtn.addEventListener("click", completedList);
};

function removeList(e) {
  e.target.parentElement.remove();
}

function completedList(e) {
  e.target.parentElement.classList.toggle("tamamlandi");
  e.target.parentElement.style.color = "green";
}

todoAdd.addEventListener("click", addList);

/*
Birden fazla başlık (h3) ve altında gizli paragraf (p) olsun.
Başlığa tıklanınca ilgili paragraf açılsın/kapansın.
Aynı anda sadece bir tane açık kalsın.
*/
const div = document.querySelector(".accordion");
const h3 = document.querySelectorAll(".accordion h3");
const p = document.querySelectorAll(".accordion p");

h3.forEach((title) => {
  title.addEventListener("click", () => {
    h3.forEach((t) => {
      if (t !== title) {
        t.nextElementSibling.style.display = "none";
      }
    });
    const text = title.nextElementSibling;
    text.style.display = text.style.display == "block" ? "none" : "block";
  });
});

/*
Kullanıcı bir input’a sayı girsin (örneğin 10).

"Başlat" butonuna basınca geri sayım başlasın.

Her saniye 1 azalsın.

0’a gelince "Bitti!" yazsın.
*/
const number = document.querySelector("#sayiInput");
const start = document.querySelector("#baslatBtn");
const counter = document.querySelector("#geriSayim");

let interValid;

const makeCounter = (startingCount)=>{
	return ()=>{
		if(startingCount === 0){	
			counter.textContent= "Bitti!"	
			clearInterval(interValid);
		}else {
		counter.textContent= startingCount;
		startingCount--;
		}
	};
}
start.addEventListener("click",()=>{
const inputNumber = number.value;
	interValid = setInterval(makeCounter(inputNumber), 1000)
} ) 
