import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";
import { getContacts } from "../api_handlers/user_requests.js"; // Importa la funció d'API

export const UserContext = createContext({
  username: "unknown",
  contacts: [],
  setUsername: () => {},
  handleGetContacts: () => Promise.resolve(),
});

export function UserProvider({ children }) {
  const [username, setUsername] = useState("unknown");
  const [contacts, setContacts] = useState([]);

  // Funció per recuperar els contactes
  async function handleGetContacts() {
    try {
      const response = await getContacts();
      // Filtrar duplicats
      const uniqueContacts = Array.from(
        new Map(
          JSON.parse(response.contacts).map((contact) => [
            contact.username,
            contact,
          ])
        ).values()
      );

      setContacts(uniqueContacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  }

  // Recuperar contactes automàticament en carregar el context
  useEffect(() => {
    handleGetContacts();
  }, []);

  return (
    <UserContext.Provider
      value={{
        username,
        contacts,
        setUsername,
        handleGetContacts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.any,
};

export const useUser = () => useContext(UserContext);
