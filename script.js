const grid = document.querySelector(".grid"),
  gridTemplate = document.getElementById("card-template");

for (let i = 0; i < 10; i++) {
  grid.append(gridTemplate.content.cloneNode(true));
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    grid.innerHTML = "";
    data.forEach((info) => {
      const div = gridTemplate.content.cloneNode(true);
      div.querySelector("[data-title]").textContent = info.title;
      div.querySelector("[data-body]").textContent = info.body;
      grid.append(div);
    });
  });
