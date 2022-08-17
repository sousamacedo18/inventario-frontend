import React from "react";
import '../../global.css';
import './styles.css';

import Menu from "../../componentes/Menu";

export default function Dashboard(){
    return(
            <div className="dashboard-container">
                {/* <p>Estou no Dashboard</p> */}
               
                <Menu/>
                  
                <div className="principal">
                        <p>Principal</p>
                </div>
                        
            </div>
  
    )
}