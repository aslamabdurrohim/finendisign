/* eslint no-console: 0 */

import { createReactAppExpress } from "@cra-express/core";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";

const path = require("path");
const React = require("react");

let App = require("../src/App").default;

const clientBuildPath = path.resolve(__dirname, "../client");

async function handleUniversalRender(req, res) {
    const context = {};
    const stream = ReactDOMServer.renderToNodeStream(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    if (context.url) {
        res.redirect(301, context.url);
        return undefined;
    }

    return stream;
}

const app = createReactAppExpress({
    clientBuildPath,
    universalRender: handleUniversalRender
});

if (module.hot) {
    module.hot.accept("../src/App", () => {
        App = require("../src/App").default;
        console.log("✅ Server hot reloaded App");
    });
}

export default app;
