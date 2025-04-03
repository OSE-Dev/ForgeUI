import {use, useLayoutEffect, useState} from 'react';
import { PrimeReactContext } from 'primereact/api';
import {MD_DARK_INDIGO, MD_LIGHT_INDIGO} from "./constants";
function useSwitchTheme() {
    const defaultLightTheme = MD_LIGHT_INDIGO.value;
    const defaultDarkTheme = MD_DARK_INDIGO.value;
    const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme|| defaultLightTheme);
    const { changeTheme, } = use(PrimeReactContext);
    const linkId = "theme-link";
    const switchTheme = (newTheme:string) => {
        if(theme == newTheme) return;
        
        changeTheme!(`public/themes/${theme}`, `public/themes/${newTheme}`, linkId, () => {
            localStorage.setItem('theme', newTheme);
        });
        setTheme(newTheme);
    }
    
    const loadSavedTheme = () => {
        if(!savedTheme) {
            const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
            if(prefersDark) {
                changeTheme!(`public/themes/${defaultLightTheme}`, `public/themes/${defaultDarkTheme}`, linkId, () => {});
            }
            return;
        }
        
        changeTheme!(`public/themes/${defaultLightTheme}`, `public/themes/${theme}`, linkId, () => {});
    };
    return { switchTheme, loadSavedTheme };
} 

export default useSwitchTheme;
