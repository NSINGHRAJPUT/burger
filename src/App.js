import "./App.css";
import Header from "./components/Header";
import herobg from "./assets/Rectangle 2.png";
import Hero from "./components/Hero";
import Hotitems from "./components/Hotitems";
import Discount from "./components/Discount";
import WhoWeAre from "./components/Whoweare";
import HowDoesItWork from "./components/Howdoesitwork";
import Customer from "./components/Customer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#FBCEB1] relative overflow-x-hidden">
      <div className="absolute -right-[5%] top-0 h-[660px] w-[550px] z-0">
        <img src={herobg} alt="" className="object-contain h-[660px]" />
      </div>
      <Header />
      <Hero />
      <Hotitems />
      <Discount />
      <WhoWeAre />
      <HowDoesItWork />
      <Customer />
      <Footer />
    </div>
  );
}

export default App;
