import '../styles/components/s-c-switchButton.css';

export default function XcSwitch({ options, selected, onChange }) {
    return (
      <div className="xc-switch">
        {options.map((option) => (
          <div
            key={option}
            className={`xc-switch-option ${
              selected === option ? "xc-switch-selected" : ""
            }`}
            onClick={() => onChange(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)} {/* Capitalitza */}
          </div>
        ))}
      </div>
    );
  }