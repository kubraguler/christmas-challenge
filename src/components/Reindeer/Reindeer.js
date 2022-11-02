import "./Reindeer.scss";
import image from "../../assets/images/deer-jumping.svg";

const Reindeer = () => {
	return (
		<div className='reindeer'>
			<img className='reindeer-icon' src={image} alt='reindeer' />
		</div>
	);
};

export default Reindeer;
