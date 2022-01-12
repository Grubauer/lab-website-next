
import Image from 'next/image'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import styled from '@emotion/styled'
import StyledButton from "../Button";
import BackgroundCircles from "../Graphics/BackgroundCircles";
import {bigScreenMediaQuery, narrowMediaQuery, tabletBreakpoint, tabletMediaQuery} from "../../media";

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
    ${bigScreenMediaQuery} {
       max-width: 100vw;
    }
`

const BackgroundCircleWrapper = styled.div`
    max-height: 100vh;
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
    
    ${narrowMediaQuery}{
       transform: translate(-28%, -50%);
    } 
`

export default function PhonerenderWithBackgroundCircles() {
    return <ContainerWrapper>
        <Container>


        <BackgroundCircleWrapper>
            <BackgroundCircles/>
        </BackgroundCircleWrapper>
        <ImageWrapper>
            <Image alt={"Iphone with Juksel-App inside"} src={"/assets/juksel_render.png"} layout={"fill"} objectFit={"contain"}/>
        </ImageWrapper>
        </Container>
        </ContainerWrapper>
}
