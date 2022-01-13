import {AnimatedPhoneProject} from "../Objects/AnimatedPhoneProject";
import styled from "@emotion/styled";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
`

export default function ProjectOverview()
{
    const appProjects = ["juksel", "sqooter", "partytime"]
    return <Container>
        {appProjects.map(project => <AnimatedPhoneProject canvasId={"overview"+project} key={project} project={project} />)}
    </Container>
}