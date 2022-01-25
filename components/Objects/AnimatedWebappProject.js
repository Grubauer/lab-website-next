import {PhoneAnimation} from "../MagicMaxi/PhoneAnimation";
import styled from "@emotion/styled";
import React, {useEffect} from "react";
import {gsap} from "gsap";
import StyledButton from "../Button";
import {WebAppAnimation} from "../MagicMaxi/WebAppAnimation";

const AnimationContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    position: relative;
   

`
const TextOverlay = styled.div`
    position: absolute;
    top: 35%;
    left: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    transform: translate(-50%, -50%);
    pointer-events: none;
    
    
   
    > *{
        transition: all 0.5s ease-in-out;
        opacity: 0;
        transform: translateY(100%);
        ${props => props.hovered && `
            opacity: 1;
            transform: translateY(0px);
            transition: all 0.5s ease-in-out 0.2s;
        `}
    }
   
`

const ProjectTitle = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
   
    height: 50px;
    opacity: 0;
    margin: 0;
   
    
    
`

const ProjectDescription = styled.p`
  
    color: #fff;
    max-width: 300px;
    font-size: 14px;
    text-align: center;
    weight: 100;
`

// const Hint = styled.p`
//     opacity: 0;
//
//     max-width: 300px;
//     font-size: 14px;
//     text-align: center;
//     weight: 100;
//     text-decoration: underline;
//     color: white;
//     background: ${props => props.theme.colors.primary};
// `

export function AnimatedWebappProject({project, canvasId})
{

    const [hovered, setHovered] = React.useState(false)
    useEffect(()=> {




    }, [hovered])

    const activeProject = project.attributes;

    let hoverTimoutRunning = false;
    const setHoveredWithTimeOut = (hovered) => {
        if(!hoverTimoutRunning)
        {
            setTimeout(() => {
                setHovered(hovered);
                hoverTimoutRunning = false;
            }, 5000);
        }
    }

    return <AnimationContainer >
        <WebAppAnimation onTouchStart={() => setHovered(true)} onTouchEnd={() => setHoveredWithTimeOut(false)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} canvasId={canvasId} activeProject={activeProject} />
        <TextOverlay hovered={hovered}>

            <ProjectTitle id={"projectTitle" + canvasId}>{activeProject.title}</ProjectTitle>

            <ProjectDescription id={"projectDescription" + canvasId}>
                {activeProject.description}
            </ProjectDescription>
        </TextOverlay>

    </AnimationContainer>
}