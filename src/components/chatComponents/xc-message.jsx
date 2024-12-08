import default_profile_photo from "../../assets/profile_photos/default.png";
import '../../styles/chat/chatComponents/s-xc-message.css'

export default function XcMessage({children, classes}) {
    return (
        <div className={`${classes} xc-message-box g-flex`}>
            <div className="g-flex g-flex-col g-flex-gap10">
                <div className='xc-message-user g-flex g-flex-gap10'>
                    <img src={default_profile_photo} alt="" />
                    <p>username</p>
                </div>
                <div className='xc-message'>
                    <p>{children}</p>
                    <p className="xc-message-time"></p>
            </div>
            </div>
        </div>
    );
}