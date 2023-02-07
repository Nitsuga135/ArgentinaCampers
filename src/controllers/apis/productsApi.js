const db = require('../../database/models/index');

const Op = db.Sequelize.Op;


const controller = {
    products: async function (req, res) {


        let page = parseInt(req.query.page)


		let numeroParaLasiguientePagina;

		if(!page){
			numeroParaLasiguientePagina = 1
		} else if (page === 0 || page === 1) {
			numeroParaLasiguientePagina = 1
		} else if (page < 0) {
			numeroParaLasiguientePagina = 1
		} else {
			numeroParaLasiguientePagina = page
		}

        let numOffset = () => {
			if(!page || page === 0 || page === 1 || page < 0){
				return 0
			} else {
				return (page - 1) * 5
			}
		}

        let productos = await db.Productos.findAll({
			where: {
				estado_id: 1,
				estadoProducto: 1,
				stock: { [Op.gt]: 0 },
			},
            limit: 5,
			offset: numOffset()
		});

        let totalVentas = 0

        productos.map((product, i) => {
            totalVentas += parseInt(product.ventas)
        })


        let next;
		let previous;



		if(numeroParaLasiguientePagina < 0){
			next = null
		} else{
			next = `http://localhost:5000/api/products?page=${numeroParaLasiguientePagina + 1}`
		}

		if(numeroParaLasiguientePagina === 1){
			previous = null
		} else {
			previous = `http://localhost:5000/api/products?page=${numeroParaLasiguientePagina - 1}`
		}


        if(productos.length > 0) {
            res.json({
                count: productos.length,
                next,
				previous,
                data: productos,
                totalVentas: totalVentas,
                status: 200
            })
        } else {
            res.json({
                error: 'No hay productos',
                status: 400
            }) 
        }
    },
    productById: async function (req, res) {
        let id = req.params.idProducto

        let producto = await db.Productos.findByPk(id)

        if(producto) {
            res.json({
                data: producto,
                detail: `http://localhost:5000/products/${id}`,
                status: 200
            })
        } else {
            res.json({
                error: 'No existe este producto',
                status: 400
            }) 
        }
    },
    masPopular: async function (req, res) {

        let productos = await db.Productos.findAll({
			where: {
				estado_id: 1,
				estadoProducto: 1,
				stock: { [Op.gt]: 0 },
                ventas: { [Op.gte]: 5 }
			}
        });


        if(productos.length == 0) {
            res.json({
                data: productos,
                detalle: 'Ups, parece que no hay productos populares',
                status: 200
            })
        } else if (productos.length > 0) {
            res.json({
                data: productos,
                status: 200
            })
        } else {
            res.json({
                error: 'No existe',
                status: 400
            }) 
        }

       



    }
    // lastProductImage: async function (req, res) {
    //     let productos = await db.Productos.findAll({
	// 		where: {
	// 			estado_id: 1,
	// 			estadoProducto: 1,
	// 			stock: { [Op.gt]: 0 },
	// 		},
	// 	});

    //     let lastProductId = productos.length;
        
    //     let lastProduct = await db.Productos.findByPk(lastProductId, {
    //         include: [{association: 'imagenes'}]
    //     });

    //     if(lastProduct) {
    //         res.json({
    //             data: `http://localhost:5000/api/lastImage/${lastProductId}.png`,
    //             status: 200
    //         })
    //     } else {
    //         res.json({
    //             data: 'No hay producto',
    //             status: 400
    //         }) 
    //     }
    // },
    // showLastProductImage: async function (req, res) {
    //     let id = req.params.id

    //     let producto = await db.Productos.findByPk(id, {
    //         include: [{association: 'imagenes'}]
    //     });

    //     if(producto) {
    //         res.json({
    //             data: `http://localhost:5000/api/lastImage/${producto.imagenes[0].img}`,
    //             status: 200
    //         })
    //     } else {
    //         res.json({
    //             data: 'No hay producto',
    //             status: 400
    //         }) 
    //     }

        
    // }

}


module.exports = controller