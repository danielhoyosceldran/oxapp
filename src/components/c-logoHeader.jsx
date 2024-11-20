import { Link } from "react-router-dom";



export function BasicHeader() {
  return (
    <Link to={"/"}><img className="basicHeaderLogo" src={oxapp_logo} alt="oxapp logo"/></Link>
  )
}