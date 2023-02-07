const db = require('../../database/models/index.js');

const Op = db.Sequelize.Op;

const controller = {
	users: async function (req, res) {

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

		let users = await db.Users.findAll({
			where: {
				estadoCuenta: 1,
			},
			limit: 5,
			offset: numOffset()
		});


		users.map((user,i) => {
			user.password = undefined;
		})

		let next;
		let previous;



		if(numeroParaLasiguientePagina < 0){
			next = null
		} else{
			next = `http://localhost:5000/api/users?page=${numeroParaLasiguientePagina + 1}`
		}

		if(numeroParaLasiguientePagina === 1){
			previous = null
		} else {
			previous = `http://localhost:5000/api/users?page=${numeroParaLasiguientePagina - 1}`
		}


		if (users.length > 0) {
			res.json({
				count: users.length,
				next,
				previous,
				data: users,
				status: 200,
			});
		} else {
			res.json({
				error: 'No hay usuarios',
				status: 400,
			});
		}
	},
	usersById: async function (req, res) {
		let id = req.params.idUser;

		let user = await db.Users.findByPk(id);

		user.password = undefined;
		user;

		if (user) {
			res.json({
				data: user,
				detail: `http://localhost:5000/search?searchingUsers=${user.firstName}`,
				status: 200,
			});
		} else {
			res.json({
				error: 'No existe este usuario',
				status: 400,
			});
		}
	},
	userName: function (req, res) {
		let user = req.session.userLogged;

		if (user && user.typeOfUser == 1) {
			db.Users.findByPk(user.id)
				.then((data) => {
					res.json({
						data: data,
						status: 200,
					});
				})
				.catch((err) => {
					if (err) {
						res.json({
							error: 'No hay nada',
							status: 400,
						});
					}
				});
		} else {
			res.json({
				error: 'No hay nada',
				status: 400,
			});
		}
	},
};

module.exports = controller;
