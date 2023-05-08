import React, { useEffect,useState } from 'react'
import { TIMEZONE_OFFSET } from '../../../constants/timezone'
import { getOffset } from '../../../utils/timezone'

const ClockForm = ({
    value = { title: '', timezone: 'UTC', offset: 0 }, handleClock, title = true, edit = false
}) => {




    const [formValues, setFormValues] = useState({ ...value })


    useEffect(() => {
        if (TIMEZONE_OFFSET[formValues.timezone]) {
            setFormValues({
                ...formValues,
                offset: TIMEZONE_OFFSET[formValues.timezone]
            })
        }
    }, [formValues.timezone])


    const handleChange = (e) => {
        let { name, value } = e.target
        if (name === 'offset') {
            value = Number(value) * 60
        }


        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleClock(formValues)
    }




    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Title</label>
                <input type="text" name="title" id="title" value={formValues.title} onChange={handleChange} disabled={!title} />
            </div>
            <div>
                <label htmlFor="timezone">Select TimeZone</label>
                <select name="timezone" id="timezone" value={formValues.timezone} onChange={handleChange}>
                    <option value="GMT">GMT</option>
                    <option value="UTC">UTC</option>
                    <option value="PST">PST</option>
                    <option value="EST">EST</option>
                    <option value="EDT">EDT</option>
                    <option value="BST">BST</option>
                    <option value="MST">MST</option>
                </select>
            </div>


            {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
                <div>
                    <label htmlFor="offset">Enter Offset</label>
                    <select name="offset" id="offset" onChange={handleChange} value={formValues.offset / 60}>
                    {getOffset().map((offset) => (
							<option key={offset} value={offset}>
								{offset}
							</option>
						))}
                    </select>
                </div>
            )}
            <button>{edit ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default ClockForm