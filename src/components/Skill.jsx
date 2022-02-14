import React from "react";

const Skill = () => {
	return (
		<section className="skill" id="skill">
			<div className="skill__container">
				<div className="skill__title">Skill</div>
				<div className="skill__cards">
					<div className="skill-card-font-end">
						<div className="skill-card-title">Font-end</div>
						<div className="skill-languages">
							<a href="#">HTML</a>
							<a href="#">CSS</a>
							<a href="#">Javascript(ES6)</a>
							<a href="#">Scss</a>
						</div>
						<div className="skill-pack">
							<a href="#">Jquery</a>
							<a href="#">Vue</a>
							<a href="#">React</a>
							<a href="#">Echarts</a>
							<a href="#">Ajax</a>
						</div>
						<div className="skill-develop">
							<a href="#">three.js</a>
						</div>
					</div>
					<div className="skill-card-back-end">
						<div className="skill-card-title">Back-end</div>
						<div className="skill-languages">
							<a href="Python3">
								<div className="skill-pack">
									<a href="#">pyautogui</a>
									<a href="#">Tkinter</a>
									<a href="#">openpyxl</a>
									<a href="#">easyocr</a>
									<a href="#">pyinstaller</a>
									<a href="#">pyecharts</a>
									<a href="#">urllib</a>
									<a href="#">selenuim</a>
									<a href="#">pandas</a>
									<a href="#">numpy</a>
									<a href="#">matplotlib</a>
									<a href="#">Django</a>
									<a href="#">pyqt/pyside</a>
								</div>
							</a>
							<a href="Java">
								<div className="skill-pack">
									<a href="#">springboot</a>
									<a href="#">springcloud</a>
									<a href="#">JDBC</a>
								</div>
							</a>
							<a href="Go"></a>
						</div>
					</div>
					<div className="skill-card-tools">
						<div className="skill-card-title">Tools</div>
						<div className="skill-languages">Linux</div>
						<div className="skill-languages">SQL</div>
						<div className="skill-languages">Git</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skill;
