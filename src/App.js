import Snowflake from "./components/Snowflake/Snowflake";
import ChristmasLights from "./components/ChristmasLights/ChristmasLights";
import Moon from "./components/Moon/Moon";
import SantaReindeer from "./components/SantaReindeer/SantaReindeer";

import "./App.scss";

function App() {
	return (
		<div className='App'>
			<Snowflake />
			<ul className='lightrope'>
				<ChristmasLights />
			</ul>
			<Moon />
			<SantaReindeer />
		</div>
	);
}

export default App;

/**
Santas reindeer names
-Dasher
-Dancer
-Prancer
-Vixen
-Comet
-Cupid
-Donner
-Blitzen
-Rudolph
*/
