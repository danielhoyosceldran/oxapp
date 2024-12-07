import PropTypes from "prop-types";
import default_profile_photo from "../../assets/profile_photos/default.png";
import "../../styles/chat/chatComponents/s-xc-contactCard.css";

export default function XcContact({
    contactInformation,
    lastMessage
}) {
    const ho = () => {
        console.log("hola");
    }
    return(
        <div className="xc-contact-container g-flex g-flex-gap16 g-pointer" onClick={ho}>
            <div className="g-flex g-horizontal-center-flex g-vertical-center-flex">
                <img
                    src={default_profile_photo}
                    alt="oxapp default rpofile picture"
                    className="xc-contact-photo"
                />
            </div>
            <div className="xc-contact-content g-flex g-flex-col">
                <h3>Contacte0</h3>
                <div className="g-flex g-horizontal-spbtw-flex g-flex-gap20">
                    <p className="g-flex-grow1">holass...</p>
                    <p>10:20</p>
                </div>
            </div>
        </div>
    );
}

XcContact.propTypes = {

};