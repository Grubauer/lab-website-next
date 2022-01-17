import styled from "@emotion/styled";
import React, {useEffect} from "react";
import {MagicMaxi} from "./magicmaxi";
import {tabletMediaQuery} from "../../media";
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
    }
`

export function PhoneAnimation({activeProject, speed = 25, img_count = 26, canvasId, ...rest}) {

    const animationsFolderPath= "/assets/animationFrames/projects"

    useEffect(() => {
        const filenames = []

        for (let i = 1; i < img_count + 1; i++) {
            filenames.push(`${activeProject.imageNameWithoutIndex} ${i}.png`);
        }
        const magicMaxiHover = new MagicMaxi(canvasId,  animationsFolderPath + "/" + activeProject.folderName, filenames, MagicMaxi.modes.HOVER, {speed})
        MagicMaxiController.addMagicMaxi(magicMaxiHover);
    }, []);

    return <Canvas id={canvasId} height={1000} width={600}  {...rest} />
}