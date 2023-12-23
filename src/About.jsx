import React from "react";
import web from "../src/img/about (1).jpg"
import Common from "./Common";

function About() {
    return (
      <>
       <Common name="Wellcome to About Page "
               imgsrc={web}
               visit="/Contact"
                btname="Contact Now"
       />
      </>
     )
   }
   
   export default About;