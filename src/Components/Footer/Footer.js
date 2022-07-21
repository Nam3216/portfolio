import React from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./styleFooter.css"

const Footer=()=>{

    return(
        <div className="footer"><ArrowUpwardIcon id="arrow" />
            <div className="footer-footer">
                <a href="#home">Ir arriba </a>
            </div>
        </div>
    )
}

export default Footer