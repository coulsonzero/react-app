import React from "react";

const Footer = () => {
	return (
		<footer className="footer" id="footer">
			<div className="container footer__container">
				<div className="footer__inner">
					<div className="row justify-content-between">
						<div className="col">
							<a className="nav-main__link" href="#">
								<div className="logo-main">
									<div className="logo-main__text1">Coulson&nbsp;Zero</div>
								</div>
							</a>
							<div className="footer__socials">
								<div className="socials-links__link-group">
									<div className="socials-links__link-el">
										<a
											className="socials-links__link"
											href="#"
											rel="noopener"
											target="_blank">
											Instagram
										</a>
									</div>
									<div className="socials-links__link-el">
										<a
											className="socials-links__link"
											href="#"
											rel="noopener"
											target="_blank">
											Telegram
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-auto">
							<div className="menu">
								<div className="menu__list d-flex">
									<div className="menu-el menu__list-el">
										<a className="menu-el__link" href="#home">
											<div className="menu-el__text">Home</div>
										</a>
									</div>
									<div className="menu-el menu__list-el">
										<a className="menu-el__link" href="#about">
											<div className="menu-el__text">About</div>
										</a>
									</div>
									<div className="menu-el menu__list-el">
										<a className="menu-el__link" href="#footer">
											<div className="menu-el__text">Docs</div>
										</a>
									</div>

									<div className="menu-el menu__list-el">
										<a className="menu-el__link" href="#contact">
											<div className="menu-el__text">Contact</div>
										</a>
									</div>
									<div className="menu-el menu__list-el">
										<a className="menu-el__link" href="#community">
											<div className="menu-el__text">Community</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom footer__bottom">
						<div className="footer-bottom__menu">
							<div className="footer-bottom__menu-el">
								<a className="footer-bottom__link" href="#footer">
									Privacy Policy
								</a>
							</div>
							<div className="copyright">
								&copy;
								<script>document.write(new Date().getFullYear() + ' ');</script>
								coulsonzero. All rights reserved.
							</div>
						</div>

						<div className="footer-bottom__menu devby">
							<div className="footer-bottom__menu-el">
								Development
								<a className="footer-bottom__link" href="#footer">
									CoulsonZero
								</a>
							</div>
							<div className="footer-bottom__menu-el">
								Design
								<a className="footer-bottom__link" href="#footer">
									CoulsonZero
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
