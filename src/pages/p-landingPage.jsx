import { Link } from 'react-router-dom';

import "../styles/landingPage/s-landingPage.css"

export default function LandingPage() {
    return (
        <>
            <div className='lp-body'>
                <header className='lp-header'>
                    <div className='pointer mainButton lp-header-element'>
                        <Link to="/access">access</Link>
                    </div>
                </header>
            </div>
        </>
    );
}