import './ChristmasLights.scss'

const ChristmasLights = () => {
	const lights = 50

	return [...Array(lights)].map((e, i) => <li key={i}></li>)
}

export default ChristmasLights
