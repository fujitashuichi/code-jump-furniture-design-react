import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomePage from "./pages/HomePage.js";
import ProductsPage from "./pages/ProductsPage.js";
import ItemPage from './pages/ItemPage.js';
import NotFoundPage from "./pages/NotFoundPage.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
	return (
		<BrowserRouter>
			<div className="pageWrapper">
				<Header />
				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route exact path='/index.html' element={<HomePage />} />
					<Route exact path='/products' element={<ProductsPage />} />
					<Route exact path='/item/:id' element={<ItemPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
