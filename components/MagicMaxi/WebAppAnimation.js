import styled from "@emotion/styled";
import React, {useEffect} from "react";
import {MagicMaxi} from "./magicmaxi";
import {tabletMediaQuery} from "../../media";
import {MagicMaxiController} from "./magicmaxicontroller";


const Canvas = styled.canvas`
    // height: 30rem;
        transition: transform 0.5s ease, filter 0.5s ease 0.5s;
    height: 35rem;
    transform: scale(0.7);
    :hover {
        transform: scale(1) translateY(-5%);
        filter: brightness(0.5);
    }
    
    ${tabletMediaQuery}{
        height: unset;
        max-width: 100%;
        
        transform: scale(1);
        :hover {
        transform: scale(1.4) translateY(-5%);
        }
    }
`

export function WebAppAnimation({activeProject, speed = 25, img_count = 26, canvasId, ...rest}) {

    const animationSources = activeProject.animation.data.map(data => `http://178.128.196.79:1337${data.attributes.url}`)
    // const animationSources = activeProject.animation.data.map(data => `${process.env.CMS_URL}${data.attributes.url}`)
    useEffect(() => {
        const filenames = []


        const magicMaxiHover = new MagicMaxi(canvasId,  animationSources, MagicMaxi.modes.HOVER, {speed})
        MagicMaxiController.addMagicMaxi(magicMaxiHover);
    }, []);

    return <Canvas id={canvasId} height={1000} width={1500}  {...rest} />
}