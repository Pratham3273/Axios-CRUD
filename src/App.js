import React from "react";
import Create from "./components/Create";
import { Route,Switch,Routes } from "react-router";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
    return(
    <div>
        <Routes>
            <Route exact path="/" Component={Read}></Route>
            <Route path="/Create" Component={Create}></Route>
            <Route path="/Update" Component={Update}></Route>
        </Routes>
        
    </div>
    );
}

export default App;