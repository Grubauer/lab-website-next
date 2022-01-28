import {AnimatedPhoneProject} from "../Objects/AnimatedPhoneProject";
import styled from "@emotion/styled";
import {regularMobileMediaQuery, tabletMediaQuery} from "../../media";
import {useEffect} from "react";
import StyledButton from "../Button";
import TopicWithImage from "../Objects/TopicWithImage";
import {AnimatedWebappProject} from "../Objects/AnimatedWebappProject";
import Link from "next/link";
const Container = styled.div`
    margin: 10rem 0;
`

const ProjectsContainer = styled.div`
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

const Title = styled.h3`
   
`

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
`

const Spacer = styled.div`
    height: 10rem;
`

export default function ProjectOverviewLimited({projects})
{
    function getProjectsFromCategory(category)
    {
        return projects.filter(project => project.attributes.type === category)
    }

    return <Container>
        <TopicWithImage
            title={<span>Deine <span className="primaryColorSpan">Idee</span> - Deine <span className="primaryColorSpan">App</span></span>}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non id tempus, convallis nisl pretium elementum vitae et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            imgSrc={"/assets/app_idea.png"}
        />

        {/*<Title>*/}
        {/*    Endecke unsere <span className="primaryColorSpan">Projekte</span>*/}
        {/*</Title>*/}
        <ProjectsContainer>
            {/*<BackgroundText>APPS</BackgroundText>*/}
            {getProjectsFromCategory("App").map(project => <AnimatedPhoneProject canvasId={"overview"+project.id} key={project.id} project={project}/>)}
        </ProjectsContainer>


        {/*<ButtonWrapper>*/}
        {/*    <Link href={"/projects"} passHref>*/}
        {/*        <StyledButton>Mehr entdecken</StyledButton>*/}
        {/*    </Link>*/}

        {/*</ButtonWrapper>*/}
        <Spacer/>

        <TopicWithImage
            title={<span>Webapps. <span className="primaryColorSpan">Volle Funktionalität</span><br/> - egal auf welchem Gerät.</span>}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non id tempus, convallis nisl pretium elementum vitae et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            imgSrc={"/assets/smartsced_webapp.png"}
        />
        <ProjectsContainer>
            {/*<BackgroundText>APPS</BackgroundText>*/}
            {getProjectsFromCategory("Webapp").map(project => <AnimatedWebappProject canvasId={"overview"+project.id} key={project.id} project={project}/>)}
        </ProjectsContainer>
        {/*<ButtonWrapper>*/}
        {/*    <StyledButton>Mehr entdecken</StyledButton>*/}
        {/*</ButtonWrapper>*/}




    </Container>
}