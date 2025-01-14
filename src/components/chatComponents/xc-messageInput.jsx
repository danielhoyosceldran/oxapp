import { useRef, useEffect, useId } from "react";
import { useWebSockets } from "../../messages_connection/ws_access";
import { useTheme } from "../../theme/themeProvider";
import { useUser } from "../../user/userProvider";

import PropTypes from "prop-types";

import "../../styles/chat/chatComponents/s-xc-messageInput.css";

export default function XcMessageInput({
  sendIcon,
  scrollToBottom,
  checkScroll,
}) {
  const xc_messageInput_id = useId();
  const textareaRef = useRef(null);
  const { username, contactSelected } = useUser();
  const { messages, sendMessage } = useWebSockets();
  const contactSelectedRef = useRef(contactSelected);
  const { icons } = useTheme();

  useEffect(() => {
    const textarea = textareaRef.current;

    // Ajusta l'alçada i amplada automàticament
    const handleInput = () => {
      const scroll = checkScroll();

      // Ajusta l'alçada fins a un màxim de 200px
      textarea.style.height = "auto"; // Reinicia l'alçada
      const scrollHeight = Math.min(textarea.scrollHeight, 200); // Alçada màxima de 200px
      textarea.style.height = `${scrollHeight}px`;

      if (scroll) scrollToBottom();
    };

    textarea.addEventListener("input", handleInput);

    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "Enter") {
        handleSend();
      }
    };
    textarea.addEventListener("keydown", handleKeyDown);

    return () => {
      textarea.removeEventListener("keydown", handleKeyDown);
      textarea.removeEventListener("input", handleInput);
    };
  }, []);

  useEffect(() => {
    contactSelectedRef.current = contactSelected;
  }, [contactSelected]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function getJsonToSend() {
    const jsonToSend = {
        type: "text",
        from: username,
        to: contactSelectedRef.current,
        text: textareaRef.current.value,
    };
    return JSON.stringify(jsonToSend);
  }

  function handleSend() {
    sendMessage(getJsonToSend());
    textareaRef.current.value = "";
  }

  return (
    <div className="xc-messageInput-contiainer g-flex g-horizontal-center-flex g-flex-gap20">
      <div>
        <img
          src={icons.messageTail}
          className="xc-message-tail"
          alt="message input tail"
        />
        <textarea
          autoFocus={true}
          ref={textareaRef}
          name="textToSend"
          className="xc-messageInput"
          id={xc_messageInput_id}
          placeholder="Type a message"
          rows="1"
        ></textarea>
      </div>
      <button
        className="g-pointer xc-sendButton g-flex g-horizontal-center-flex g-vertical-center-flex"
        onClick={handleSend}
      >
        <img src={sendIcon} alt="Send" />
      </button>
    </div>
  );
}

XcMessageInput.propTypes = {
  sendIcon: PropTypes.string.isRequired,
  scrollToBottom: PropTypes.func,
  checkScroll: PropTypes.func,
};
