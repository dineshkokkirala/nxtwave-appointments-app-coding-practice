// Write your code here
import './index.css'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format, parseISO} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

const Appointments = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [appointments, setAppointments] = useState([])
  const [starredAppointments, setStarredAppointments] = useState(false)

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeDate = e => {
    setDate(e.target.value)
  }

  const addAppointment = e => {
    e.preventDefault()
    // console.log(date)
    // console.log(format(new Date(2021, 19, 07), 'dd MMMM yyyy, EEEE'))
    // console.log(format(new Date('2021,19,07'), 'dd MMMM yyyy, EEEE'))
    const newAppointment = {
      id: uuidv4(),
      title,
      date: format(parseISO(date), 'dd MMMM yyyy, EEEE'),
      isFav: false,
    }
    // console.log(newAppointment)
    setAppointments([...appointments, newAppointment])
    setTitle('')
    setDate('')
  }

  const toggleFav = appointmentId => {
    setAppointments(prevAppointments =>
      prevAppointments.map(eachAppointment => {
        if (eachAppointment.id === appointmentId) {
          return {...eachAppointment, isFav: !eachAppointment.isFav}
        }
        return eachAppointment
      }),
    )
  }

  const getStarAppointments = () => {
    // setStarredAppointments(!starredAppointments)
    setAppointments(prevAppointments =>
      prevAppointments.filter(
        eachAppointment => eachAppointment.isFav === !starredAppointments,
      ),
    )
  }

  return (
    <div className="main-container">
      <div className="app-container">
        <h1>Add Appointments</h1>
        <div className="inputs-container">
          <form>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={onChangeTitle}
              placeholder="Title"
            />
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={onChangeDate}
            />
            <button type="submit" onClick={addAppointment} className="add-btn">
              Add
            </button>
          </form>
          <div>
            <img
              className="appointments-img"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
        </div>
        <hr className="break-line" />
        <div className="appointments-heading-container">
          <h1>Appointments</h1>
          <button
            className="starred-btn"
            type="button"
            onClick={getStarAppointments}
          >
            Starred
          </button>
        </div>
        <ul className="appointments-container">
          {appointments.map(eachAppointment => (
            <AppointmentItem
              key={eachAppointment.id}
              appointmentDetails={eachAppointment}
              onToggleFav={toggleFav}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Appointments
