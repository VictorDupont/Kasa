import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Rental from "./pages/Rental";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
		// Router est un composant qui permet de gérer les routes
		<Router>
			<Header />
			{// Routes est un composant qui permet de regrouper les routes
			}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/rental/:id" element={<Rental />} />
				{// Si aucune route ne correspond, on redirige vers la page 404
				}
				<Route path="*" element={<Navigate replace to="/404" />} />
				<Route path="/404" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
);
