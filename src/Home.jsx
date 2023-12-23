import React from "react";
import web from "../src/img/img1.svg"
import Common from "./Common";

function Home() {
    return (
      <>
       <Common name="Grow your Business with "
               imgsrc={web}
               visit="/Service"
                btname="Get Started"
        />
      </>
     )
   }
   
   export default Home;