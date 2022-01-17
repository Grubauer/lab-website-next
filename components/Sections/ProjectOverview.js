import {AnimatedPhoneProject} from "../Objects/AnimatedPhoneProject";
import styled from "@emotion/styled";
import {regularMobileMediaQuery, tabletMediaQuery} from "../../media";

const Container = styled.div`
    margin: 10rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10rem;
    position: relative;
    
    ${tabletMediaQuery}
    {
        grid-template-columns: 1fr;
        gap: 10rem;
    }
    
    > * {
        z-index: 2;
    }
    
`

const BackgroundText = styled.h2`
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-size: 10vw;
    text-align: center;
    padding: 1rem;
    width: 100%;
   
    z-index: 1;`

export default function ProjectOverview()
{
    const appProjects = ["juksel", "partytime"]
    return <div>
        <Container>
            <BackgroundText>APPS</BackgroundText>
            {appProjects.map(project => <AnimatedPhoneProject canvasId={"overview"+project} key={project} project={project}/>)}
        </Container>
        <Container>
            {appProjects.map(project => <AnimatedPhoneProject canvasId={"overview2"+project} key={project} project={project}/>)}
        </Container>

    </div>
}