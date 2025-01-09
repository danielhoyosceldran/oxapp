import { createContext, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
export const WebSocketContext = createContext({
  messages: [],
  sendMessage: () => {},
});


export function WebSocketsProvider( { children }) {
  const socket = useRef(null);
  const [messages, setMessages] = useState(["hola",
    "hey",
    "ciao",
    "ciao",
    "adeu",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.",
  ]);

  useEffect(() => {
    // load messages
    // TODO: fetch messages from server

    // web sockets
    socket.current = new WebSocket("ws://localhost:5000");

    socket.current.onopen = () => {
      console.log("Connexió oberta");
      var onlineBanner = document.getElementById("x-menu-onlineBanner");
      onlineBanner.classList.remove("offline");
      onlineBanner.classList.add("online");
    };

    socket.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
      console.log("Missatge rebut:", event.data);
    };
    
    socket.current.onclose = () => {
      console.log("Connexió tancada");
      var onlineBanner = document.getElementById("x-menu-onlineBanner");
      onlineBanner.classList.remove("online");
      onlineBanner.classList.add("offline");
    };

    if (socket.current?.readyState === WebSocket.OPEN) {
      socket.current.close();
    }
  }, []);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = (message) => {
    if (socket.current?.readyState === WebSocket.OPEN) {
      socket.current.send(message);
    } else {
      console.error("Web socket connection is not opened.");
    }
  };

  return (
    <WebSocketContext.Provider value={{ messages, sendMessage, addMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
}

WebSocketsProvider.propTypes = {
  children: PropTypes.any,
};

export const useWebSockets = () => useContext(WebSocketContext);