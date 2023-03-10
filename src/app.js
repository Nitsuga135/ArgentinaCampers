const express = require('express');
const app = express();
const methodOverride = require ('method-override')
const session = require('express-session')
const cookies = require('cookie-parser')
const cors = require('cors');


const userLoggedMiddleware = require('./middlewares/globalesYruta/userLoggedMiddleware')
const adminPermissions = require('./middlewares/globalesYruta/adminMiddleware')





app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


//Middlewares
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'Secreto',
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());

app.use(userLoggedMiddleware);
app.use(adminPermissions);








//Rutas
const main = require ('./routes/main');
const productCart = require ('./routes/productCart');
const products= require ('./routes/products');
const users = require ('./routes/users');
const aboutUs= require('./routes/aboutUs');


const usersApi = require ('./routes/apis/usersApi');
const productsApi = require ('./routes/apis/productsApi')




app.use('/', main)
app.use('/', productCart)
app.use('/products', products)
app.use('/', users)
app.use('/', aboutUs)


app.use('/api', usersApi)
app.use('/api', productsApi)


//Inicializacion del servidor
app.listen(5000, ()=> {
    console.log("Server 5000 running");
});

