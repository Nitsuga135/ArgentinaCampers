import { Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react'

//Componentes estaticos
import SideBar from './statics/SideBar/SideBar';
import Header from './statics/Header/Header';
// import Footer from './statics/Footer/Footer';   
import Cards from './statics/Cards/Cards';
import Error from './statics/Error/Error'

//Componentes dinamicos
import Main from './dinamics/Main/Main';
import Users from './dinamics/Users/Users';
import Products from './dinamics/Products/Products';



import './app.css';

function App() {

	


	return (
		<div className='bodyPage'>
			<div className='pageLeftContent'>
				<SideBar />
			</div>
			<div className='pageRigthContent'>
				<Header />
                <Cards />
                <div className='dinamicContent'>
					<Routes>
						<Route path='/' exact={true} element={ <Main /> } />
						<Route path='/users' exact={true} element={ <Users /> } />
						<Route path='/products' exact={true} element={ <Products /> } />

						<Route path='*' element={ <Error /> }/>
					</Routes>
                </div>
                {/* <Footer /> */}
			</div>
		</div>
	);
}

export default App;
