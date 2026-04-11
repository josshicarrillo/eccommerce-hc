const getProducts = () => {
    return fetch("https://69d9905e26585bd92dd31573.mockapi.io/api/products")
        .then(response => response.json())
        .catch(error => {
            console.error("Error al obtener productos:", error);
            return products;
        })
}
const getProductById = (productId) => {
    return fetch(`https://69d9905e26585bd92dd31573.mockapi.io/api/products/${productId}`)
        .then(respuesta => respuesta.json())
        .catch((error) => console.log(error))
}

const addProduct = (newProduct) => {
    return fetch("https://69d9905e26585bd92dd31573.mockapi.io/api/products",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
        .then(respuesta => respuesta.json())
        .catch((error) => console.log(error))
}
const deleteProductById = (productId) => {
    return fetch(`https://69d9905e26585bd92dd31573.mockapi.io/api/products/${productId}`, {
        method: "DELETE"
    })
    .then(respuesta => respuesta.json())
    .catch((error) => console.log(error))
}


export { getProducts, getProductById, addProduct, deleteProductById }
