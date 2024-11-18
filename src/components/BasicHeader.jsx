import "../styles/cp/basicHeader.css";
import dark_logo from "../imgs/logo/transparent_logo.png";
import { Link } from "react-router-dom";

export function BasicHeader() {
  return (
    <Link to={"/"}><img className="basicHeaderLogo" src={dark_logo} alt="oxapp logo"/></Link>
  )
}