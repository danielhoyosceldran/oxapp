import "../../styles/xat/xatComponents/s-xc-messageInput.css";
import { useRef, useEffect } from "react";

export default function XcMessageInput() {
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;

        // Ajusta l'alçada automàticament
        const handleInput = () => {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
        };

        // Escolta l'esdeveniment d'escriptura
        textarea.addEventListener("input", handleInput);

        return () => {
            textarea.removeEventListener("input", handleInput); // Elimina l'esdeveniment en desmuntar el component
        };
    }, []);

    return (
        <div className="xc-messageInputContiainer">
            <textarea
                ref={textareaRef}
                name="textToSend"
                className="xc-messageInput"
                id="xc-messageInput-id"
                placeholder="Message"
                rows="1"
            ></textarea>
        </div>
    );
}
