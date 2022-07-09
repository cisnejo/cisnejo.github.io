
import { Logo, MenuToggleButton, NavbarLink, NavbarContainer, HamburgerMenu, MenuOverlayContainer, LogoContainer, RightContainer, NavbarLinkContainer } from '../styles/Navbar.style'
import LogoImg from '../assets/esteem.png'
import { ElementType, useEffect, useState } from 'react';
import React from 'react';

const Navigation: React.FC = () => {

  const navLinkContainer = React.useRef(null) as any;
  const [extendNavbar, setExtendNavbar] = useState<boolean>(false);
  const [enableMenuOverlay, setEnableMenuOverlay] = useState<boolean>(true);
  const content =
    <RightContainer extendNavbar={extendNavbar} rightContainer={navLinkContainer} enableMenuOverlay={enableMenuOverlay} >
      <NavbarLinkContainer ref={navLinkContainer}  >
        <NavbarLink onClick={() => {
          if (extendNavbar) {
            setExtendNavbar((curr) => !curr)
          }
        }} to='/' >Home</NavbarLink>
        <NavbarLink onClick={() => {
          if (extendNavbar) {
            setExtendNavbar((curr) => !curr)
          }
        }} to='about'>About</NavbarLink>
        <NavbarLink onClick={() => {
          if (extendNavbar) {
            setExtendNavbar((curr) => !curr)
          }
        }} to='schedule'>Schedule</NavbarLink>
      </NavbarLinkContainer>
    </RightContainer>

  return (
    <NavbarContainer >
      <LogoContainer>
        <Logo src={LogoImg}></Logo>
        <MenuToggleButton onClick={() => {
          setEnableMenuOverlay(state => !state)
        }}>Toggle Menu Type</MenuToggleButton>
        <HamburgerMenu onClick={() => {
          setExtendNavbar(curr => !curr)
        }}></HamburgerMenu>
      </LogoContainer>
      {enableMenuOverlay ? <MenuOverlayContainer>{content}</MenuOverlayContainer> : content}
    </NavbarContainer>
  );
}

export default Navigation;