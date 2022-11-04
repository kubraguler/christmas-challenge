import "./Reindeer.scss";
// import image from "../../assets/images/deer-jumping.svg";

const CalculateDate = () => {
	const currentDate = new Date();
	const myDate = new Date();
	myDate.setFullYear(2022, 11, 13);

	let timeLeft = myDate - currentDate;
	timeLeft = timeLeft / 1000;

	let seconds = Math.floor(timeLeft % 60);
	timeLeft = timeLeft / 60;

	let minutes = Math.floor(timeLeft % 60);
	timeLeft = timeLeft / 60;

	let hours = Math.floor(timeLeft % 24);
	let days = Math.floor(timeLeft / 24);

	console.log(days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds");

	return (
		<div className='days'>
			<b>Until my holiday: {days} days left!</b>
		</div>
	);
};

// const Reindeer = () => {
// 	return (

// 		<div className='reindeer'>
// 			<img className='reindeer-icon' src={image} alt='reindeer' />
// 		</div>
// 	);
// };

export default CalculateDate;
