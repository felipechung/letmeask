
import {BrowserRouter, Route} from "react-router-dom"


import {AuthContextProvider} from "./contexts/AuthContext"


import {Home} from "./pages/Home"
import {NewRoom} from "./pages/NewRoom"



function App() {



  return (
    <AuthContextProvider>
    <BrowserRouter>     
        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/new" component={NewRoom}></Route>      
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
