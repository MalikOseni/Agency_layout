import Animation from "./Animation"
import pryPhoto from "../assets/pry-1.jpg"
const Intro = () => {
  return (
		<div className="hero" id="home">
			<div className="left-hero">
				<h1 className="title">Technology in Creative Age</h1>
				<p className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
					impedit voluptatibus hic, voluptas, illum provident autem voluptates,
					omnis assumenda molestiae recusandae ratione dolore dolores.
					Quibusdam?
				</p>
				<div className="info">
					<button className="ctx-btn">Create new Project</button>
					<div className="contact">
						<div className="phone">(+234) 907 223 8057</div>
						<div className="contacttxt">Reach out today !</div>
					</div>
				</div>
			</div>
			<div className="right-hero">
				<img src={pryPhoto} alt="" />
			</div>
			<Animation />
		</div>
	);
}

export default Intro
