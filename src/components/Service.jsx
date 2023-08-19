import pryThree from "../assets/pry-2.jpg";
import Minicards from "./Minicards";
import play from "../assets/play.png";
import { useState } from "react";
import ReactPlayer from "react-player";
const Service = () => {
	const videoURL = "https://youtu.be/dQw4w9WgXcQ";
	const [isopen, setIsOpen] = useState(true);
	const togglerMode = () => {
		setIsOpen((prevvalue) => !prevvalue);
	};
	return (
		<div className="contain service" id="service">
			<div className="left service">
				{isopen && <img src={pryThree} alt="" />}
				{!isopen && <ReactPlayer className="video" url={videoURL} playing={true} loop={true}
					width={550} onBuffer={false} controls={true}
				/>}
			</div>
			<div className="right service">
				<div className="wrap">
					<div className="contents">
						<h1 className="title">Simple process to start</h1>
						<p className="desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
							quibusdam sapiente nisi est fugiat nobis dolorem suscipit labore
							quas nam aperiam saepe quae voluptatum, ab, quos, nesciunt illo
							qui cum ea sit. Veritatis, cum adipisci?
						</p>
					</div>
					<div className="cardcontent">
						<Minicards />
						<Minicards />
						<Minicards />
					</div>
					<button className="ctx-btn service-btn" onClick={togglerMode}>
						{" "}
						<img src={play} alt="" className="play" />
						How it works
					</button>
				</div>
			</div>
		</div>
	);
};

export default Service;
