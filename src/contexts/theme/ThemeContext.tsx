import { createContext } from "react";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
    theme: ThemeMode;
    toggleTheme: VoidFunction;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
