import default_profile_photo from "../../assets/profile_photos/default.png";
import '../../styles/chat/chatComponents/s-xc-message.css';
import { useTheme } from "../../theme/themeProvider";

export default function XcMessage({children, classes}) {
    const { icons } = useTheme();
    return (
        <div className={`${classes} xc-message-box g-flex`}>
            <div className="g-flex g-flex-col g-flex-gap10">
                <img src={icons.messageTail} className="xc-message-tail" alt="message tail" />
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