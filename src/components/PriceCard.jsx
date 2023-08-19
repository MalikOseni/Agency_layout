import PropTypes from "prop-types";
const PriceCard = ({ types, price}) => {
	return (
		<div className="pricecard-container">
			<div className="pricing-container">
				<div>
					$<span className="priced">{price}</span>/month
				</div>
				<button className="type ctx-btn">{types}</button>
				<ul className="list">
					<li className="listitems">200 Hand-Crafted Templates</li>
					<li className="listitems">Exclusive Support</li>
					<li className="listitems">50+ PreBuilt Websites</li>
					<li className="listitems">Premium Plugins</li>
				</ul>
				<button className="ctx-btn">Join Now</button>
			</div>
		</div>
	);
};
PriceCard.propTypes = {
	types: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};
export default PriceCard;
