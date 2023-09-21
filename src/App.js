import { AppProvider } from "@shopify/polaris";
import Home from "./Home/Home";
import { AppContext } from "./contextapi";
import { useState } from "react";




function App() {
   const [users,setUsers]= useState([]);
   
  return (
    <>

    <AppContext.Provider value={{users,setUsers}}>
      <AppProvider>
        <div className="container"> <Home /></div>
      </AppProvider>
      </AppContext.Provider>
    
    </>
  );
}


export default App;
