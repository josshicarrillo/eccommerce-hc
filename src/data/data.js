const products = [
    {
        id: 1,
        name: "Pantalón",
        description: "Pantalón deportivo para ocasiones especiales",
        stock: 15,
        price: 10,
        image:"/image/MODELO-1.jpg"
    },
    {
        id: 2,
        name: "Blusa",
        description: "Blusa elegante para ocasiones especiales",
        stock: 10,
        price: 20,
        image: "/image/MODELO-2.jpg"
    },

    {
        id: 3,
        name: "Vestido",
        description: "vestido elegante para ocasiones especiales",
        stock: 20,
        price: 30,
        image: "/image/MODELO-3.jpg"
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000)

    })
}  

export { getProducts }