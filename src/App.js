import './App.css';
import HeaderComponent from "./Components/Header.component";
import MainComponent from "./Components/Main.component";
import MenuComponent from "./Components/Menu.component";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="main flex flex-row min-h-screen">
            <BrowserRouter>
                <MenuComponent/>
                <MainComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;
