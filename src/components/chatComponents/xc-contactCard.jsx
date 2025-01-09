import PropTypes from "prop-types";
import default_profile_photo from "../../assets/profile_photos/default.png";
import "../../styles/chat/chatComponents/s-xc-contactCard.css";
import { useUser } from "../../user/userProvider";
import { CIconButton } from "../c-CustomButtons";
import { useTheme } from "../../theme/themeProvider";

export default function XcContact({
    contactInformation = {
        profilePhoto: undefined,
        name: "unknown",
        username: "unknown"
    },
    lastMessage = {
        text: "",
        time: ""
    }
}) {
    const {icons} = useTheme();
    const {setContactSelected} = useUser();
    
    function updateSelectedContact() {
        setContactSelected(contactInformation.username);
    }
    return(
        <div className="xc-contact-container g-flex g-vertical-center-flex g-flex-gap16 g-pointer" onClick={updateSelectedContact}>
            <div className="g-flex g-horizontal-center-flex g-vertical-center-flex">
                <img
                    src={contactInformation.profilePhoto ? contactInformation.profilePhoto : default_profile_photo}
                    alt="oxapp default rpofile picture"
                    className="xc-contact-photo"
                />
            </div>
            <div className="xc-contact-content g-flex g-flex-col">
                <h3>{contactInformation.name}<span> (@{contactInformation.username})</span></h3>
                <div className="g-flex g-horizontal-spbtw-flex g-flex-gap20">
                    <p className="xc-contact-content-lastMessage g-flex-grow1">{lastMessage.text}</p>
                    <p>{lastMessage.time}</p>
                </div>
            </div>
            <div className="xc-contact-deleteButton">
                <CIconButton
                    icon={icons.trash}
                    alt="trash icon"
                    iconSizeClass="g-icon"
                    onClick={() => {}}
                />
            </div>
        </div>
    );
}

XcContact.propTypes = {
    contactInformation: PropTypes.shape({
        profilePhoto: PropTypes.string,
        name: PropTypes.string,
        username: PropTypes.string
    }),
    lastMessage: PropTypes.shape({
        text: PropTypes.string,
        time: PropTypes.string
    }),
};