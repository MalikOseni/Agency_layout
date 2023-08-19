import pryTwo from "../assets/pry-3.jpg";
import Animation from "./Animation";
const Feature = () => {
	return (
		<div className="contain" id="feature">
			<div className="left feature">
				<img src={pryTwo} alt="" />
			</div>
			<div className="right feature">
				<span className="title">
					<b>good</b> design
					<br />
					<b>good</b> business
				</span>
				<span className="subTitle">
					We know that good design means good business.
				</span>
				<span className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo
					accusamus quibusdam recusandae consectetur sint atque incidunt. Vel,
					harum temporibus.
				</span>
				<span className="desc">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
					esse.
				</span>
				<button className="ctx-btn feature-btn">Learn More</button>
			</div>
			<Animation />
		</div>
	);
};

export default Feature;
