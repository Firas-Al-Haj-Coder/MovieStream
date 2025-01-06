import AllRoutes from "./routes/AllRoutes"

// Import Header Comp nachdem sie als default exportiert wurden 
import {Header, Footer} from "./components/";


function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
