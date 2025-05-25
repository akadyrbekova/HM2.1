import RoutesAll from "./routes/RoutesAll";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <RoutesAll />
      <Footer />
    </>
  );
}

export default App;
