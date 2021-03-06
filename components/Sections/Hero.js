
import Image from 'next/image'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import styled from '@emotion/styled'
import StyledButton from "../Button";
import PhonerenderWithBackgroundCircles from "../Objects/PhonerenderWithBackgroundCircles";
import {tabletMediaQuery} from "../../media";
import {PhoneAnimation} from "../MagicMaxi/PhoneAnimation";
import {useEffect} from "react";
import {gsap} from "gsap";

const HeroSection = styled.section`
    height: 100vh;
    width: 100%;
`

const FlexSplitter = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    
`

const LeftPart = styled.div`
    flex: 5;
    z-index: 5;
    ${tabletMediaQuery} {
        margin-top: 10vh;
        height: 90vh;
        display: flex;
        flex-direction: column;
    }
`

const RightPartSpacer = styled.div`
    flex: 4;
    
    ${tabletMediaQuery} {
        display: none;
    }
`

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    z-index: 5;
    
    ${tabletMediaQuery} {
        font-size: 2rem;
    }
`

const Description = styled.p`
    max-width: 35rem;
    margin-bottom: 1.5rem;
    ${tabletMediaQuery} {
        font-size: 1rem;
    }
`

const MobileHeroImageWrapper = styled.div`
    display: none;
    ${tabletMediaQuery} {
        display: block;
        
    }
`

export default function Hero({heroContent, heroProject}) {

    useEffect(() => {
        gsap.from("#left-part", {
            duration: 2,
            opacity: 0,
            y: 100,
            ease: "power3.out",
            stagger: 0.5
        })
    }, [])

    return (
        <HeroSection>
            <FlexSplitter>
                <LeftPart id="left-part">
                    <MobileHeroImageWrapper>
                        <Image alt={"Iphone with Juksel-App inside"} src={"/assets/mac_iphone.png"} height={1293} width={1900}/>
                    </MobileHeroImageWrapper>
                    <Title>
                        <span className="primaryColorSpan">Dein Partner </span> f??r Mobile Apps & Webanwendungen.
                    </Title>
                    <Description>
                        {heroContent.attributes.description}
                    </Description>
                    <StyledButton href="mailto:office@lab73.at?subject=Projektanfrage">
                        Anfrage
                    </StyledButton>
                </LeftPart>
                <RightPartSpacer/>
            </FlexSplitter>
            <PhonerenderWithBackgroundCircles project={heroProject}/>
        </HeroSection>
    )
}
