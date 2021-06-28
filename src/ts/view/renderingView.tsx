import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './basic/App';

export default class RenderingView {

    constructor() {
        console.log("[class] - RenderingView.setup");
    }

    // domをレンダリング
    public render (): void {
        ReactDOM.render(
            <App />,
            document.getElementById('react-view-root')
        );
    };
};
