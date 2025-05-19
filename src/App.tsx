import './App.css'
import  Header  from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import WhatsApp from './components/WhatsApp'
//import { Link } from 'react-router-dom'

function App() {
  
  return (
    <div>
      <Header/>
        <main>
          <Outlet/>
        </main>
      <Footer/>
      
    </div>
  )
}

export default App
