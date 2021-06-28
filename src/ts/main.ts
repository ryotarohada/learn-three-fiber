import RenderingView from "./view/renderingView";

class Main {

    private _RenderingViewClass: RenderingView;

    constructor () {
        console.log("[main function] - Main.setup")
        this._RenderingViewClass = new RenderingView();
    };

    public initialize (): void {

        // Reactコンポーネントを描画
        this._RenderingViewClass.render();
    };
};

// app script
new Main().initialize();