import "../styles/mp/DefaultHeader.css";
import { Link } from 'react-router-dom';

export function DefaultHeather() {
  return (
    <div className='mp-defaultHeader'>
      <ul>
          <div>
            <li className='signin_button pointer mainButton'><Link to="/sign-in-up">Sign In</Link></li>
          </div>
          <div>
            <li className='signup_button pointer secondaryButton'><Link to="/sign-in-up">Sign Up</Link></li>
          </div>
      </ul>
    </div>
  )
}