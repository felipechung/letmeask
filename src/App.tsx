
import {BrowserRouter, Route, Switch} from "react-router-dom"


import {AuthContextProvider} from "./contexts/AuthContext"


import {Home} from "./pages/Home"
import {NewRoom} from "./pages/NewRoom"
import {Room} from "./pages/Room"
import {AdminRoom} from "./pages/AdminRoom"



function App() {



  return (
    <AuthContextProvider>
    <BrowserRouter>     
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/new" component={NewRoom}></Route>     
        <Route path="/rooms/:id" component={Room}></Route>
        <Route path="/admin/rooms/:id"component={AdminRoom}></Route>
      </Switch>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
