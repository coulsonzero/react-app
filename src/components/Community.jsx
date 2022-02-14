import React from "react";

import macbook from "../imgs/mac-container/macbookpro13.png";
import screen from "../imgs/mac-container/dark-homepage.png";

const Community = () => {
	return (
		<section className="community" id="community">
			<div className="Title">Community</div>
			<div className="mac-container">
				<div className="mac">
					<img src={macbook} alt="macbook" />
					<div className="picture">
						<img src={screen} alt="page" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Community;
