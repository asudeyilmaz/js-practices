fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Lilienne's first post",
    body: "Bu gönderi fetch API ile oluşturuldu 💫",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

//g örev 7
const div = document.querySelector("#ul");
const ul = document.createElement("ul");

div.appendChild(ul);

async function getUsersById(id) {
  try {
    const user = await (
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    ).json();
    const postTitle = await (
      await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      )
    ).json();
    createHeader(user.name);
    const filtered = postTitle.filter((post) => post.title.startsWith("e"));
    for (let value of filtered) {
      createList(value.title);
    }
  } catch (error) {
    console.log(error);
  }
}

function createHeader(name){
	const h2 = document.createElement("h2");
	h2.textContent=name;
	ul.appendChild(h2);
}

function createList(newValue) {
  const li = document.createElement("li");
  li.textContent = newValue;
  ul.appendChild(li);
}
getUsersById(1);
