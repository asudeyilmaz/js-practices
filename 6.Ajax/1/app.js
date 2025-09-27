function getPerson(person) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(`
				Ad: ${data.ad}
				Soyad: ${data.yas}
				Meslek: ${data.meslek}

				`);
    }
  });
  xhr.open("GET", person);
  xhr.send();
}

getPerson("kullanici.json");
