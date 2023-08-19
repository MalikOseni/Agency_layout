import map from "../assets/map.png";
import phone from '../assets/phone-call.png'
import mail from '../assets/send-mail.png'
const Contact = () => {
	return (
		<div className="contact-contain" id="contact">
			<div className="contact-wrapper">
				<div className="form-container">
					<h1 className="contact-title">
						Questions?
						<br /> Let`s Get In Touch
					</h1>
					<form action="">
						<div className="left-container">
							<input type="text" placeholder="Full Name" />
							<input type="text" placeholder="Email" />
							<input type="text" placeholder="Subject" />
						</div>
						<div className="right-container">
							<textarea name="" id="" cols="30" rows="10"></textarea>
							<button
								className="ctx-btn contacts"
								onClick={(e) => e.preventDefault()}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className="address-container">
					<div className="address-items">
						<img src={map} alt=""  className="addy-img"/>
						<span className="text">123 Glover Rd., Abuja, NIG</span>
					</div>
					<div className="address-items">
						<img src={phone} alt="" className="addy-img" />
						<div className="text">
						<span className="text">+234 907 223 8057</span>
						<span className="text">+234 812 284 8056</span>
						</div>
					</div>
					<div className="address-items">
						<img src={mail} alt="" className="addy-img" />
						<div className="text">
						<span className="text">osenimalik03@gmail.com</span>
						<span className="text">hosmaad@gmail.com</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
