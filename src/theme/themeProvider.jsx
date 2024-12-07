import { createContext, useContext, useState, useEffect } from "react";

import Sun from "../assets/icons/sun.svg";
import Moon from "../assets/icons/moon.svg";
import Exit_lm from "../assets/icons/exit_lm.svg";
import Exit_dm from "../assets/icons/exit_dm.svg";
import Plus_lm from "../assets/icons/plus-lm.svg";
import Plus_dm from "../assets/icons/plus-dm.svg";
import Back_lm from "../assets/icons/back-lm.svg";
import Back_dm from "../assets/icons/back-dm.svg";
import Send_lm from "../assets/icons/send_lm.svg";
import Send_dm from "../assets/icons/send_dm.svg";
import Mail_dm from "../assets/icons/mail-dm.svg";
import Mail_lm from "../assets/icons/mail-lm.svg";
import Next_dm from "../assets/icons/next-dm.svg";
import Next_lm from "../assets/icons/next-lm.svg";
import Lupa_dm from "../assets/icons/lupa-dm.svg";
import Lupa_lm from "../assets/icons/lupa-lm.svg";
import Reload_dm from "../assets/icons/reload-dm.svg";
import Reload_lm from "../assets/icons/reload-lm.svg";
import Github_dm from "../assets/icons/github-dm.svg";
import Github_lm from "../assets/icons/github-lm.svg";

import Logo from "../assets/logo/transparent_logo.svg";
import Logo_gif from "../assets/logo/transparent_logo_noCaret.svg";
import dhc_logo from "../assets/icons/dhc_logo.png";
import PropTypes from "prop-types";

// Definim les icones per a cada tema
// Definim les icones per a cada tema
const icons_lm = {
    theme: Moon,
    exit: Exit_lm || Exit_dm,
    plus: Plus_lm || Plus_dm,
    back: Back_lm || Back_dm,
    send: Send_lm || Send_dm,
    mail: Mail_lm || Mail_dm,
    next: Next_lm || Next_dm,
    lupa: Lupa_lm || Lupa_dm,
    reload: Reload_lm || Reload_dm,
    github: Github_lm || Github_dm,
    logo: Logo,
    logo_noCaret: Logo_gif,
    dhc_logo: dhc_logo
};

const icons_dm = {
    theme: Sun,
    exit: Exit_dm || Exit_lm,
    plus: Plus_dm || Plus_lm,
    back: Back_dm || Back_lm,
    send: Send_dm || Send_lm,
    mail: Mail_dm || Mail_lm,
    next: Next_dm || Next_lm,
    lupa: Lupa_dm || Lupa_lm,
    reload: Reload_dm || Reload_lm,
    github: Github_dm || Github_lm,
    logo: Logo,
    logo_noCaret: Logo_gif,
    dhc_logo: dhc_logo
};

// Crear el ThemeContext amb valors inicials
export const ThemeContext = createContext({
    theme: "light", // Tema inicial
    icons: icons_lm, // Icones per defecte (light mode)
    toggleTheme: () => {}, // Funció buida inicialment
});

export function ThemeProvider({ children }) {
     // Inicialitza el tema a partir del localStorage, o per defecte "light"
     const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    // Actualitza el localStorage quan canviï el tema
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("custom-theme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("custom-theme", "light");
    };
    
    // Funció per canviar el tema
    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    // icons
    const icons = theme === "light" ? icons_lm : icons_dm;
    (theme === "light") ? setLightMode() : setDarkMode();

    return (
        <ThemeContext.Provider value={{ icons, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes={
    children: PropTypes.any
};

// Hook personalitzat per accedir al context
export const useTheme = () => useContext(ThemeContext);
