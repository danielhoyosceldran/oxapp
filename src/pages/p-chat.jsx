import XcMessageInput from "../components/chatComponents/xc-messageInput";

import "../styles/chat/s-chat.css";

export default function Chat() {
    return (
        <div className="x-xatPageContainer" id="x-xatPageContainer-id">
            <div className="x-contactsBoxContainer" id="x-contactsBoxContainer-id">
                <div className="x-inner-contactsBoxContainer">

                </div>
            </div>
            <div className="x-xatContainer" id="x-xatContainer-id">
                <XcMessageInput />
            </div>
        </div>
    );
}