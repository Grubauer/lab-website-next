
import Image from 'next/image'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import styled from '@emotion/styled'
import StyledButton from "../Button";
import BackgroundCircles from "../Graphics/BackgroundCircles";
import {bigScreenMediaQuery, narrowMediaQuery, tabletBreakpoint, tabletMediaQuery} from "../../media";
import {PhoneAnimation} from "../MagicMaxi/PhoneAnimation";
import {AnimatedPhoneProject} from "./AnimatedPhoneProject";
import React, {useEffect} from "react";

const ContainerWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    ${tabletMediaQuery} {
        display: none;
    }  
    
    ${bigScreenMediaQuery} {
       max-width: 100vw;
       display: flex;
       justify-content: flex-end;
    }
`

const Container = styled.div`
    max-width: 100vw;
    overflow: hidden;
`

const BackgroundCircleWrapper = styled.div`
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    * {
        overflow: hidden;
        max-width: 100vh;
    }
    
    ${narrowMediaQuery}{
       transform: translateX(30%);
    }
`

const ImageWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    ${narrowMediaQuery}{
       transform: translate(-28%, -50%);
    } 
`

export default function PhonerenderWithBackgroundCircles({project}) {
    const [phoneHovered, setPhoneHovered] = React.useState(false);

    return <ContainerWrapper>
        <Container>


        <BackgroundCircleWrapper>
            <BackgroundCircles phoneHovered={phoneHovered}/>
        </BackgroundCircleWrapper>
        <ImageWrapper>
            {/*<Image alt={"Iphone with Juksel-App inside"} src={"/assets/juksel_render.png"} layout={"fill"} objectFit={"contain"}/>*/}
            <AnimatedPhoneProject project={project} canvasId={"heroCanvas"} style={{height: "70%"}} onPhoneHovered={setPhoneHovered}/>
        </ImageWrapper>
        </Container>
        </ContainerWrapper>
}
