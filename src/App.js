import { Navbar, Footer } from "./containers/components";
import { TopNews, LocalNews, Market } from "./containers";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <TopNews />
      <Market />
      <LocalNews />
      <Footer />
    </>
  );
}

export default App;
