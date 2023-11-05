export interface AppProps {}

export const createApp = ({}: AppProps) => {
    const app = document.createElement('div');
    app.innerHTML = `
        <h1>DHA-TODO</h1>
    `;
    return app;
}
