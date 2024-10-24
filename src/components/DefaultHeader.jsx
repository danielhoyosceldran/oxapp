import "../styles/mp/DefaultHeader.css"

export function DefaultHeather() {
  return (
    <div className='mp-defaultHeader'>
      <ul>
          <div>
            <li className='signin_button pointer'><a href="#">sign in</a></li>
          </div>
          <div>
            <li className='signup_button pointer'><a href="#">sign up</a></li>
          </div>
      </ul>
    </div>
  )
}