"use client"
import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext()

const DarkModeProvider = ({ children }) => {
    const [darkmode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkmode)
    }

    return (
        <DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used whitin a DarkModeProvider')
    }
    return context;
}

export { DarkModeProvider, useDarkMode };