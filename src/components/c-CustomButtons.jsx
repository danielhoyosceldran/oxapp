import PropTypes from "prop-types";
import "../styles/components/s-CButton.css";

export function CIconButton({icon, alt, iconSizeClass="g-icon", onClick, classes=""}) {
    return(
        <button className={`${classes} g-flex g-horizontal-center-flex g-vertical-center-flex`} onClick={onclick}>
            <img
            src={icon}
            alt={alt}
            className={`${iconSizeClass} g-pointer g-icon-animation`}
            />
        </button>
    );
}

CIconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    iconSizeClass: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.string.isRequired
};

export function CButton({
    icon=undefined,
    alt="",
    onClick,
    text,
    isLoading = false,
    classes = "",
    type = "button",
    //disabled = false
}) {
    return (
        <button
            type={type}
            className={`${classes} g-flex g-horizontal-center-flex g-vertical-center-flex g-flex-gap6`}
            onClick={onClick}
            disabled={isLoading} //|| disabled}
        >
            {icon && <img src={icon} alt={alt}/>}
            {isLoading ? "Loading..." : text}
        </button>
    );
}


CButton.propTypes = {
    icon: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    alt: PropTypes.string,
    iconSizeClass: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.string.isRequired
};