import React from "react";
import Greet from "./greet";
import TypeWriterC from "./typewriter";
import Cards from "./cards";
import Footer from "./footer";

function Home() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Greet />
      <TypeWriterC />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
