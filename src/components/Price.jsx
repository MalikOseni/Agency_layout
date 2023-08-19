import PriceCard from "./PriceCard"

const Price = () => {
  return (
		<div id="pricing" className="price contain">
			<PriceCard types="Basic Plan" price={20} />
			<PriceCard types="Standard Plan" price={30} />
			<PriceCard types="Premium Plan" price={45} />
		</div>
	);
}

export default Price
