import React from "react";

import nav_logo from "../imgs/header/Z-logo.png";

const Navbar = () => {
	return (
		<div className="header" id="header">
			<nav className="nav">
				<a href="#home" className="logo">
					<img src={nav_logo} alt="Z" className="nav_logo" />
					<span>Coulson Zero</span>
				</a>
				<ul className="navbar">
					<li>
						<a href="#home" className="active">
							Home
						</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="/docs">Docs</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="#community">Community</a>
					</li>
				</ul>
				<div className="icons">
					<i className="bx bx-moon change-theme" id="theme-button"></i>
					<span className="datetime"></span>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
