import warning_dm from "../assets/icons/warning-dm.svg";
import warning_lm from "../assets/icons/warning-dm.svg";

export default function CNoServerConnection() {
    return (
        <div className="cnsc-container">
            <img src={warning_dm} alt="warning icon" />
            <h1>There is no server connection</h1>
            <button>Retry</button>
        </div>
    );
}