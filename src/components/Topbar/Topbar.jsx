import "./Topbar.scss"
import {Person, Mail} from "@mui/icons-material";


export default function Topbar({menuOpen, setMenuOpen}){
    return (
        <div className = { "topbar " + (menuOpen && "active")} >
            <div className="wrapper">  {/* wrapper ke andar hum log jo bhi upar rhega topbar mei woh dalenge */} 
                <div className="left">
                    <a href="#intro" className="logo">WeB</a> {/* Iske andar ek homepage ka logo hoga jisse hum jaise hi click krenge humara web jo bhi page mei ho wapas se home page mei aa jayega */}
                <div className="itemContainer">
                    <Person className="icon" />
                    <span>+84 75 999 563</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon" />
                    <span>abhishek@webServices.com</span>
                </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> {return setMenuOpen(!menuOpen)}}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}