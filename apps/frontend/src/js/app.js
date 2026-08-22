const botonList = document.querySelector("#boton");
const contenedorInicial = document.querySelector("#contenedor");
const contenedorCards = document.querySelector("#contenedor-card");

botonList.addEventListener("click", async () => {

    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const listaUsuarios = await respuesta.json();

        botonList.style.display = "none";
        contenedorInicial.style.display = "none";
        contenedorCards.style.display = "block";

        contenedorCards.innerHTML="";

        for (let usuario of listaUsuarios){
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta-usuario");

            tarjeta.innerHTML = `
                <h3>Usuario: ${usuario.name}</h3>
                <p>Correo: ${usuario.email}</p>
            `;
            contenedorCards.appendChild(tarjeta);
        }

    } catch (error) {
        console.error("Hubo un error al cargar los datos:", error);
        contenedorInicial.style.display = "block";
        contenedorInicial.innerHTML = "<p>Error al cargar la información. Inténtalo más tarde.</p>";
        }
    } 
);