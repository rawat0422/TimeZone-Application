import { useState } from "react";
import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";
import { generate } from "shortid";



const LocalClockInit = {
  title: 'My Clock',
  timezone: null,
  offset: 0,
  date: null
}

function App() {


  const [localClock, setLocalClock] = useState({ ...LocalClockInit })
  const [clocks, setClocks] = useState([])
  const createClock = (clock) => {
    clock.id = generate()

    setClocks([...clocks, clock])

  }

  const updateClock = (updatedClock) => {
		const updatedClocks = clocks.map((clock) => {
			if (clock.id === updatedClock.id) {
				return updatedClock;
			}
			return clock;
		});
		setClocks(updatedClocks);
	};

  const deleteClock = (id) => {
    console.log(id)
    const updatedClocks = clocks.filter((clock) => clock.id !== id)

    setClocks(updatedClocks)
  }
  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data
    })


  }
  return (
    <div>

      <LocalClock clock={localClock} updateLocalClock={updateLocalClock} creatClock={createClock} />
      <ClockList updateClock={updateClock} deleteClock={deleteClock} clocks={clocks} localClock={localClock.date} />
    </div>
  );
}

export default App;
