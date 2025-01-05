import "../styles/chat/s-chat.css";
import "../styles/chat/s-chat-menu/s-header.css";
import "../styles/chat/s-chat-menu/s-contacts.css";
import "../styles/chat/s-chat-menu/s-footer.css";
import "../styles/chat/s-chat-container.css";

import { useTheme } from "../theme/themeProvider.jsx";
import { CIconButton, CTextButton } from "../components/c-CustomButtons.jsx";
import { logoutRequest } from "../api_handlers/session.js";
import { useEffect, useRef, useState } from "react";
import { useUser } from "../user/userProvider.jsx";

import PropTypes from "prop-types";
import XcContact from "../components/chatComponents/xc-contactCard.jsx";
import XcMessage from "../components/chatComponents/xc-message.jsx";
import XcMessageInput from "../components/chatComponents/xc-messageInput";
import default_profile_photo from "../assets/profile_photos/default.png";
import XcAddContactGroup from "../components/chatComponents/xc-addContactGroup.jsx";

// Componente principal
export default function Chat() {
  const { icons, toggleTheme } = useTheme();

  async function handleLogout() {
    await logoutRequest();
  }

  // const ChatUtilsContext = createContext({
  //   isScrollBottom: isScrollBottom,
  //   scrollToBottom: scrollToBottom
  // });

  // function ChatUtilsProvider({children}) {
  //   return (
  //       <ChatUtilsProvider.Provider
  //         value={{
  //           isScrollBottom,
  //           scrollToBottom
  //         }}
  //       >
  //         {children}
  //       </ChatUtilsProvider.Provider>
  //     );
  // }

  // ChatUtilsProvider.propTypes = {
  //   children: PropTypes.any,
  // };

  // const useChatUtils = () => useContext(ChatUtilsContext);

  return (
    // <ChatUtilsProvider>

    // </ChatUtilsProvider>
    <div className="x-body g-flex" id="x-body-id">
      <ChatMenu
        icons={icons}
        profilePhoto={default_profile_photo}
        onLogout={handleLogout}
        onToggleTheme={toggleTheme}
      />
      <ChatContainer icons={icons} />
    </div>
  );
}

// Subcomponent per al menú lateral
export function ChatMenu({ icons, profilePhoto, onLogout, onToggleTheme }) {
  const { contacts, handleGetContacts, username } = useUser();
  const [showNewDiv, setShowNewDiv] = useState(false);

  function handleShowDiv() {
    setShowNewDiv(true);
  }

  function handleHideDiv() {
    setShowNewDiv(false);
  }

  return (
    <div className="x-menu-container" id="x-contactsBoxContainer-id">
      <div className="x-menu g-flex-gap20">
        <header className="x-menu-header g-flex g-flex-col g-flex-gap20">
          <div className="x-menu-header-firstRow g-vertical-center-flex g-flex g-horizontal-spbtw-flex">
            <h1>Contacts</h1>
          </div>
          <div className="g-flex g-horizontal-spbtw-flex g-vertical-center-flex g-flex-gap10">
            <input
              type="text"
              className="x-menu-header-searchBar"
              placeholder="Search..."
            />
            <CIconButton
              onClick={() => {}}
              icon={icons.lupa}
              alt="magnifying glass icon"
            />
          </div>
          <div className="g-flex g-vertical-center-flex g-flex-gap20">
            <CTextButton
              icon={icons.reload}
              text="Reload"
              classes="g-smallButton"
              onClick={handleGetContacts}
            />
            <CTextButton
              icon={icons.plus}
              text="Add new"
              classes="g-smallButton"
              onClick={handleShowDiv}
            />
          </div>
          {showNewDiv && <XcAddContactGroup />}
        </header>
        <div className="x-menu-contacts g-vertical-scroll g-scroll-shadows g-styled-scrollbar g-flex g-flex-col g-flex-grow1">
          {contacts.map((contact, index) => (
            <XcContact
              contactInformation={{
                profilePhoto: undefined,
                name: contact.name,
                username: contact.username,
              }}
              key={index}
            />
          ))}
        </div>
        <footer className="x-menu-footer g-flex g-horizontal-spbtw-flex">
          <div className="x-menu-footer-profile g-flex g-vertical-center-flex g-horizontal-center-flex">
            <img src={profilePhoto} alt="Profile" />
            <h3>{username}</h3>
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
  onLogout: PropTypes.func.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

// Subcomponent per al contenidor del xat
function ChatContainer({ icons }) {
  const { contactSelected, setContactSelected } = useUser();
  var messages = [
    "hola",
    "hey",
    "ciao",
    "adeu",
    "epaa",
    "hola",
    "hey",
    "ciao",
    "adeu",
    "epaa",
    "hola",
    "hey",
    "ciao",
    "adeu",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.",
  ];

  const containerRef = useRef(null);

  function scrollToBottom() {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight; // Fa que el scroll comenci al final
  }

  function isScrollBottom() {
    const container = containerRef.current;
    const { scrollTop, scrollHeight, clientHeight } = container;
    return scrollTop + clientHeight >= scrollHeight;
  }

  useEffect(() => {
    if (contactSelected) {
      scrollToBottom();
    }
  }, [contactSelected]);

  return (
    <div className="x-chatContainer g-flex g-flex-col" id="x-xatContainer-id">
      <div
        ref={containerRef}
        className="x-chat-messages-container g-flex g-flex-col g-styled-scrollbar"
      >
        {contactSelected === undefined ? (
          <div
            className="g-flex g-horizontal-center-flex g-vertical-center-flex"
            style={{
              height: "100%",
              color: "var(--base-variant-neutral)",
              paddingTop: "100px",
            }}
          >
            No contact selected
          </div>
        ) : messages.length > 0 ? (
          messages.map((msg, index) => (
            <XcMessage
              key={index}
              classes={
                index % 2 === 0 ? "xc-message-sent" : "xc-message-recieved"
              }
            >
              {msg}
            </XcMessage>
          ))
        ) : (
          <div
            className="g-flex g-horizontal-center-flex g-vertical-center-flex"
            style={{
              height: "100%",
              color: "var(--base-variant-neutral)",
            }}
          >
            No messages
          </div>
        )}
      </div>
      {contactSelected && (
        <>
          <CIconButton
            classes="x-closeChatWindow"
            icon={icons.cross}
            alt="icon cross"
            onClick={() => {setContactSelected(undefined)}}
          />
          <XcMessageInput
            sendIcon={icons.send}
            scrollToBottom={scrollToBottom}
            checkScroll={isScrollBottom}
          />
        </>
      )}
    </div>
  );
}

ChatContainer.propTypes = {
  icons: PropTypes.shape({
    send: PropTypes.string.isRequired,
    cross: PropTypes.string.isRequired,
  }).isRequired,
};
