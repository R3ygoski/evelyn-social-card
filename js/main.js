//* Seleciona o Elemento HTML com ID toggler
const themeToggler = document.querySelector("#toggler")

//* Seleciona o Body do HTML
const body = document.querySelector("body")

//* Manipula o evento de Click para que haja a alteração do Tema.
themeToggler.addEventListener("click", ()=>{

    //* Adiciona ou Remove a classe Dark do Body
    body.classList.toggle("dark")

    //* Certifica que o Body não contenha a classe "dark"
    if (!body.classList.contains("dark")){
        themeToggler.textContent = "Light Mode"
    } else {
        themeToggler.textContent = "Dark Mode"
    }
})