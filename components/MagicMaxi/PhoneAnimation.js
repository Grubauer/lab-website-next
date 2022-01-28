import styled from "@emotion/styled";
import React, {useEffect} from "react";
import {MagicMaxi} from "./magicmaxi";
import {regularMobileMediaQuery, tabletMediaQuery} from "../../media";
import {MagicMaxiController} from "./magicmaxicontroller";


const Canvas = styled.canvas`
    // height: 30rem;
        transition: transform 0.5s ease, filter 0.5s ease 0.5s;
    height: 35rem;
    
    :hover {
        transform: scale(1.3) translateY(-5%);
        filter: brightness(0.5);
    }
    
    ${tabletMediaQuery}{
        height: unset;
        max-width: 100%;
        max-height: 70vh;
    }
    
    
`

export function PhoneAnimation({activeProject, speed = 25, img_count = 26, canvasId, ...rest}) {

    const animationSources = activeProject.animation.data.map(data => `http://178.128.196.79:1337${data.attributes.url}`)
    // const animationSources = activeProject.animation.data.map(data => `${process.env.CMS_URL}${data.attributes.url}`)
    useEffect(() => {
        const filenames = []


        const magicMaxiHover = new MagicMaxi(canvasId,  animationSources, MagicMaxi.modes.HOVER, {speed})
        MagicMaxiController.addMagicMaxi(magicMaxiHover);
    }, []);

    return <Canvas id={canvasId} height={1000} width={600}  {...rest} />
}