const titleInput = document.getElementById("titleInput");
const yearInput = document.getElementById("yearInput");

const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const editBtn = document.getElementById("editBtn");

const movieList = document.getElementById("movieList");

let movies = [];
let nextId = 1;

function renderMovies() {
  movieList.innerHTML = "";

  for (const m of movies) {
    const li = document.createElement("li");
    li.className = "item";
    li.dataset.id = String(m.id);

    li.innerHTML = `
      <div class="pelicula-item">
        <strong>${m.title}</strong>
        <div class="badge"><svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 24 24" fill="none">
<path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
</svg><div>${m.year}</div></div>
      </div>
      <div class="actions">
        <button class="small del" data-action="delete">Eliminar</button>
      </div>
    `;

    movieList.appendChild(li);
  }
}

function addMovie() {
  const title = titleInput.value.trim();
  const year = Number(yearInput.value);

  if (!title || !year) {
    alert("Introduce título y año.");
    return;
  }

  movies.push({ id: nextId++, title, year });
  titleInput.value = "";
  yearInput.value = "";
  renderMovies();
}

function deleteMovieById(id) {
  movies = movies.filter(m => m.id !== id);
  renderMovies();
}


// Solo funciona añadir al inicio
addBtn.addEventListener("click", addMovie);

// Estos eventos se completarán en ramas
deleteBtn.addEventListener("click", () => alert("Se implementa en rama eliminar"));
editBtn.addEventListener("click", () => alert("Se implementa en rama editar"));
movieList.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const li = e.target.closest("li.item");
  if (!li) return;

  const id = Number(li.dataset.id);

  if (btn.dataset.action === "delete") {
    deleteMovieById(id);
  }
});


renderMovies();
