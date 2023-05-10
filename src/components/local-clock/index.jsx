import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockDisplay from "../shared/clock-display";
import ClockActions from "../shared/clock-action";

const LocalClock = ({ clock, updateLocalClock,creatClock }) => {

  const {date, offset, timezone} = useClock(clock.timezone, clock.offset)
  
  


  useEffect(() => {
    updateLocalClock({
			date,
			timezone,
			offset,
		});
  }, [date])


  return <div>
    
    {date && (<ClockDisplay date={date} offset={offset} timezone={timezone} title={clock.title} />)}
    <ClockActions creatClock={creatClock} clock={clock} updateClock={updateLocalClock} local={true}/>

  </div>;
};

export default LocalClock;
