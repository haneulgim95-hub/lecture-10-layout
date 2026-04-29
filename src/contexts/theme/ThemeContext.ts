import { createContext } from "react";

type themeMode = 'light' | 'dark';

type ThemeContextType = {
    theme: themeMode;
    toggleTheme: VoidFunction;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
