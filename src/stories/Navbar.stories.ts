import type { Meta, StoryObj } from "@storybook/html";
import {createNavbar, NavbarProps} from "./Navbar.ts";

const meta = {
    title: "DHA-TODO/Navbar",
    tags: ["autodocs"],
    render: (args) => {
        return createNavbar(args);
    },
    argTypes: {
        appName: {control: "text"},
        appVersion: {control: "text"},
        onAboutClick: {action: "onAboutClick"},
        onLoginClick: {action: "onLoginClick"},
        onLogoutClick: {action: "onLogoutClick"},
    },
} satisfies Meta<NavbarProps>;

export default meta;
type Story = StoryObj<NavbarProps>;

export const Navbar: Story = {
    args: {
        appName: "Vanilla HTML",
        appVersion: "0.0.0",
    },
};
