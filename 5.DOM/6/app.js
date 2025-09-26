/*
Sepete eklenen ürünler, ayrı bir listeye taşınsın.

Sepetteki ürünlerin yanında “Kaldır” butonu olsun.

Bonus: Sepetteki toplam ürün sayısını gösteren bir sayaç ekle.
*/
const urunListe = document.querySelectorAll("#urunListe li");
const sepeteEkleBtn = document.querySelectorAll(".sepeteEkleBtn");
const sepetSayac = document.querySelector("#sepetSayac");
const sepetListe = document.querySelector("#sepetListe");

sepeteEkleBtn.forEach((ekle) => {
  ekle.addEventListener("click", sepetOlustur);
});

function sepetOlustur(e) {
  const eklenecekUrun = e.target.parentElement.firstChild.nodeValue.trim();
  const li = document.createElement("li");
  li.textContent = eklenecekUrun;

  const kaldirBtn = document.createElement("button");
  kaldirBtn.textContent = "Kaldır";

  li.appendChild(kaldirBtn);
  sepetListe.appendChild(li);

  kaldirBtn.addEventListener("click", kaldir);
  sayacDegeri();
}
function kaldir(e) {
  e.target.parentElement.remove();
  sayacDegeri();
}
function urunlerdenKaldir(urun) {
  urun.remove();
}

function sepetDoluMuBosMU() {
  return sepetListe.children.length > 0;
}

function sayacDegeri() {
  const sonuc = sepetDoluMuBosMU();
  if (sonuc) {
    sepetSayac.textContent = sepetListe.children.length;
  } else {
    sepetSayac.textContent = 0;
  }
}

/*
Bir input’a istediğin renk kodunu yaz (ör. #ff0000).

“Ekle” butonuna basınca, renk kutucuğu (div) oluşturulsun ve arka planı girilen renkte olsun.

Her kutunun yanında “Sil” butonu olsun.

Bonus: Kutucuğa tıklayınca sayfanın arka planı o renge dönüşsün.
*/
const renkInput = document.querySelector("#renkInput");
const renkEkleBtn = document.querySelector("#renkEkleBtn");
const paletDiv = document.querySelector("#palet");

runEvents();

function runEvents() {
  renkEkleBtn.addEventListener("click", renkOlustur);
}

function renkOlustur() {
  const newColor = renkInput.value.trim();
  if (!newColor) return;

  const div = document.createElement("div");
  div.className = "renkKutusu";
  div.style.backgroundColor = newColor;

  const silBtn = document.createElement("button");
  silBtn.textContent = "Sil";

  paletDiv.appendChild(div);
  paletDiv.appendChild(silBtn);

  renkInput.value = "";

  silBtn.addEventListener("click", removeColor);
  div.addEventListener("click", changeBackgroundColor);
}

function removeColor(e) {
  const silBtn = e.target;
  silBtn.previousElementSibling.remove();
  silBtn.remove();
}

function changeBackgroundColor(e) {
  const div = e.target;
  const body = document.querySelector("body");
  body.style.backgroundColor = div.style.backgroundColor;
}

/* 
Butona basınca, altına not eklenip liste şeklinde gösterilsin.
Her notun yanında:
✅ “Tamamlandı” butonu (üzerine çizgi atsın).
❌ “Sil” butonu.
Bonus: Not sayısı üstte bir <span> içinde güncellensin. */
const notInput = document.querySelector("#notInput");
const notEkleBtn = document.querySelector("#notEkleBtn");
const notSayac = document.querySelector("#notSayac");
const notListe = document.querySelector("#notListe");

notEkleBtn.addEventListener("click", notOlustur);

function notOlustur() {
  const yazi = notInput.value.trim();
  if (!yazi) return;

  const li = document.createElement("li");
  li.textContent = yazi;

  const silBtn = document.createElement("button");
  silBtn.textContent = "Sil";

  const tamamlandiBtn = document.createElement("button");
  tamamlandiBtn.textContent = "✅";

  li.appendChild(silBtn);
  li.appendChild(tamamlandiBtn);
  notListe.appendChild(li);

  notInput.value = "";
  notSayacGuncelle();
  silBtn.addEventListener("click", notSil);
  tamamlandiBtn.addEventListener("click", notTamamla);
}

function notSil(e) {
  const li = e.target.parentElement;
  li.remove();
  notSayacGuncelle();
}

function notTamamla(e) {
  const li = e.target.parentElement;
  li.classList.toggle("tamamlandi");
}

function notDoluMuBosMu() {
  return notListe.children.length > 0;
}

function notSayacGuncelle() {
  const sonuc = notDoluMuBosMu();
  if (sonuc) {
    notSayac.textContent = notListe.children.length;
  } else {
    notSayac.textContent = 0;
  }
}

/*
Bir input ve “Ekle” butonu olsun.
Kullanıcı her eklediğinde liste alfabetik olarak sıralansın.
Her öğe bir <li> olarak gösterilsin ve yanında “Sil” butonu olsun.
*/

const siraliInput = document.querySelector("#siraliInput");
const siraliEkleBtn = document.querySelector("#siraliEkleBtn");
const siraliListe = document.querySelector("#siraliListe");

siraliEkleBtn.addEventListener("click", yeniListe);

function yeniListe() {
  const yazi = siraliInput.value.trim();

  if (!yazi) return;

  const li = document.createElement("li");
  li.textContent = yazi;

  const silBtn = document.createElement("button");
  silBtn.textContent = "Sil";

  li.appendChild(silBtn);
  siraliListe.appendChild(li);

  siraliInput.value = "";

  silBtn.addEventListener("click", listeSil);
  alfabeyeGoreSirala();
}

function listeSil(e) {
  const list = e.target.parentElement;
  list.remove();
  alfabeyeGoreSirala();
}

function alfabeyeGoreSirala() {
  if (!listeDoluMuBosMu()) return;

  const liste = Array.from(siraliListe.querySelectorAll("li"));
  liste.sort((a, b) =>
    a.firstChild.textContent.localeCompare(b.firstChild.textContent, "tr", {
      sensitivity: "base",
    })
  );
  //listeyi temizle
  siraliListe.innerHTML = "";
  //sıralı ögeleri ekle
  liste.forEach((li) => siraliListe.appendChild(li));
}

function listeDoluMuBosMu() {
  return siraliListe.children.length > 0;
}
