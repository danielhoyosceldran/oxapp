import XcMessageInput from "../components/chatComponents/xc-messageInput";
import { useState } from "react";

import Sun from "../assets/icons/sun.svg";
import Moon from "../assets/icons/moon.svg";
import Exit from "../assets/icons/lightMode_exit.svg";
import Plus from "../assets/icons/plus-lm.svg";
import Back from "../assets/icons/back-lm.svg";
import Next from "../assets/icons/next-lm.svg";

import { changeTheme, isDarkThemeOn } from "../utils/theme.js"

import "../styles/chat/s-chat.css";
import "../styles/chat/s-chat-menu/s-header.css";
import "../styles/chat/s-chat-menu/s-contacts.css";
import "../styles/chat/s-chat-menu/s-footer.css";

export default function Chat() {

    async function handleLogout(){

    }

    const [themeIcon, setThemeIcon] = useState(isDarkThemeOn() ? Sun : Moon);
    function handleChangeTheme() {
        changeTheme()
        setThemeIcon(isDarkThemeOn() ? Sun : Moon)
    }

    return (
        <div className="x-body" id="x-body-id">
            <div className="x-menu-container" id="x-contactsBoxContainer-id">
                <div className="x-menu g-flex-gap20">
                    <header className="x-menu-header g-flex g-flex-col g-flex-gap20">
                        <div className="x-menu-header-firstRow g-vertical-center-flex g-flex g-horizontal-spbtw-flex">
                            <h1>Contacts</h1>
                            {/* By the moment: unabeled */}
                            <button className="x-menu-header-hideMenu g-flex g-horizonal-center-flex g-vertical-center-flex">
                                <img src={Back} alt="" className="g-big-icon g-pointer"/>
                            </button>
                        </div>
                        <div className="x-menu-header-secondRow g-flex g-horizontal-spbtw-flex g-vertical-center-flex">
                            <input type="text" className="x-menu-header-searchBar"/>
                            <button className="x-menu-header-addContact g-flex g-horizonal-center-flex g-vertical-center-flex">
                                <img src={Plus} alt="" className="g-icon g-pointer" />
                            </button>
                        </div>
                    </header>
                    <div className="x-menu-contacts-container">
                        {/* Temporal */}
                        {}
                    </div>
                    <footer className="x-menu-footer g-flex g-horizontal-spbtw-flex">
                        <div className="x-menu-footer-profile g-flex g-vertical-center-flex g-horizontal-center-flex">
                            <img src="" alt="" />
                            <h3>username</h3>
                        </div>

                        {/* menu footer */}
                        <div className="x-menu-footer-actions -flex g-vertical-center-flex g-horizontal-center-flex">
                            <button className="g-pointer x-menu-footer-theme g-flex g-vertical-center-flex g-horizontal-center-flex" onClick={handleChangeTheme}>
                                <img src={themeIcon} alt="light dark mode" className="g-icon g-pointer" />
                            </button>
                            <button onClick={handleLogout} className="g-pointer x-menu-footer-logout g-flex g-vertical-center-flex g-horizontal-center-flex">
                                <img src={Exit} alt="light dark mode" className="g-icon g-pointer" />
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