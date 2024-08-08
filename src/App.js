import "./App.css";
import MainComponent from "./Components/Main.component";
import MenuComponent from "./Components/Menu.component";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "./Routes/Auth.route";
import AppRoute from "./Routes/app.route";
import AdminRoute from "./Routes/admin.route";

function App() {
  return (
    <BrowserRouter>
      <AdminRoute />
    </BrowserRouter>
  );
}

export default App;
