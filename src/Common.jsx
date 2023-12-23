import React from "react";
import web from "../src/img/img1.svg"
import { NavLink } from "react-router-dom";

function Common(props) {
    return (
      <>
       <section id="header" className="d-flex align-items-center">
       <div className="container-fluid nav_bg">
        <div className="row">
         <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-5 order-lg-1 d-flex justify-content-center flex-column">
             <h1>{props.name}<strong className="brand-name"> DGspark</strong></h1>
             <h2 className="my-3">We are the team of Dgspark making the <span>Wedding Template</span> </h2>
             <div className="mt-3"> <NavLink to={props.visit} className="btn btn-outline-dark">{props.btname}</NavLink></div>
          </div>

          <div className="col-lg-6 pt-5 order-1 order-lg-2 header-mg">
             <img src={props.imgsrc} className="img-fluid animated" alt="home img"/>
          </div>
          </div>
         </div>
        </div>
       </div>

       </section>
      </>
     )
   }
   
   export default Common;