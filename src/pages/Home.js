import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPageComponent from "../components/HomePageComponents";
import NewsLetter from "../components/NewsLetter";

function Home() {
  return (
    <div style={{minHeight: "100vh"}}>
      <Header />
      <LandingPageComponent />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;