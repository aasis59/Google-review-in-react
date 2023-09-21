import { AppProvider } from "@shopify/polaris";
import Home from "./Home/Home";



function App() {
  return (
    <>

    
      <AppProvider>
        <div className="container"> <Home /></div>
      </AppProvider>
    
    </>
  );
}


export default App;
