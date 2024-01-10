import React from "react"
import "./styles.css"
import {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars,faXmark} from "@fortawesome/free-solid-svg-icons"
const Navbar = () =>{
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false)
    const MENU =[
        {
            title : "Gallery",
            link :"#"
        },
        {
            title : "Login",
            link :"#"
        },
        {
            title : "Events",
            link :"#"
        },
        {
            title : "Contact",
            link :"#"
        },
        {
            title : "Feedback",
            link :"#"
        }
    ]
  
    const handleOnClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    
    return (
        <nav>
      <div className="logo">
        Logo
      </div>
      <ul className="desktop-menu">
        {
            MENU.map((menuItem) => {
                return <li><a href="{menuItem.link}">{menuItem.title}</a></li>

            })
        }
      </ul>
       {isMobileMenuOpen ? <FontAwesomeIcon className="mobile-menu-button" icon={faXmark} onClick={handleOnClick} /> : <FontAwesomeIcon className="mobile-menu-button" icon={faBars} onClick={handleOnClick} />}
      {
        isMobileMenuOpen ? <ul className="mobile-menu">
        {
            MENU.map((menuItem) => {
                return <li><a href="{menuItem.link}">{menuItem.title}</a></li>

            })
        }
      </ul> : " "
      }
        </nav>
    )
}
export default Navbar