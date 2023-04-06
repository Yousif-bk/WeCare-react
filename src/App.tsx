import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./helper/Routes";
function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
