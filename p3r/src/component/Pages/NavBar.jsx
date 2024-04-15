import "../CSS/NavBar.css"
import React, {useState} from "react";
import logo from "../Images/logo.png"
import { Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faX } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {

    //fonction pour afficher la sidebar
    function showSideBar() {
        const sidebar = document.getElementById("side")
        sidebar.style.display = "flex"
    }

    //fonction pour cacher la sidebar
    function hideSideBar() {
        const sidebar = document.getElementById("side")
        sidebar.style.display = "none"
    }

    return(
        <>
        <nav>
            <ul id="side" className="sidebar">
                <li onClick={() => hideSideBar()}><a href="#"><FontAwesomeIcon icon={faX} /></a></li>  
                <li><Link to="/Story">Story</Link></li>
                <li><Link to="/Gameplay">Gameplay</Link></li>
                <li><Link to="/Characters">Characters</Link></li>
                <li><Link to="/Persona">Persona</Link></li>             
            </ul>
            <ul className="mainsidebar">
                <li className="noHover"><a href="/"><img className="logo" src={logo} alt="Logo" /></a></li>
                <li className="hideOnMobile"><Link to="/Story">Story</Link></li>
                <li className="hideOnMobile"><Link to="/Gameplay">Gameplay</Link></li>
                <li className="hideOnMobile"><Link to="/Characters">Characters</Link></li>
                <li className="hideOnMobile"><Link to="/Persona">Persona</Link></li> 
                <li className="menu-button" onClick={() => showSideBar()}><a href="#"><FontAwesomeIcon icon={faBars} /></a></li>            
            </ul>
           </nav>
        </>
    )
}