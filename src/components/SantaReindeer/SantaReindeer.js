import "./SantaReindeer.scss";
import image from "../../assets/images/deer-jumping.svg";

const SantaReindeer = () => {
	return (
		<div className='santa-reindeer'>
			<img className='santa-smiles' src={image} alt='santa smiles' />
		</div>
	);
};

export default SantaReindeer;
