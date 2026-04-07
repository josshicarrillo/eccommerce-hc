const getProducts = () => {
    return fetch("https://server-prueba.vercel.app/api/products")
        .then((respuesta) => respuesta.json())
    .catch((error) => console.log(error))
}
export { getProducts }
