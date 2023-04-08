import About from "./component/About";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Portofolio from "./component/Portofolio";
import SocialLinks from "./component/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portofolio />

      <SocialLinks />
    </div>
  );
}

export default App;
