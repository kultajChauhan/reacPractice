import React from "react";
import ReactDOm from "react-dom/client"

import {App} from "./app.jsx"

const root=ReactDOm.createRoot(document.getElementById("root"))
root.render(<App/>)