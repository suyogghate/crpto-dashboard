import React from "react";
import "./styles.css";
import iPhone from "../../assets/iphonex.png";
import gradient from "../../assets/gradient.png";
import {motion} from "framer-motion";
// import Button from "../Button";
import OutlinedButton from "../OutlinedButton/Button";
import Typewriter from "typewriter-effect";
import {RWebShare} from "react-web-share";
import { APP_URL } from "../../constants";

function LandingPageComponent() {
  return (
    <div className="flex-wrapper">
      <div className="heading-container">
        <div className="typing">
          <Typewriter 
            options={{
              strings:["Track.", "Follow.", "Compare.", "Invest."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
          {/* <span className="stroke">Track Crypto</span> */}
          <br />
          <span className="big-heading-blue">Real Time.</span>
        <p className="para">
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </p>
        <div className="button-div">
          {/* <a href="/dashboard">
            <Button text={"Dashboard"} />
          </a> */}
          <RWebShare
            data={{
              text: "Checkout my crypto tracker made using React!",
              url: APP_URL,
              title: "Crypto Tracker",
            }}
            // onClick={() => console.log("shared successfully!")}
          >
            <OutlinedButton text={"Share"} />
          </RWebShare>
        </div>
      </div>

      <div className="img-box">
        <img className="gradient" src={gradient} alt="gradient-img"/>
        <motion.img
          src={iPhone}
          className="phone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default LandingPageComponent;