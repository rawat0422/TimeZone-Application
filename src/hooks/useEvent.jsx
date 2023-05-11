import React, { useState } from 'react'
import shortid from 'shortid'

const useEvent = () => {

    const [state, setState] = useState({})


    const getEventByClockId = (clockId) => {
        return Object.keys(state).filter((item) => item.startsWith(clockId))

    }


    const getEvents = (isArray = false) => {
        if (!isArray) return state
        return Object.values(state)

    }


    const addEvent = (event) => {
        event.id = shortid.generate()
        const { id, clockId } = event
        setState({
            ...state,
            [`${clockId}|${id}`]: event
        })

        return event

    }


    const deleteEvent = (id) => {
        const events = { ...state }
        delete events[id]
        setState(events)
    }


    const deleteEventByClock = (clockId) => {
        const events = Object.keys(state).filter((item) => !item.startsWith(clockId))
        setState(events)
    }



    const updateEvent = (updatedEvent, id) => {
        const events = { ...state }
        events[id] = {
            ...events[id],
            ...updatedEvent,
        }
        setState(events)
    }


    return {
        events: state, getEventByClockId,
        getEvents, addEvent, deleteEvent, deleteEventByClock, updateEvent
    }
}

export default useEvent