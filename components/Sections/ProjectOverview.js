import {AnimatedPhoneProject} from "../Objects/AnimatedPhoneProject";
import styled from "@emotion/styled";
import {regularMobileMediaQuery, tabletMediaQuery} from "../../media";

const Container = styled.div`
    margin: 10rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10rem;
    
    ${tabletMediaQuery}
    {
        grid-template-columns: 1fr;
        gap: 10rem;
    }
    
`

export default function ProjectOverview()
{
    const appProjects = ["juksel", "sqooter", "partytime"]
    return <Container>
        {appProjects.map(project => <AnimatedPhoneProject canvasId={"overview"+project} key={project} project={project}/>)}
    </Container>
}