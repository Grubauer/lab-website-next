import Head from 'next/head'
import Image from 'next/image'
import {getAllProjectSlugs, getProjectWithSlug} from "../../helper/cms-helper";
import {useRouter} from "next/router";
import styled from "@emotion/styled";
import {regularMobileMediaQuery} from "../../media";
import {server} from "../../config";

const Container = styled.div`
    height: calc(100vh - 500px);
    display: flex;
    margin: 10rem 0; 
    gap: 20px;
    ${regularMobileMediaQuery} {
        flex-direction: column-reverse;
        height: 100vh;
        margin: 0rem 0; 
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
    height: 100%;
    position: relative;
    ${regularMobileMediaQuery} {
        flex: 2;
    }
`

const Title = styled.h3`
    font-size: 2rem;
`

const Description = styled.p``


function Project({project}) {
    console.log(project.attributes.animation[0])
    return (
        <div className={"container"}>
            <Head>
                <title>{project.attributes.title}</title>
                <meta name="description" content={project.attributes.description}/>
            </Head>

            <main>
                <Container>
                    <TextContainer>
                        <Title>
                            {project.attributes.title}
                        </Title>
                        <Description>
                            {project.attributes.description}
                        </Description>
                    </TextContainer>
                    <ImageWrapper>
                        <Image alt={"imgAlt"} src={`${project.attributes.animation[0]}`} layout={"fill"} objectFit={"cover"}/>
                    </ImageWrapper>
                </Container>
            </main>
        </div>
    )
}


export async function getStaticPaths() {
    const allProjects = getAllProjectSlugs();
    console.log(allProjects.map(x => ({params: {slug:  x}})))
    return {
        paths: allProjects.map(x => ({params: {slug:  x}})),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const projectSlug = params.slug;
    console.log(projectSlug);
    const project = getProjectWithSlug(projectSlug);

    return {
        props: { project }
    };
}


export default Project;
