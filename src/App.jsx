import { useState } from "react";
import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useClock from "./hooks/useClock";



const LocalClockInit = {
  title: 'My Clock',
  timezone: null,
  offset: 0,
  date: null
}

function App() {
  

  const [localClock, setLocalClock] = useState({ ...LocalClockInit })


  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data
    })


  }
  return (
    <div>
      
      <LocalClock clock={localClock} updateLocalClock={updateLocalClock} />
      <ClockList />
    </div>
  );
}

export default App;
