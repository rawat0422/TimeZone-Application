import useClock from "../../hooks/useClock"
import ClockActions from "../shared/clock-action"
import ClockDisplay from "../shared/clock-display"
import {formatDistance} from 'date-fns'

const ClockListItem = ({ clock,updateClock,deleteClock,localClock }) => {
    console.log(clock)
 
    const { date } = useClock(clock.timezone, clock.offset)
    if (!date) return null;
    return <>
        <ClockDisplay date={date} title={clock.title} timezone={clock.timezone} offset={clock.offset} />
        <h3>Time difference:{formatDistance(localClock, date)} </h3>
        <ClockActions clock={clock} updateClock={updateClock}  deleteClock={deleteClock} />
        

    </>

}



export default ClockListItem