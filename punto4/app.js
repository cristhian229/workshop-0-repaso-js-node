const URL_GENERAL = "https://api.escuelajs.co/api/v1/products"; // SE PUEDE CAMBIAR ESTA VARIABLE POR TODAS LAS MENCIONES DE LA url
const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const titulo = document.querySelector("#name");
const found = document.querySelector("#found");

let id;

index();

async function index() {
  const response = await fetch(URL_GENERAL);
  const data = await response.json();

  form.addEventListener("submit", async (event) => {
    const foundProduct = data.find((product) => product.title === titulo.value);
    found.innerHTML = `
      <td>${foundProduct.id}</td>
      <td>${foundProduct.title}</td>
      <td>$${foundProduct.price}</td>
      <td>${foundProduct.description}</td>
      <td>
        <img width="100px" src='${foundProduct.images[0]}'>
      </td>
        <td>${foundProduct.creationAt}</td>`;

    event.preventDefault();
    form.reset();
  });

  tbody.innerHTML = "";
  data.forEach((element) => {
    // console.log("imagen " + element.images[0]);
    tbody.innerHTML += `
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>$${element.price}</td>
            <td>${element.description}</td>
            <td>
                <img width="100px" src='${element.images[0]}'>
            </td>
            <td>${element.creationAt}</td>

        `;
  });
}

async function find(id) {
  const response = await fetch(`${URL_GENERAL}${id}`);
  const data = await response.json();
  data;

  //ACA DEBEMOS PROGRAMAR LA PETICION PARA BUSCAR UNA CATEGORIA
}

// preguntar como realizar el manejo de error y la busqueda de productos
