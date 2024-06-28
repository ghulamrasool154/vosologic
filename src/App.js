import "./App.css";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Routing from "./routes/Routing";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="conent">
        <Routing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
