import XcMessageInput from "../components/chatComponents/xc-messageInput";

import Sun from "../assets/icons/lightMode_sun.svg";
import Moon from "../assets/icons/lightMode_moon.svg";
import Exit from "../assets/icons/lightMode_exit.svg";

import "../styles/chat/s-chat.css";

export default function Chat() {

    async function handleLogout(){

    }

    return (
        <div className="x-body" id="x-body-id">
            <div className="x-menu-container" id="x-contactsBoxContainer-id">
                <div className="x-menu">
                    <header className="x-menu-header">
                        <div className="x-menu-header-firstRow">
                            <h1>Contacts</h1>
                            {/* By the moment: unabeled */}
                            {/* <div>
                                <img src="" alt="" />
                            </div> */}
                        </div>
                        <div className="x-menu-header-secondRow">
                            <input type="text" className="x-menu-header-searchBar"/>
                            <button className="x-menu-header-addContact">
                                <img src="" alt="" />
                            </button>
                        </div>
                    </header>
                    <div className="x-menu-contacts-container">

                    </div>
                    <footer className="x-menu-footer g-flex g-horizontal-spbtw-flex">
                        <div className="x-menu-footer-profile g-flex g-vertical-center-flex g-horizontal-center-flex">
                            <img src="" alt="" />
                            <h3>username</h3>
                        </div>
                        <div className="x-menu-footer-actions -flex g-vertical-center-flex g-horizontal-center-flex">
                            <button className="g-pointer x-menu-footer-theme g-flex g-vertical-center-flex g-horizontal-center-flex">
                                <img src={Moon} alt="light dark mode" />
                            </button>
                            <button onClick={handleLogout} className="g-pointer x-menu-footer-logout g-flex g-vertical-center-flex g-horizontal-center-flex">
                                <img src={Exit} alt="light dark mode" />
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
            <div className="x-chatContainer" id="x-xatContainer-id">
                <XcMessageInput />
            </div>
        </div>
    );
}