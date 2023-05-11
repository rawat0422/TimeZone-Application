import useClock from "../../hooks/useClock"
import useTime from "../../hooks/useTime"
import ClockActions from "../shared/clock-action"
import ClockDisplay from "../shared/clock-display"
import {formatDistance} from 'date-fns'

const ClockListItem = ({ clock,updateClock,deleteClock,localClock }) => {
  
 
    const { date } = useClock(clock.timezone, clock.offset)
    const timer=useTime(date)
    if (!date ||!timer) return null;
    

    return <>
        <ClockDisplay date={timer} title={clock.title} timezone={clock.timezone} offset={clock.offset} />
        <h3>Time difference:{formatDistance(localClock, timer)} </h3>
        <ClockActions clock={clock} updateClock={updateClock}  deleteClock={deleteClock} />
        

    </>

}



export default ClockListItem