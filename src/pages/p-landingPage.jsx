import { Link } from 'react-router-dom';
import { copyToclipboard } from '../utils/utils';
import { useTheme } from '../theme/themeProvider';
import { useEffect, useState } from 'react';

import "../styles/landingPage/s-landingPage.css"
import "../styles/landingPage/s-aside.css"
import "../styles/landingPage/s-footer.css"
import "../styles/landingPage/s-about.css"
import "../styles/landingPage/s-title.css"
import CLpFooterLink from '../components/landingPageComponents/c-lp-footer-link';

export default function LandingPage() {
    const { icons, toggleTheme } = useTheme();

    const [logoImage, setLogoImage] = useState(icons.logo);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogoImage((prev) => {return prev === icons.logo ? icons.logo_noCaret : icons.logo});
        }, 500);

        return () => clearInterval(interval); // Netegem l'interval quan el component es desmunta
    }, []);

    return (
        <div className='lp-body'>
            <div className='g-flex'>
                <div className='lp-content-container'>
                    <div className='lp-content-title g-flex g-vertical-center-flex g-horizontal-center-flex'>
                        <a href="#lp-content-about-id" className='g-flex g-horizontal-center-flex g-vertical-center-flex g-flex-gap20'>
                            <img src={logoImage} alt="" />
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
                    </section>
                </div>
                <aside className='lp-aside g-flex g-horizontal-center-flex g-vertical-center-flex g-background-pattern'>
                    <div className='g-pointer'>
                        <Link to="/access"><img className='lp-aside-img' src={icons.next} alt="" /></Link>
                    </div>
                </aside>
            </div>
            <footer className='lp-footer g-flex g-horizontal-center-flex g-flex-gap50'>
                    <section className='lp-footer-links g-flex g-flex-col g-flex-gap16'>
                        <h2>Links</h2>
                        <CLpFooterLink icon={icons.dhc_logo} text="my portfolio" link="https://danielhoyosceldran.vercel.app/" />
                        <CLpFooterLink icon={icons.github} text="oxerver" link="https://github.com/danielhoyosceldran/oxserver" />
                        <CLpFooterLink icon={icons.github} text="oxapp" link="https://github.com/danielhoyosceldran/oxapp" />
                    </section>
                    <section className='lp-footer-contact  g-flex g-flex-col g-flex-gap16'>
                        <h2>Contact</h2>
                        <CLpFooterLink icon={icons.mail} text="danhoycel@gmail.com" action={() => copyToclipboard("danhoycel@gmail.com")} />
                    </section>
            </footer>
        </div>
    );
}