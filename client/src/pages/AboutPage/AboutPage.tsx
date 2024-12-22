import './AboutPage.css'
import { AppointmentModel } from '../../types/schemas';
import { useMyContext } from '../../Context';
import closestAppointment from '../../utilities/closestAppointment';
import ProfilePage from '../ProfilePage/ProfilePage';

const AboutPage = () => {
    const {user} = useMyContext()
     const closestAppoint : AppointmentModel | null = closestAppointment(user);
  return (
    <main className='AboutPage page'>
      <h1>{closestAppoint?.description}</h1>
      <h3>{closestAppoint?.start.toString()}</h3>
      
    </main>
  )
}

export default AboutPage
