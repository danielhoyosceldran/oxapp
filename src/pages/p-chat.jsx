import "../styles/chat/s-chat.css";
import "../styles/chat/s-chat-menu/s-header.css";
import "../styles/chat/s-chat-menu/s-contacts.css";
import "../styles/chat/s-chat-menu/s-footer.css";
import "../styles/chat/s-chat-container.css";

import { useTheme } from "../theme/themeProvider.jsx";
import { CIconButton, CTextButton } from "../components/c-CustomButtons.jsx";
import { logoutRequest } from "../api_handlers/session.js";
import { useEffect, useRef } from "react";

import PropTypes from "prop-types";
import XcContact from "../components/chatComponents/xc-contactCard.jsx";
import XcMessage from "../components/chatComponents/xc-message.jsx";
import XcMessageInput from "../components/chatComponents/xc-messageInput";
import default_profile_photo from "../assets/profile_photos/default.png";

// Componente principal
export default function Chat() {
  const { icons, toggleTheme } = useTheme();
  const containerRef = useRef(null);
  const contacts = [...Array(20).keys()] // Mock data
  const messages = ["hola", "hey", "ciao", "adeu", "epaa", "hola", "hey", "ciao", "adeu", "epaa", "hola", "hey", "ciao", "adeu", "epaa"]; // Mock data

  function scrollToBottom() {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight; // Fa que el scroll comenci al final
  }

  function isScrollBottom() {
    const container = containerRef.current;
    const { scrollTop, scrollHeight, clientHeight } = container;
    return (scrollTop + clientHeight >= scrollHeight);
  }

  useEffect(() => {
    scrollToBottom();
  }, []);

  async function handleLogout() {
    await logoutRequest();
  }

  return (
    <div className="x-body g-flex" id="x-body-id">
      <ChatMenu
        icons={icons}
        profilePhoto={default_profile_photo}
        contacts={contacts}
        onLogout={handleLogout}
        onToggleTheme={toggleTheme}
      />
      <ChatContainer messages={messages} icons={icons} containerRef={containerRef} scrollToBottom={scrollToBottom} checlScroll={isScrollBottom} />
    </div>
  );
}

// Subcomponent per al menú lateral
function ChatMenu({ icons, profilePhoto, contacts, onLogout, onToggleTheme }) {
  return (
    <div className="x-menu-container" id="x-contactsBoxContainer-id">
      <div className="x-menu g-flex-gap20">
        <header className="x-menu-header g-flex g-flex-col g-flex-gap20">
          <div className="x-menu-header-firstRow g-vertical-center-flex g-flex g-horizontal-spbtw-flex">
            <h1>Contacts</h1>
            {/* <button className="x-menu-header-hideMenu g-flex g-horizontal-center-flex g-vertical-center-flex">
              <img
                src={icons.back}
                alt="Hide menu"
                className="g-big-icon g-pointer g-icon-animation"
              />
            </button> */}
          </div>
          <div className="g-flex g-horizontal-spbtw-flex g-vertical-center-flex g-flex-gap10">
            <input type="text" className="x-menu-header-searchBar" placeholder="Search..." />
            <CIconButton
              onClick={()=>{}}
              icon={icons.lupa}
              alt="magnifying glass icon"
            />
          </div>
          <div className="g-flex g-vertical-center-flex g-flex-gap20">
            <CTextButton
              icon={icons.reload}
              text="Reload"
              classes="g-smallButton"
              onClick={()=>{}}
            />
            <CTextButton
              icon={icons.plus}
              text="Add new"
              classes="g-smallButton"
              onClick={()=>{}}
            />
          </div>
        </header>
        <div className="x-menu-contacts g-vertical-scroll g-scroll-shadows g-styled-scrollbar g-flex g-flex-col g-flex-grow1">
          {contacts.map((contact, index) => (
            <XcContact key={index} name={contact} />
          ))}
        </div>
        <footer className="x-menu-footer g-flex g-horizontal-spbtw-flex">
          <div className="x-menu-footer-profile g-flex g-vertical-center-flex g-horizontal-center-flex">
            <img src={profilePhoto} alt="Profile" />
            <h3>username</h3>
          </div>
          <div className="x-menu-footer-actions g-flex g-vertical-center-flex g-horizontal-center-flex">
            <button
              className="g-pointer x-menu-footer-theme g-flex g-vertical-center-flex g-horizontal-center-flex"
              onClick={onToggleTheme}
            >
              <img
                src={icons.theme}
                alt="Toggle theme"
                className="g-icon g-pointer g-icon-animation"
              />
            </button>
            <button
              onClick={onLogout}
              className="g-pointer x-menu-footer-logout g-flex g-vertical-center-flex g-horizontal-center-flex"
            >
              <img
                src={icons.exit}
                alt="Logout"
                className="g-icon g-pointer g-icon-animation"
              />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

ChatMenu.propTypes = {
  icons: PropTypes.shape({
    back: PropTypes.string.isRequired,
    plus: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    exit: PropTypes.string.isRequired,
    reload: PropTypes.string.isRequired,
    lupa: PropTypes.string.isRequired,
  }).isRequired,
  profilePhoto: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLogout: PropTypes.func.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

// Subcomponent per al contenidor del xat
function ChatContainer({ messages, icons, containerRef, scrollToBottom, checlScroll}) {
  return (
    <div className="x-chatContainer g-flex g-flex-col" id="x-xatContainer-id">
      <div
        ref={containerRef}
        className="x-chat-messages-container g-flex g-flex-col g-styled-scrollbar"
      >
        {messages.map((msg, index) => (
          <XcMessage 
            key={index}
            classes={index % 2 === 0 ? "xc-message-sent" : "xc-message-recieved"}
          >
            {msg}
          </XcMessage>
        ))}
      </div>
      <XcMessageInput sendIcon={icons.send} scrollToBottom={scrollToBottom} checkScroll={checlScroll} />
    </div>
  );
}

ChatContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
  icons: PropTypes.shape({
    send: PropTypes.string.isRequired,
  }).isRequired,
  containerRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};
