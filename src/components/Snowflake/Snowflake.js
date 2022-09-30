import './Snowflake.scss'

const Snowflake = () => {
	const snow = 50

	return [...Array(snow)].map((e, i) => (
		<div key={i} className='snowflake'></div>
	))
}

export default Snowflake
