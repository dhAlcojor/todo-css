import {createButton} from "./Button.ts";

export interface NavbarProps {
    appName: string;
    appVersion: string;
    onAboutClick: () => void;
    onLoginClick: () => void;
    onLogoutClick: () => void;
}

export const createNavbar = ({
    appName,
    appVersion,
    onAboutClick,
    onLoginClick,
    onLogoutClick,
}: NavbarProps) => {
    const aboutButton = createButton({
        label: 'About',
        onClick: onAboutClick,
    });
    const loginButton = createButton({
        label: 'Login',
        onClick: onLoginClick,
    });
    const logoutButton = createButton({
        label: 'Logout',
        onClick: onLogoutClick,
    });

    return `
    <nav class="flex flex-row justify-between bg-gradient-to-r from-purple-700 to-indigo-500 text-white p-2 rounded-t-lg">
        <div>
            <span class="text-2xl font-bold mr-1.5">DHA To-Do</span>
            <span class="inline-block bg-white/75 text-black p-1 rounded-lg">
                <span class="font-mono">${appName}</span>
                <span class="inline-block bg-black text-xs text-white rounded-3xl px-1">${appVersion}</span>
            </span>
        </div>
        <div>
            ${aboutButton}
            ${loginButton}
            ${logoutButton}
        </div>
    </nav>
    `;
}
