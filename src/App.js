import s from "./styles/main.module.css";
import Nav from "./components/Nav/Nav";
import NavMobile from "./components/NavMobile/NavMobile";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className={s.root}>
      <Nav />
      <NavMobile />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
