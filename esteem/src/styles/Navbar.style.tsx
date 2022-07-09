import styled from "styled-components";
import { Link } from 'react-router-dom';


interface RightContainer {
  extendNavbar: boolean
  rightContainer: React.MutableRefObject<any>
  enableMenuOverlay:boolean
}

const mediaQueryBreak = "850px";


export const NavbarContainer = styled.nav`
width:100%;
display:flex;
justify-content:space-around;
z-index:1;
@media(max-width:850px){
  flex-wrap:wrap;
}
`;

export const LogoContainer = styled.div`

  @media (min-width: ${mediaQueryBreak}){
    max-width:50%;
  };
  @media (max-width: ${mediaQueryBreak}){
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
  };
  
`

export const HamburgerMenu = styled.div`
    border:1px solid black;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;

  
  @media (min-width: ${mediaQueryBreak}){
    display:none;
  };
`

export const Logo = styled.img`
width:100%;
max-width:30rem;
object-fit: contain;
@media (max-width: ${mediaQueryBreak}){
  max-width:50%;
  };

`

export const MenuToggleButton = styled.button`
  @media (min-width: ${mediaQueryBreak}){
  display:none;
  };
`
export const MenuOverlayContainer = styled.div`
 @media (max-width:  ${mediaQueryBreak}){
  position:"relative";
  height:auto;
  width:100%;}
`

export const RightContainer = styled.div<RightContainer>`
  @media (max-width:  ${mediaQueryBreak}){
  width:100%;
  overflow: hidden;
  transition:.2s;
  max-height:${(props) => (props.extendNavbar ? `${props.rightContainer.current.scrollHeight}px` : "0")};
  position:${props=>(props.enableMenuOverlay?"absolute":"relative")}
  };

`

export const NavbarLinkContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
height:auto;

@media (max-width: ${mediaQueryBreak}){
    width:100%;
    z-index:1;
  };

`

export const NavbarLink = styled(Link)`
color:black;
font-size:1.3rem;
font-family:Arial, Helvetica, sans-serif;
text-decoration:none;
margin:20px;
text-align:center;
@media (max-width:  ${mediaQueryBreak}){
  width:100%;
  };
`

