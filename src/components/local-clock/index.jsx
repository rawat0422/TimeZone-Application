import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockDisplay from "../shared/clock-display";
import ClockActions from "../shared/clock-action";

const LocalClock = ({ clock, updateLocalClock }) => {

  const {date, offset, timezone} = useClock(clock.timezone, clock.offset)
  console.log(date,offset,timezone)


  useEffect(() => {
    updateLocalClock({
			date,
			timezone,
			offset,
		});
  }, [date])


  return <div>
    
    {date && (<ClockDisplay date={date} offset={offset} timezone={clock.timezone} title={clock.title} />)}
    <ClockActions clock={clock} updateLocalClock={updateLocalClock}/>

  </div>;
};

export default LocalClock;
