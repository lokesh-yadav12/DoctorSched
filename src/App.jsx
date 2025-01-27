
import {Route,Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Contacts } from './pages/Contacts'
import { About } from './pages/About'
import { Doctors } from './pages/Doctors'
import { Login } from './pages/Login'
import { MyProfile } from './pages/MyProfile'
import { Appointment } from './pages/Appointment'
import { MyAppointment } from './pages/MyAppointment'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='mx-12'>
        
        <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contacts' element={<Contacts/>} />
      <Route path='/doctors' element={<Doctors/>} />
      <Route path='/doctors/:Speciality' element={<Doctors/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/my-profile' element={<MyProfile/>} />
      <Route path='/my-appointment' element={<MyAppointment/>} />
      <Route path='/appointment/:docId' element={<Appointment/>} />
    </Routes>
    <Footer/>
      
  
    </div>
  
      
  
  )
}

export default App
