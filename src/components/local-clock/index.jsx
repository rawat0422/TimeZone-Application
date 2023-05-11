import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockDisplay from "../shared/clock-display";
import ClockActions from "../shared/clock-action";
import useTime from "../../hooks/useTime";

const LocalClock = ({ clock, updateLocalClock,creatClock }) => {

  const {date, offset, timezone} = useClock(clock.timezone, clock.offset)
  
  
    const timer=useTime(date)

  useEffect(() => {
    updateLocalClock({
			date,
			timezone,
			offset,
		});
  }, [date])


  return <div>
    
    {timer && (<ClockDisplay date={timer} offset={offset} timezone={timezone} title={clock.title} />)}
    <ClockActions creatClock={creatClock} clock={clock} updateClock={updateLocalClock} local={true}/>

  </div>;
};

export default LocalClock;
