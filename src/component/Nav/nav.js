import React from 'react';
import styled from 'styled-components'

const Nav = () => {
    return(
        <Header>
            <Menu>
                <MenuTitle>Login</MenuTitle>
                <MenuTitle>Product</MenuTitle>
            </Menu>
        </Header>
    )   
}

const MenuTitle = styled.li`
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
background: rgb(73,79,82);
color:white;
`
export default Nav;