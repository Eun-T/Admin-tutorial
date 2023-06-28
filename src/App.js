import TopBar from "./components/topbar/Topbar";
import SideBar from "./components/sidebar/Sidebar";
import './app.css'
import Home from "./pages/home/Home";
import { BrowserRouter,Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <div className="container">
        <SideBar></SideBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/users">
            <UserList></UserList>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
