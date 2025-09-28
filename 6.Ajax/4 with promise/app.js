/*
Bir ajaxGet(url) fonksiyonu yaz.

Bu fonksiyon XMLHttpRequest kullanarak GET isteği yapsın.

Fonksiyon bir Promise döndürsün.

Eğer istek başarılıysa resolve ile yanıtı (JSON.parse edilmiş haliyle) döndürsün.

Eğer hata olursa reject ile bir hata mesajı göndersin.

Butona tıklandığında bu fonksiyon çağrılsın.

Dönen verinin içinden title bilgisini konsola yazdır.

Hata olursa "İstek başarısız" mesajını konsola yazdır.

https://jsonplaceholder.typicode.com/posts/1

*/

const button = document.querySelector("#getPost");
button.addEventListener("click", () => {
	ajaxGet("https://jsonplaceholder.typicode.com/posts/1")
  .then((resolve) => console.log(resolve.title))
  .catch((err) => console.log(err));


});

function ajaxGet(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
      try {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      } catch (error) {
        reject(error);
      }
    });
    xhr.open("GET", url);
    xhr.send();
  });
}

