import { useRef, useEffect, useId } from "react";

import Send from "../../assets/icons/lightMode_send_icon.svg";

import "../../styles/chat/chatComponents/s-xc-messageInput.css";

export default function XcMessageInput() {
    const textareaRef = useRef(null);
    const xc_messageInput_id = useId();

    useEffect(() => {
        const textarea = textareaRef.current;

        // Ajusta l'alçada automàticament
        const handleInput = () => {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
        };

        textarea.addEventListener("input", handleInput);

        textarea.addEventListener("input", () => {
            if(textarea.value == "lorem") {
                textarea.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            }
        });

        return () => {
            textarea.removeEventListener("input", handleInput);
        };
    }, []);

    return (
        <div className="xc-messageInput-contiainer">
            <textarea
                ref={textareaRef}
                name="textToSend"
                className="xc-messageInput"
                id={xc_messageInput_id}
                placeholder="Type a message"
                rows="1"
            ></textarea>
            <button className="g-pointer xc-sendButton">
                <img src={Send} alt="Send icon" />
            </button>
        </div>
    );
}
