import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './navbarElement'

export default function Navbar
() {
  return (
    <div>
        <Nav>
            <Bars/>
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
            </NavMenu>
        </Nav>
    </div>
  )
}
