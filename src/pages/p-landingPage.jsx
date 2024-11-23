import { Link } from 'react-router-dom';

import Next from "../assets/icons/next-dm.svg";
import Github from "../assets/icons/github-dm.svg";
import Logo from "../assets/logo/transparent_logo.png";

import "../styles/landingPage/s-landingPage.css"
import "../styles/landingPage/s-aside.css"
import "../styles/landingPage/s-footer.css"
import "../styles/landingPage/s-about.css"
import "../styles/landingPage/s-title.css"

export default function LandingPage() {
    return (
        <div className='lp-body'>
            <div className='g-flex'>
                <div className='lp-content-container'>
                    <div className='lp-content-title g-flex g-vertical-center-flex g-horizonal-center-flex'>
                        <a href="#lp-content-about-id" className='g-flex g-horizonal-center-flex g-vertical-center-flex g-flex-gap20'>
                            <img src={Logo} alt="" />
                            <h1>OXAPP</h1>
                        </a>
                    </div>
                    <div className='lp-divider'></div>
                    <section className='lp-content-about g-flex g-flex-col g-vertical-center-flex g-flex-gap40' id='lp-content-about-id'>
                        <div></div>
                        <h1>ABOUT</h1>
                        <div className='g-flex g-flex-col g-vertical-center-flex g-flex-gap10'>
                            <p>This web chat is part of a final degree project developed by <a href="https://danielhoyosceldran.vercel.app/" className='g-link-behaviour' target="_blank" rel="noopener noreferrer">Daniel Hoyos Celdrán</a> at the <a href="https://www.uab.cat/web/universitat-autonoma-de-barcelona-1345467950436.html" className='g-link-behaviour' target="_blank" rel="noopener noreferrer">Universitat Autònoma de Barcelona (UAB)</a>.</p>
                            <p>The application consists of two separate code repositories: one for the server (oxserver) and another for the client (oxapp).</p>
                        </div>
                        <div className='lp-content-about-links g-flex g-flex-gap40'>
                            <a href="https://github.com/danielhoyosceldran/oxserver" className='g-flex g-flex-col g-horizonal-center-flex g-vertical-center-flex g-flex-gap6' target="_blank" rel="noopener noreferrer"><img src={Github} alt="github logo" className='lp-github-oxserver lp-content-about-github g-icon-animation' />oxserver</a>
                            <a href="https://github.com/danielhoyosceldran/oxapp" className='g-flex g-flex-col g-horizonal-center-flex g-vertical-center-flex g-flex-gap6' target="_blank" rel="noopener noreferrer"><img src={Github} alt="github logo" className='lp-github-oxapp lp-content-about-github g-icon-animation' />oxapp</a>
                        </div>
                    </section>
                </div>
                <aside className='lp-aside g-flex g-horizonal-center-flex g-vertical-center-flex g-background-pattern'>
                    <div className='g-pointer'>
                        <Link to="/access"><img className='lp-aside-img' src={Next} alt="" /></Link>
                    </div>
                </aside>
            </div>
            {/* <footer className='lp-footer g-flex g-horizontal-center g-vertical-center-flex'>
                <div className='lp-footer-content'>
                    <section className='lp-footer-links'>

                    </section>
                </div>
            </footer> */}
        </div>
    );
}