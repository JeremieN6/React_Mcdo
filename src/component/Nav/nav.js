import React from 'react';
import styled from 'styled-components'

const Nav = () => {
    return(
        <Header>
            <Menu>
                <MenuTitle href="/login">Login</MenuTitle>
                <MenuTitle  href="/produits">Product</MenuTitle>
            </Menu>
        </Header>
    )   
}

const MenuTitle = styled.a`
color:white;
font-weight:bold;
`

const Menu = styled.ul`
width:40%;
display:flex;
justify-content:space-around;
align-items:center;
list-style:none;   
`

const Header = styled.nav`
display:flex;
justify-content:space-around;
align-items:center;
min-height:10vh;
background: #21522f;
color:white;
`
export default Nav;