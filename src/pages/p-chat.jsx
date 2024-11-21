import XcMessageInput from "../components/chatComponents/xc-messageInput";
import { useState } from "react";

import Sun from "../assets/icons/sun.svg";
import Moon from "../assets/icons/moon.svg";
import Exit_lm from "../assets/icons/exit_lm.svg";
import Exit_dm from "../assets/icons/exit_dm.svg";
import Plus_lm from "../assets/icons/plus-lm.svg";
import Plus_dm from "../assets/icons/plus-dm.svg";
import Back_lm from "../assets/icons/back-lm.svg";
import Back_dm from "../assets/icons/back-dm.svg";
import Send_lm from "../assets/icons/send_lm.svg";
import Send_dm from "../assets/icons/send_dm.svg";
import default_profile_photo from "../assets/profile_photos/default.png";

import { changeTheme, isDarkThemeOn } from "../utils/theme.js"

import "../styles/chat/s-chat.css";
import "../styles/chat/s-chat-menu/s-header.css";
import "../styles/chat/s-chat-menu/s-contacts.css";
import "../styles/chat/s-chat-menu/s-footer.css";

export default function Chat() {

    async function handleLogout(){

    }

    const profile_photo = default_profile_photo;

    const icons_lm = {
        theme: Moon,
        exit: Exit_lm,
        plus: Plus_lm,
        back: Back_lm,
        send: Send_lm
    }

    const icons_dm = {
        theme: Sun,
        exit: Exit_dm,
        plus: Plus_dm,
        back: Back_dm,
        send: Send_dm
    }

    const [themeIcons, setThemeIcons] = useState(isDarkThemeOn() ? icons_dm : icons_lm);

    function handleChangeTheme() {
        changeTheme()
        setThemeIcons(isDarkThemeOn() ? icons_dm : icons_lm)
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
                                <img src={themeIcons.back} alt="" className="g-big-icon g-pointer g-icon-animation"/>
                            </button>
                        </div>
                        <div className="x-menu-header-secondRow g-flex g-horizontal-spbtw-flex g-vertical-center-flex">
                            <input type="text" className="x-menu-header-searchBar"/>
                            <button className="x-menu-header-addContact g-flex g-horizonal-center-flex g-vertical-center-flex">
                                <img src={themeIcons.plus} alt="" className="g-icon g-pointer g-icon-animation" />
                            </button>
                        </div>
                    </header>
                    <div className="x-menu-contacts-container">
                        {/* Temporal */}
                        {}
                    </div>
                    <footer className="x-menu-footer g-flex g-horizontal-spbtw-flex">
                        <div className="x-menu-footer-profile g-flex g-vertical-center-flex g-horizontal-center-flex">
                            <img src={profile_photo} alt="" />
                            <h3>username</h3>
                        </div>

                        {/* menu footer */}
                        <div className="x-menu-footer-actions -flex g-vertical-center-flex g-horizontal-center-flex">
                            <button className="g-pointer x-menu-footer-theme g-flex g-vertical-center-flex g-horizontal-center-flex" onClick={handleChangeTheme}>
                                <img src={themeIcons.theme} alt="light dark mode" className="g-icon g-pointer g-icon-animation" />
                            </button>
                            <button onClick={handleLogout} className="g-pointer x-menu-footer-logout g-flex g-vertical-center-flex g-horizontal-center-flex">
                                <img src={themeIcons.exit} alt="light dark mode" className="g-icon g-pointer g-icon-animation" />
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
            <div className="x-chatContainer" id="x-xatContainer-id">
                <XcMessageInput sendIcon={themeIcons.send} />
            </div>
        </div>
    );
}