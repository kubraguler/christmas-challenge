import Snowflake from "./components/Snowflake/Snowflake";
import ChristmasLights from "./components/ChristmasLights/ChristmasLights";
import Moon from "./components/Moon/Moon";
import CalculateDate from "./components/Days/Days";

import "./App.scss";

function App() {
	return (
		<div className='App'>
			<Snowflake />
			<ul className='lightrope'>
				<ChristmasLights />
			</ul>
			<Moon />
			<CalculateDate />
		</div>
	);
}

export default App;
