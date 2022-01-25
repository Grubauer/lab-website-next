import {PhoneAnimation} from "../MagicMaxi/PhoneAnimation";
import styled from "@emotion/styled";
import React, {useEffect} from "react";
import Link from "next/link";

const AnimationContainer = styled.a`
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

export function AnimatedPhoneProject({project, img_count, onPhoneHovered, canvasId})
{

    const [hovered, setHovered] = React.useState(false)

    let titleAnimation;
    let descriptionAnimation;
    useEffect(()=> {

        onPhoneHovered && onPhoneHovered(hovered);

        if(titleAnimation)
        {
            titleAnimation.kill();
        }
        if(descriptionAnimation)
        {
            descriptionAnimation.kill();
        }
        if(hovered)
        {
            // titleAnimation = gsap.to("#projectTitle" + canvasId, {duration: 1, color: "#fff", top: "50%", opacity: 1, ease: "power3.out", delay: 0.6});
            // descriptionAnimation = gsap.to("#projectDescription" + canvasId, {duration: 1, top: "50%", opacity: 1, ease: "power3.out", delay: 1});
            // gsap.to("#projectHint", {duration: 1, top: "50%", opacity: 1, ease: "power3.out", delay: 1.4});

        }
        // else{
        //     titleAnimation = gsap.to("#projectTitle" + canvasId, {duration: 1, top: "-50%", opacity: 0, ease: "power3.out", delay: 0});
        //     descriptionAnimation = gsap.to("#projectDescription" + canvasId, {duration: 1, opacity: 0, ease: "power3.out", delay: 0});
        //     // gsap.to("#projectHint", {duration: 1, top: "50%", opacity: 0, ease: "power3.out", delay: 0});
        // }
    }, [hovered])
    //
    // const projects = {
    //     juksel: {
    //         title: "Juksel",
    //         description: "Mit Juksel kannst du ganz einfach und unkompliziert die Musik die in deiner Bar läuft mitbestimmen",
    //         type: "App",
    //         folderName: "juksel_left_to_right",
    //         imageNameWithoutIndex: "Untitled Frame"
    //     },
    //     partytime: {
    //         title: "PartyTime",
    //         description: "PartyTime ist ein kostenloses, einfaches und schnelles Musik-Party-App. Mit PartyTime kannst du deine Lieblings-Musikparty mit deinen Freunden teilen.",
    //         type: "App",
    //         folderName: "partytime",
    //         imageNameWithoutIndex: "iphone_website_hero Frame"
    //     },
    //     sqooter: {
    //         title: "Sqooter",
    //         description: "Sqooter ist eine App, die dir die Möglichkeit gibt, deine Lieblings-Musik zu finden. Mit Sqooter kannst du deine Lieblings-Musikparty mit deinen Freunden teilen.",
    //         type: "App",
    //         folderName: "sqooter",
    //         imageNameWithoutIndex: "iphone_website_hero Frame"
    //     },
    // }

    // const randomProjectIndex = Math.floor(Math.random() * Object.keys(projects).length);
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

    return <Link href={"/projects/" + project.id}>

    <AnimationContainer >
        <PhoneAnimation onTouchStart={() => setHovered(true)} onTouchEnd={() => setHoveredWithTimeOut(false)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} canvasId={canvasId} activeProject={activeProject} />
        <TextOverlay hovered={hovered}>

            <ProjectTitle id={"projectTitle" + canvasId}>{activeProject.title}</ProjectTitle>

            <ProjectDescription id={"projectDescription" + canvasId}>
                {activeProject.description}
            </ProjectDescription>
        </TextOverlay>

    </AnimationContainer>
    </Link>
}