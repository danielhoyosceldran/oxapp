import { Link } from 'react-router-dom';

import Next from "../assets/icons/next-dm.svg";
import Logo from "../assets/logo/transparent_logo.png"

import "../styles/landingPage/s-landingPage.css"
import "../styles/landingPage/s-aside.css"
import "../styles/landingPage/s-footer.css"

export default function LandingPage() {
    return (
        <div className='lp-body'>
            <div>
                <aside className='lp-aside g-flex g-horizonal-center-flex g-vertical-center-flex'>
                    <div className='g-pointer'>
                        <Link to="/access"><img className='lp-aside-img' src={Next} alt="" /></Link>
                    </div>
                </aside>
                <div className='lp-content-container'>
                    <div className='lp-content-title'>
                        <div className='g-flex g-horizonal-center-flex g-vertical-center-flex'>
                            <img src={Logo} alt="" />
                            <h1>OXAPP</h1>
                        </div>
                    </div>
                    <section className='lp-content-about'>

                    </section>
                </div>
            </div>
            <footer className='lp-footer'>

            </footer>
        </div>
    );
}