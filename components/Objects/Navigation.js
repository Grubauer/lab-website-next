import styled from "@emotion/styled";
import BigLabLogo from "../Graphics/FullLabLogo";
import {regularMobileMediaQuery} from "../../media";


const Nav = styled.nav`
    display: flex;
    max-width: 1400px;
    width: 100%;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
  
  padding: 4rem 3rem;
  position: fixed;
  gap: 10%;
  
  ${regularMobileMediaQuery} {
    padding: 1.5rem 1.5rem;
  }
`

const DesktopNavItemContainer = styled.ul`
    list-style: none;
    display: flex;
    gap: 10%;
    align-items: center;
    flex: 1;
    
    ${regularMobileMediaQuery}{
        display: none;
    }
`

export default function Navigation(){
    return <Nav>
        <BigLabLogo></BigLabLogo>
        <DesktopNavItemContainer>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Projekte</a>
            </li>
            <li>
                <a href="#">Über Uns</a>
            </li>
        </DesktopNavItemContainer>
    </Nav>
}