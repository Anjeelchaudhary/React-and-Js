import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})


//this is used for wrapping in App
export const ThemeProvider = ThemeContext.Provider

//custom hook 
export default function useTheme() {
    return useContext(ThemeContext);
}