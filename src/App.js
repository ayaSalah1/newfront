import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./Routes/app.route";
import "react-tooltip/dist/react-tooltip.css";

function App() {
    return (
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    );
}

export default App;
