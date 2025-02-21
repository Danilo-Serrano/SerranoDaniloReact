const productos = [
    {id: "1", nombre: "CELULAR IPHONE 16", precio: 2748999, marca: "IPHONE", img: "/images/iphone.jpg", stock: 5},
    {id: "2", nombre: "GOD OF WAR" , precio: 20000, img: "/images/goofwar.jpg", marca: "PS5", stock: 5 },
    {id: "3", nombre: "SMART TV E-NOVA 32 PULGADAS HD TE32HA10 " , precio: 426000,  img: "/images/tele.jpg", marca: "E-NOVA", stock: 5  },
    {id: "4", nombre: "NOTEBOOK HP VICTUS - 15-7535HS AMD R5" , precio: 700000,  img: "/images/laptop.jpeg", marca: "HP", stock: 5  },
    {id: "5", nombre: "CELULAR SAMSUNG GALAXY S25+" , precio: 2400000,  img: "/images/s25ultra.webp", marca: "SAMSUNG", stock: 5  },
    {id: "6", nombre: "SMART LED GOOGLE TV PHILIPS 32 PULGADAS HD" , precio: 387000,  img: "/images/tv2.jpg", marca: "PHILIPS", stock: 5  },
    {id: "7", nombre: "NOTEBOOK ACER AL16-51P-59UU INTEL CORE I5" , precio: 60000,  img: "/images/laptop2.jpg", marca: "ACER", stock: 5  },
    {id: "8", nombre: "DETROIT BECOME HUMAN" , precio: 22000,  img: "/images/ps54.jpg", marca: "PS4", stock: 5  },
    {id: "9", nombre: "SMART LED TV RCA 32 PULGADAS HD " , precio: 400000,  img: "/images/tv3.jpg", marca: "RCA", stock: 5  },
    {id: "10", nombre: "CELULAR IPHONE 13 " , precio: 1500000,  img: "/images/phone13.webp", marca: "IPHONE", stock: 5  },
    {id: "11", nombre: "NOTEBOOK LENOVO IP SLIM 3 15IAH8 INTEL CORE I5 " , precio: 510000,  img: "/images/laptop4.jpg", marca: "LENOVO", stock: 5  },
    {id: "12",nombre: "CONTROL" , precio: 23000,  img: "/images/ps5.jpg", marca: "PS5", stock: 5  },
]
export const getProductos = () => {
    return new Promise (resolve =>{
        setTimeout( () =>{
            resolve(productos);
        },2000)
    })
}

export const getUnProducto = (id) =>{
    return new Promise(resolve =>{
        setTimeout(() =>{
            const productoBuscado = productos.find(item => item.id === id)
            resolve(productoBuscado)
        }, 2000)
    })
}