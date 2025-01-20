import { useState } from "react";
import { addContact } from "../../api_handlers/user_requests";
import { useTheme } from "../../theme/themeProvider";
import { CIconButton, CTextButton } from "../c-CustomButtons"; // Import del component IconButton
import "../../styles/chat/chatComponents/s-xc-AddContactGroup.css";
import XcSwitch from "../c-switchButton"; // Import del component Switch

export default function XcAddContactGroup({callback}) {
  const [selected, setSelected] = useState("contact");
  const [userId, setUserId] = useState("");
  const {icons} = useTheme();

  const handleAddClick = async () => {
    await addContact(userId);
  };

  var placeholderText = selected==="group"?" group ID":" username";

  return (
    <div className="add-container g-flex g-flex-col g-horizontal-center-flex">
      <div className="g-flex g-horizontal-spbtw-flex g-vertical-center-flex g-flex-gap20">
        <h3 className="add-title">Add {selected}</h3>
        <CIconButton
          icon={icons.cross}
          className=""
          onClick={() => {callback()}}
        />
      </div>
      <div className="g-flex g-flex-gap20">
        <XcSwitch
          options={["contact", "group"]}
          selected={selected}
          onChange={(option) => setSelected(option)}
        />
        <input
          type="text"
          className="add-input"
          placeholder={placeholderText}
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <CTextButton
          text="Add"
          classes="add-submit"
          onClick={handleAddClick}
        />
      </div>
    </div>
  );
}
