import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {MyProvider,useMyContext} from "./Context.tsx";
createRoot(document.getElementById("root")!).render(<MyProvider><App /></MyProvider>);
