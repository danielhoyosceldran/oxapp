import { useState } from "react";
import "../../styles/chat/chatComponents/s-xc-AddContactGroup.css";
import XcSwitch from "../c-switchButton"; // Import del component Switch

export default function XcAddContactGroup() {
  const [selected, setSelected] = useState("contact");
  const [userId, setUserId] = useState("");

  const handleAddClick = () => {
    console.log(`Adding ${selected} with ID: ${userId}`);
  };

  return (
    <div className="add-container g-flex g-flex-col g-horizontal-center-flex">
      <h3 className="add-title">Add {selected}</h3>
      <div className="g-flex g-flex-gap20">
        <XcSwitch
          options={["contact", "group"]}
          selected={selected}
          onChange={(option) => setSelected(option)}
        />
        <input
          type="text"
          className="add-input"
          placeholder="User id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button className="add-submit" onClick={handleAddClick}>
          Add
        </button>
      </div>
    </div>
  );
}
