import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [taskTime, setTaskTime] = useState('08:00')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, taskTime, reminder })
        setText('')
        setDay('')
        setTaskTime('')
        setReminder('false')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control' >
                <label>Job</label>
                <input type='text' placeholder='Enter Task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control' >
                <label>Day</label>
                <input type='date' placeholder='Enter Date'
                    value={day} 
                    onChange={(e) => setDay(e.target.value)}
                    required='required'
                />
            </div>
            <div className='form-control'>
                <input type='time' placeholder='Enter Time'
                    value={ taskTime }
                    onChange={(e) => setTaskTime(e.target.value)}
                    required='required'
                />
            </div>
            <div className='form-control form-control-check' >
                <label>Reminder</label>
                <input 
                    type='checkbox'
                    // checked={reminder}
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
