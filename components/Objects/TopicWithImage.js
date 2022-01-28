import styled from "@emotion/styled";
import BigLabLogo from "../Graphics/FullLabLogo";
import {regularMobileMediaQuery} from "../../media";
import {useEffect} from "react";
import Image from "next/image";

const Container = styled.div`
    display: flex;
    height: 30rem;
    gap: 20px;
    ${regularMobileMediaQuery} {
        flex-direction: column-reverse;
        height: 100vh;
        gap: 5px;
    }
    &.swapped{
        flex-direction: row-reverse;
    }
`

const TextContainer = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${regularMobileMediaQuery} {
        flex: 1;
    }
`
const ImageWrapper = styled.div`
    flex: 4;
    position: relative;
    ${regularMobileMediaQuery} {
        flex: 2;
    }
`

const Title = styled.h3`
    font-size: 2rem;
`

const Description = styled.p`
    
`

export default function TopicWithImage({title, description, imgSrc, imgAlt, additionalContent, swapped}){

    return <Container className={swapped ? "swapped" : ""}>
        <TextContainer>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
            {additionalContent}
        </TextContainer>
        <ImageWrapper>
            {imgSrc && <Image alt={imgAlt} src={imgSrc} layout={"fill"} objectFit={"contain"}/>}
        </ImageWrapper>
    </Container>
}