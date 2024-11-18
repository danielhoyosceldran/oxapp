import XcMessageInput from "../components/xatComponents/xc-messageInput";
import "../styles/xat/s-xat.css";

export default function Xat() {
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