import {PhoneAnimation} from "../MagicMaxi/PhoneAnimation";
import styled from "@emotion/styled";
import React, {useEffect} from "react";
import {gsap} from "gsap";
import StyledButton from "../Button";

const AnimationContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
   

`
const TextOverlay = styled.div`
    position: absolute;
    top: 50%;
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
   
`

const ProjectTitle = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    position: absolute;
    height: 50px;
    overflow: hidden;
    top: -50%;
    left: 50%;
    margin: 0;
    opacity: 0;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.colors.primary};
    
`

const ProjectTitleWrapper = styled.div`
        position: relative;
        overflow: hidden;
        height: 40px;
        width: 100%;
        pointer-events: none;
    `
const ProjectDescription = styled.p`
    opacity: 0;
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

export function AnimatedPhoneProject({project, img_count, onPhoneHovered})
{

    const [hovered, setHovered] = React.useState(false)

    useEffect(()=> {
        onPhoneHovered && onPhoneHovered(hovered);
        if(hovered)
        {
            gsap.to("h3", {duration: 1, color: "#fff", top: "50%", opacity: 1, ease: "power3.out", delay: 0.6});
            gsap.to("#projectDescription", {duration: 1, top: "50%", opacity: 1, ease: "power3.out", delay: 1});
            // gsap.to("#projectHint", {duration: 1, top: "50%", opacity: 1, ease: "power3.out", delay: 1.4});

        }
        else{
            gsap.to("h3", {duration: 1, top: "-50%", opacity: 0, ease: "power3.out", delay: 0});
            gsap.to("#projectDescription", {duration: 1, opacity: 0, ease: "power3.out", delay: 0});
            // gsap.to("#projectHint", {duration: 1, top: "50%", opacity: 0, ease: "power3.out", delay: 0});
        }
    }, [hovered])

    const projects = {
        juksel: {
            title: "Juksel",
            description: "Mit Juksel kannst du ganz einfach und unkompliziert die Musik die in deiner Bar läuft mitbestimmen",
            type: "App",
            folderName: "juksel_left_to_right",
            imageNameWithoutIndex: "Untitled Frame"
        },
        partytime: {
            title: "PartyTime",
            description: "PartyTime ist ein kostenloses, einfaches und schnelles Musik-Party-App. Mit PartyTime kannst du deine Lieblings-Musikparty mit deinen Freunden teilen.",
            type: "App",
            folderName: "partytime",
            imageNameWithoutIndex: "iphone_website_hero Frame"
        },
        sqooter: {
            title: "Sqooter",
            description: "Sqooter ist eine App, die dir die Möglichkeit gibt, deine Lieblings-Musik zu finden. Mit Sqooter kannst du deine Lieblings-Musikparty mit deinen Freunden teilen.",
            type: "App",
            folderName: "sqooter",
            imageNameWithoutIndex: "iphone_website_hero Frame"
        },
    }

    const randomProjectIndex = Math.floor(Math.random() * Object.keys(projects).length);
    const activeProject = projects[Object.keys(projects)[randomProjectIndex]];

    return <AnimationContainer onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <PhoneAnimation activeProject={activeProject} style={{height: "60%"}} />
        <TextOverlay>
            <ProjectTitleWrapper>
                <ProjectTitle>{activeProject.title}</ProjectTitle>
            </ProjectTitleWrapper>
            <ProjectDescription id="projectDescription">
                {activeProject.description}
            </ProjectDescription>
            {/*<StyledButton id="projectHint">*/}
            {/*    erfahre mehr*/}
            {/*</StyledButton>*/}
        </TextOverlay>

    </AnimationContainer>
}