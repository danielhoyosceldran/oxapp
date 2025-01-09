import { useEffect, useRef } from "react";

export function useWebSockets() {
  const socket = useRef(null);
  useEffect(() => {
    socket.current = new WebSocket("ws://localhost:5000");

    socket.current.onopen = () => {
      console.log("Connexió oberta");
      var onlineBanner = document.getElementById("x-menu-onlineBanner");
      onlineBanner.classList.remove("offline");
      onlineBanner.classList.add("online");
    };

    socket.current.onmessage = (event) => {
      console.log("Missatge del servidor: " + event.data);
    };

    function updateMessageContainer() {}

    socket.current.onclose = () => {
      console.log("Connexió tancada");
      var onlineBanner = document.getElementById("x-menu-onlineBanner");
      onlineBanner.classList.remove("online");
      onlineBanner.classList.add("offline");
    };

    return () => {
      socket.current.close();
    };
  }, []);

  const sendMessage = (message) => {
    if (socket.current?.readyState === WebSocket.OPEN) {
      socket.current.send(message);
    } else {
      console.error("Web socket connection is not opened.");
    }
  };

  return { sendMessage };
  
}
