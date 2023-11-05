import type {Meta, StoryObj} from "@storybook/html";
import {AppProps, createApp} from "./App.ts";

const meta = {
    title: "DHA-TODO/App",
    tags: ["autodocs"],
    render: () => {
        return createApp({});
    },
} satisfies Meta<AppProps>;
export default meta;
type Story = StoryObj<AppProps>;

export const App: Story = {
    args: {},
};
