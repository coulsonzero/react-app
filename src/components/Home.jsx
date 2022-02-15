import React from "react";

import img1 from "../imgs/homeBg/1.jpg";
import img2 from "../imgs/homeBg/2.jpg";
import img3 from "../imgs/homeBg/3.jpg";
import img4 from "../imgs/homeBg/4.jpg";
import img5 from "../imgs/homeBg/5.jpg";
import img6 from "../imgs/homeBg/6.jpg";
import img7 from "../imgs/homeBg/7.jpg";
import github   from "../imgs/home/github.svg";
import codepen  from "../imgs/home/codepen.svg";
import awwwards from "../imgs/home/awwwards.png";

const Home = () => {
	const prev = () => {
		console.log("hello")
	}
	return (
		<section className="home" id="home">
			{/* <!-- ===== 文本内容 ===== --> */}
			<div className="content">
				<div className="content-name">
					<span>C</span>oulson <span>Z</span>ero
				</div>
				<p>front-end developer</p>
				<a href="#" className="content-btn">
					<span>Get Started</span>
					<div className="arrow">
						<div className="bar"></div>
						<div className="triangle"></div>
					</div>
				</a>
			</div>

			{/* <!-- background-color --> */}
			<div className="home__background"></div>

			{/* <!-- ===== 背景图片 ===== --> */}
			<img src={img1} alt="homeBg" className="img-slider" />

			{/* <!-- ===== 背景图片分页器 ===== --> */}
			<div className="swiper-pagination">
				<span data-src={img1} className="img-btn active"></span>
				<span data-src={img2} className="img-btn"></span>
				<span data-src={img3} className="img-btn"></span>
				<span data-src={img4} className="img-btn"></span>
				<span data-src={img5} className="img-btn"></span>
				<span data-src={img6} className="img-btn"></span>
				<span data-src={img7} className="img-btn"></span>
			</div>

			{/* <!-- ===== 背景图片切换按钮 ===== --> */}
			<div className="img-toggle">
				<div
					className="swiper-button-prev swiper-button"
					onClick={prev}></div>
				<div
					className="swiper-button-next swiper-button"
					onClick="next()"></div>
			</div>

			{/* <!-- ===== icons ====== --> */}
			<ul className="social">
				<li className="social-item">
					<a href="https://github.com/coulsonzero/" target="_black" rel="noreferrer">
						<img src={github} alt="github"/>
					</a>
					<div className="box-tooltip" data-name="github">
						<div className="tooltip-text" data-color="github">
							Github
						</div>
					</div>
				</li>
				<li className="social-item">
					<a href="https://codepen.io/coulsonzero" target="_black" rel="noreferrer">
						<img src={codepen} alt="codepen" />
					</a>
					<div className="box-tooltip" data-name="codepen">
						<div className="tooltip-text" data-color="codepen">
							CodePen
						</div>
					</div>
				</li>
				<li>
					<div className="icon-line"></div>
				</li>
			</ul>
			{/* <!-- === Awwwards === --> */}
			<div id="awwwards" className="awwwards">
				<a href="http://www.awwwards.com" target="_blank" rel="noreferrer">
					<img src={awwwards} alt="awwwards" />
				</a>
			</div>
		</section>
	);
};

export default Home;
