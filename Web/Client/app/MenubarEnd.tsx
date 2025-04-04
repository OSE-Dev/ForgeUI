import * as React from "react";
import { useRef } from "react";
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { TieredMenu } from 'primereact/tieredmenu';
import {
    ARYA_BLUE,
    ARYA_GREEN,
    ARYA_ORANGE,
    ARYA_PURPLE,
    BOOTSTRAP4_DARK_BLUE,
    BOOTSTRAP4_DARK_PURPLE, BOOTSTRAP4_LIGHT_BLUE, BOOTSTRAP4_LIGHT_PURPLE, MD_DARK_INDIGO, MD_LIGHT_INDIGO
} from "./constants";
import useSwitchTheme from "./useSwitchTheme";

const MenubarEnd = () => {
    const {switchTheme } = useSwitchTheme();
    const devMenuItems = [
        {
            label: 'Lexical demo',
            url: '/app/lexicaldemo'
        },
        {
            label: 'RnD demo',
            url: '/app/ReactRndDemo'
        },
    ];

    const avatarLoggedInItems = [
        {
            label: "Themes",
            icon: 'pi pi-sparkles',
            items: [
                {
                    label: ARYA_BLUE.label,
                    command: () => { switchTheme(ARYA_BLUE.value)}     
                },
                {
                    label: ARYA_GREEN.label,
                    command: () => { switchTheme(ARYA_GREEN.value)}
                },         {
                    label: ARYA_ORANGE.label,
                    command: () => { switchTheme(ARYA_ORANGE.value)}
                },                      
                {
                    label: ARYA_PURPLE.label,
                    command: () => { switchTheme(ARYA_PURPLE.value)}
                },
                {
                    label: BOOTSTRAP4_DARK_BLUE.label,
                    command: () => { switchTheme(BOOTSTRAP4_DARK_BLUE.value)}
                },                
                {
                    label: BOOTSTRAP4_DARK_PURPLE.label,
                    command: () => { switchTheme(BOOTSTRAP4_DARK_PURPLE.value)}
                },                
                {
                    label: BOOTSTRAP4_LIGHT_BLUE.label,
                    command: () => { switchTheme(BOOTSTRAP4_LIGHT_BLUE.value)}
                },                
                {
                    label: BOOTSTRAP4_LIGHT_PURPLE.label,
                    command: () => { switchTheme(BOOTSTRAP4_LIGHT_PURPLE.value)}
                },
                {
                    label: MD_LIGHT_INDIGO.label,
                    command: () => { switchTheme(MD_LIGHT_INDIGO.value)}
                },
                {
                    label: MD_DARK_INDIGO.label,
                    command: () => { switchTheme(MD_DARK_INDIGO.value)}
                },
            ]
        },
        {
            label: "Settings",
            icon: "pi pi-cog",
            url: '/settings' //todo: implement settings page
        }
    ];

    const avatarLoggedOutItems = [
        {
            label: "Themes",
            icon: 'pi pi-sparkles',
            items: [
                {
                    label: ARYA_BLUE.label,
                    command: () => { switchTheme(ARYA_BLUE.value)}     
                },
                {
                    label: ARYA_GREEN.label,
                    command: () => { switchTheme(ARYA_GREEN.value)}
                },         {
                    label: ARYA_ORANGE.label,
                    command: () => { switchTheme(ARYA_ORANGE.value)}
                },                      
                {
                    label: ARYA_PURPLE.label,
                    command: () => { switchTheme(ARYA_PURPLE.value)}
                },
                {
                    label: BOOTSTRAP4_DARK_BLUE.label,
                    command: () => { switchTheme(BOOTSTRAP4_DARK_BLUE.value)}
                },                
                {
                    label: BOOTSTRAP4_DARK_PURPLE.label,
                    command: () => { switchTheme(BOOTSTRAP4_DARK_PURPLE.value)}
                },                
                {
                    label: BOOTSTRAP4_LIGHT_BLUE.label,
                    command: () => { switchTheme(BOOTSTRAP4_LIGHT_BLUE.value)}
                },                
                {
                    label: BOOTSTRAP4_LIGHT_PURPLE.label,
                    command: () => { switchTheme(BOOTSTRAP4_LIGHT_PURPLE.value)}
                },
                {
                    label: MD_LIGHT_INDIGO.label,
                    command: () => { switchTheme(MD_LIGHT_INDIGO.value)}
                },
                {
                    label: MD_DARK_INDIGO.label,
                    command: () => { switchTheme(MD_DARK_INDIGO.value)}
                },
            ]
        },
        {
            label: "Log In",
            icon: "pi pi-sign-in",
            url: '/login' //todo: implement login page
        }
    ];
    const avatarPopupMenu = useRef<TieredMenu>(null);
    const devPopupMenu = useRef<Menu>(null);
    const isLoggedIn = true;
    
    function Contents() {
        if(isLoggedIn) {
            return (
                <>
                    <div className="dev-menu" onClick={(event) => devPopupMenu.current?.toggle(event)}>Dev</div>
                    <Menu popup ref={devPopupMenu} model={devMenuItems}/>
                    <Avatar icon="pi pi-user" onClick={(event) => avatarPopupMenu.current?.toggle(event)}/>
                    <TieredMenu popup ref={avatarPopupMenu} model={avatarLoggedInItems}/>
                </>
            )
        }
        
        return (
            <>
                <Avatar icon="pi pi-user" onClick={(event) => avatarPopupMenu.current?.toggle(event)}/>
                <TieredMenu popup ref={avatarPopupMenu} model={avatarLoggedOutItems}/>
            </>
        )
    }

    return (
        <div className="menubar-end">
            <Contents/>
        </div>
    );
};

export default MenubarEnd;
