import React from "react";
import { Link } from "react-router-dom";

function Navi(){
       return(
           <div>
               <nav className="bg-dark d-flex justify-content-evenly position-fixed start-0 w-100">
                  <li><Link to="/homepage" className="fs-2 text-light">Home</Link></li>
                  <li><Link to="/Component" className="fs-2 text-light">About</Link></li>
                  <li><Link to="/service" className="fs-2 text-light">Service</Link></li>
               </nav>
                  
           </div>
       );
}

export default Navi