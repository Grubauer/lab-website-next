import styled from "@emotion/styled";
import React, {useEffect} from "react";
import Link from "next/link";

const CustomFooter = styled.footer`
    margin-top: 50px;
    padding: 20px;
    width: 100%;
`

const LinkList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 10px;
`

const CodedWithLove = styled.code`
    color: #fff;
    margin: .3rem auto;
    display: block;
    text-align: center;
`

export function Footer() {


    return <CustomFooter>
        <LinkList>
            <li><Link href={"privacy"}><a>Datenschutz</a></Link></li>
            <li><Link href={"impressum"}><a>Impressum</a></Link></li>
        </LinkList>
        <CodedWithLove>coded with <span role="img" aria-label="herz emoji">❤️</span>️ by lab73 © 2022</CodedWithLove>
    </CustomFooter>
}