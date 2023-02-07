window.addEventListener('load', () => {


    const stockDelProducto = document.getElementById('stock-del-producto')
    const subirStock = document.getElementById('subir-stock')
    const bajarStock = document.getElementById('bajar-stock')


    let stockExistente = stockDelProducto.value
   
    subirStock.addEventListener('click', subirStockFunction)
    
    bajarStock.addEventListener('click', bajarStockFunction)


    stockDelProducto.addEventListener('change', () => {
        if(stockDelProducto.value <= 0) {
            stockDelProducto.value = stockExistente
        } else if (stockDelProducto.value == '' || stockDelProducto.value == undefined) {
            stockDelProducto.value = stockExistente
        } else if (!Number(stockDelProducto.value)) {
            stockDelProducto.value = stockExistente
        }
    })


    function subirStockFunction () {
        stockDelProducto.value++        
        if(stockDelProducto.value <= 0) {
            stockDelProducto.value = 1
        } else if (stockDelProducto.value == '' || stockDelProducto.value == undefined) {
            stockDelProducto.value = stockExistente
        } else if (!Number(stockDelProducto.value)) {
            stockDelProducto.value = stockExistente
        }
    }

    function bajarStockFunction () {
        stockDelProducto.value--
        if(stockDelProducto.value <= 0) {
            stockDelProducto.value = 1
        } else if (stockDelProducto.value == '' || stockDelProducto.value == undefined) {
            stockDelProducto.value = stockExistente
        } else if (!Number(stockDelProducto.value)) {
            stockDelProducto.value = stockExistente
        }
    }
})



