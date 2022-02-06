import styled from "@emotion/styled";
import React, {useEffect} from "react";
import Link from "next/link";
import {regularMobileMediaQuery} from "../../media";
import BigLabLogo from "../Graphics/FullLabLogo";

const CustomFooter = styled.footer`
    margin-top: 50px;
    padding: 20px;
    width: 100%;
   background-color: ${props => props.theme.colors.backgroundHovered};
`

const LinkList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  
    
    a:hover{
        color: ${props => props.theme.colors.primary};
    }
    ${regularMobileMediaQuery}{
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
          padding: 0;
    }
`

const CodedWithLove = styled.code`
    color: #fff;
    margin: .3rem auto;
    display: block;
    text-align: center;
`

const LabLogo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export function Footer() {


    return <CustomFooter>
        <LabLogo>
            <BigLabLogo/>
        </LabLogo>
        <LinkList>
            <li><Link href={"/impressum"}><a>Impressum</a></Link></li>
            <li><a href="mailto:office@lab73.at">office@lab73.at</a></li>
            <li><a href="tel:+436503702288">+43 677 63679695</a></li>
        </LinkList>
        <CodedWithLove>coded with <span role="img" aria-label="herz emoji">❤️</span>️ by lab73 © 2022</CodedWithLove>
    </CustomFooter>
}