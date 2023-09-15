	import React from "react";
	import { Parallax } from "react-parallax";
	import bgImage from "./img1.jpg"; // Replace with the path to your background image
	import "./styles.css"; // Add your custom styles here

	const HomeSection = () => {
		return (
			<section>
				<div className="box">
					{/* Parallax Component */}
					<Parallax bgImage={bgImage} strength={500} className="parallax">
						<h2>Awesome Parallax Scrolling</h2>
					</Parallax>

					<div className="container">
					<Parallax y={[0, -200]}>
              <div className="content" data-jarallax-element="-200 0">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Totam esse accusantium beatae cupiditate officiis consequatur
                  ipsam dolorem non earum porro temporibus sapiente deleniti
                  inventore quis possimus et, incidunt eum fugit.
                </p>
              </div>
            </Parallax>
					</div>
				</div>
			</section>
		);
	};

	export default HomeSection;
