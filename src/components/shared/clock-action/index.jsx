import React, { useState } from 'react'
import ClockForm from '../clock-form/clockForm'



const ClockActions = ({ local = false, clock, updateLocalClock }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const handleClock = (value) => {
        console.log(value)

    }
    return (
        <div>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            {local ? (
                <button onClick={() => setIsCreate(!isCreate)}>Create</button>
            ) : (
                <button>Delete</button>
            )}
            {isEdit && <>
                <h3>Edit Clock</h3>
                <ClockForm handleClock={updateLocalClock}  edit={true} title={!local} value={clock}/>
            </>}

            {isCreate && (
				<>
					<h3>Create New Clock</h3>
					<ClockForm handleClock={handleClock} />
				</>
			)}
        </div>

    )


}

export default ClockActions