import './style.css'
import {createNavbar} from "./stories/Navbar.ts";

const navbar = createNavbar({
    "appName": "Vanilla HTML",
    "appVersion": "0.0.0",
    "onAboutClick": () => {},
    "onLoginClick": () => {},
    "onLogoutClick": () => {},
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${navbar}
`;
