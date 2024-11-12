import "../styles/mp/DefaultHeader.css";
import { Link } from 'react-router-dom';

export function DefaultHeather() {
  return (
    <div className='mp-defaultHeader'>
      <ul>
          <div>
            <li className='signin_button pointer'><Link to="/sign-in-up">sign in</Link></li>
          </div>
          <div>
            <li className='signup_button pointer'><Link to="/sign-in-up">sign up</Link></li>
          </div>
      </ul>
    </div>
  )
}