import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
    const [mode, setMode] = useState(null);
    const [themeLoaded, setThemeLoaded] = useState(false);

    useEffect(() => {
        const preferDarkQuery = "(prefers-color-scheme: dark)";
        const userPref = typeof window !== 'undefined' ? window.sessionStorage.getItem("theme") : null;
        const systemPref = typeof window !== 'undefined' ? (window.matchMedia(preferDarkQuery).matches ? "dark" : "light") : null;
        setMode(userPref || systemPref);
        setThemeLoaded(true);
    }, []);

    useEffect(() => {
        if (themeLoaded && mode) {
            window.sessionStorage.setItem("theme", mode);
            if (mode === "dark"){
                document.documentElement.classList.add("dark");
            }else{
                document.documentElement.classList.remove("dark");
            }
        }
    }, [mode, themeLoaded]);

    return [mode, setMode];
};

export default useThemeSwitcher;
