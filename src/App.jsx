import { useState } from "react";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  const [menu, setMenu] = useState("");
  // let title = "Fusion Hive";
  // const hashChanged = () => {
  //   if (window.location.hash.length < 1) {
  //     title = "Fusion Hive";
  //   } else {
  //     title = "FH | " + window.location.hash.slice(1);
  //   }
  // };
  const socialMedia = {
    fb: "https://www.facebook.com/people/Radiance-Glamour/61555681478960/",
    insta:
      "https://www.instagram.com/radiance_and_glamour?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    x: "https://twitter.com/RadianceAndGlam",
    wa: "https://api.whatsapp.com/send/?phone=919289367713&text=*Query*",
    mail: "radianceandglamour@gmail.com",
  };
  return (
    <>
      <div id="top" className={menu}>
        <Header setMenu={setMenu} socialMedia={socialMedia} />
        <Home setMenu={setMenu} socialMedia={socialMedia} />
        <About setMenu={setMenu} />
        <Service setMenu={setMenu} />
        <Work setMenu={setMenu} />
        <Testimonial setMenu={setMenu} />
        <Contact setMenu={setMenu} socialMedia={socialMedia} />
        <Footer setMenu={setMenu} />

        <Preloader />
      </div>
    </>
  );
}

export default App;
