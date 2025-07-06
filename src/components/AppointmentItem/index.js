// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, onToggleFav} = props

  const starImg = !appointmentDetails.isFav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const toggleStar = () => {
    onToggleFav(appointmentDetails.id)
  }

  return (
    <li className="each-appointment-container" key={appointmentDetails.id}>
      <div className="star-container">
        <p>{appointmentDetails.title}</p>
        <button
          data-testid="star"
          type="button"
          className="star-btn"
          onClick={toggleStar}
        >
          <img src={starImg} alt="star" className="star-img" />
        </button>
      </div>
      <p>{appointmentDetails.date}</p>
    </li>
  )
}

export default AppointmentItem
