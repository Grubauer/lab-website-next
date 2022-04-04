import styled from "@emotion/styled";
import BigLabLogo from "../Graphics/FullLabLogo";
import {regularMobileMediaQuery} from "../../media";
import {useEffect} from "react";
import Link from "next/link";

const Nav = styled.nav`
    display: flex;
    max-width: 1400px;
    width: 100%;
  margin: auto;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  
  padding: 3rem 3rem 1rem;
  position: fixed;
  gap: 10%;
  z-index: 100;
  ${regularMobileMediaQuery} {
    padding: 0rem 1.5rem;
  }
 
`

const DesktopNavItemContainer = styled.ul`
    list-style: none;
    
    display: flex;
    gap: 10%;
    align-items: center;
    flex: 1;
    
    a:hover{
        color: ${props => props.theme.colors.primary};
    }
    
    
    
    
    ${regularMobileMediaQuery}{
        display: none;
    }
`

export default function Navigation({scrollProgress = 0}){

    useEffect(() => {
        // console.log(scrollProgress)
    }, [scrollProgress])

    return <Nav style={{backdropFilter: scrollProgress > 0.9 ? "blur(10px)" : "unset"}}>
        <Link href="/"><a><BigLabLogo/></a></Link>
        <DesktopNavItemContainer >
            {/*<li>*/}
            {/*    <a href="#">Home</a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link href="/projects">*/}
            {/*        <a>Projekte</a>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link href="/about">*/}
            {/*        <a>Über Uns</a>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            {/*/!*<li>*!/*/}
            {/*/!*    <Link href="/procedure">*!/*/}
            {/*/!*        <a>Projektablauf</a>*!/*/}
            {/*/!*    </Link>*!/*/}
            {/*/!*</li>*/}

        </DesktopNavItemContainer>
    </Nav>
}