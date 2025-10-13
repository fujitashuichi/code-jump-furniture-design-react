import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
	const location = useLocation;

	// ページパスに応じてwrapperを変える
	let wrapperClass = "";
	if (location === "/") {
		wrapperClass = "wrapper1360";
	} else if (location === "/products") {
		wrapperClass = "wrapper800";
	} else {
		wrapperClass = "wrapper600";
	}


	return (
		<div className="App">
			<Header />
				<div className={`${wrapperClass} wrapper`}>
					<Home />
				</div>
			<Footer />
		</div>
	);
}

export default App;
