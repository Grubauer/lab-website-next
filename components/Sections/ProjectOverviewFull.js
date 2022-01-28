import {AnimatedPhoneProject} from "../Objects/AnimatedPhoneProject";
import styled from "@emotion/styled";
import {regularMobileMediaQuery, tabletMediaQuery} from "../../media";
import {useEffect} from "react";
import StyledButton from "../Button";
import TopicWithImage from "../Objects/TopicWithImage";
import {AnimatedWebappProject} from "../Objects/AnimatedWebappProject";

const Container = styled.div`
    margin: 5rem 0;
`

const ProjectsContainer = styled.div`
    margin: 0rem 0;
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

const Title = styled.h3`
   
`

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
`

const Spacer = styled.div`
    height: 8rem;
`

export default function ProjectOverviewFull({projects})
{
    const appProjects = ["juksel", "partytime"]

    useEffect(() => {
        console.log(projects)
    }, [])

    function getProjectsFromCategory(category)
    {
        return projects.filter(project => project.attributes.type === category)
    }

    return <Container>

        <ProjectsContainer>
            {getProjectsFromCategory("App").map(project => <AnimatedPhoneProject canvasId={"overview"+project.id} key={project.id} project={project}/>)}
        </ProjectsContainer>
        <Spacer/>
        <ProjectsContainer>
            {/*<BackgroundText>APPS</BackgroundText>*/}
            {getProjectsFromCategory("Webapp").map(project => <AnimatedWebappProject canvasId={"overview"+project.id} key={project.id} project={project}/>)}
        </ProjectsContainer>
    </Container>
}