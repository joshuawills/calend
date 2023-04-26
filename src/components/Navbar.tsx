import '../styling/Navbar.css'
import { CalendarMonth, AccountCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navigationHeader">

      <Link to = "/" className="text-link">
        <div className="navigationLogo">
          <h1>Calend</h1> 
          <CalendarMonth fontSize="large"/>
        </div>
      </Link>

      <div className="navigationUserInteraction">
        <ul>
          <li><Link to = "/board" className="text-link">your board</Link></li>
          <li><Link to = "/calendar" className="text-link">your calendar</Link></li>
          <li><Link to = "/deadlines" className="text-link">your deadlines</Link></li>
          <li><Link to = "/createissue" className="text-link">create a new issue</Link></li>
          <li><Link to = "/profile" className="text-link"><AccountCircle fontSize="large" /></Link></li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar
