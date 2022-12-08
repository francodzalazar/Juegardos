const consultarBDD = async () => {
    const response = await fetch('./json/producto.json')
    const productos = await response.json()
    return productos
}

export {consultarBDD}