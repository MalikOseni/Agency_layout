import { useRef } from "react";

const Nav = () => {
	// code to create the responsive navbar using UseRef
	const navRef = useRef();
	// toggle function to add class style to create effect
	const showNavBar = () => {
		const navitemsEl = document.querySelectorAll("nav ul li a");
		navitemsEl.forEach((items) => {
			items.addEventListener("click", () => {
				items.current.classList.toggle("responsive_nav");
			});
		});
		// navRef reference the nav tag which operation is performed on.
		navRef.current.classList.toggle("responsive_nav");
	};
	return (
		<header className="wrapper">
			<div className="left">
				<button className="btn-menu btn-open" onClick={showNavBar}>
					<i className="bx bx-menu-alt-left"></i>
				</button>
				<div className="logo">
					<h1>Agency</h1>
				</div>
				{/* navRef reference using ref=navRef */}
				<nav ref={navRef}>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#feature">Feature</a>
						</li>
						<li>
							<a href="#service">Service</a>
						</li>
						<li>
							<a href="#pricing">Pricing</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
					<button className="btn-menu btn-close" onClick={showNavBar}>
						<i className="bx bx-x"></i>
					</button>
				</nav>
			</div>
			<div className="right">
				<button className="btn-login">Join Now</button>
			</div>
		</header>
	);
};

export default Nav;
