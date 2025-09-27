const button = document.querySelector("#getUsers");
const userList = document.querySelector("#userList");

button.addEventListener("click", () => {
  getUsers("https://jsonplaceholder.typicode.com/users", null);
});

function prepareURL(url, id) {
  if (id === null) {
    return url;
  }
  return `${url}?id=${id}`;
}

function getUsers(url, id) {
  let newURL = prepareURL(url, id);
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      // Listeyi önce temizle
      userList.innerHTML = "";

      // Eğer array dönerse
      if (Array.isArray(data)) {
        data.forEach((user) => {
          const li = document.createElement("li");
          li.textContent = `${user.id} - ${user.name}`;
          userList.appendChild(li);
        });
      } else {
        // Tek bir obje dönerse
        const li = document.createElement("li");
        li.textContent = `${data.id} - ${data.name}`;
        userList.appendChild(li);
      }
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      console.log("Bir hata oluştu.");
    }
  });
  xhr.open("GET", newURL);
  xhr.send();
}
