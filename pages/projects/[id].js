import Head from 'next/head'
import Image from 'next/image'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import ProjectOverviewFull from "../../components/Sections/ProjectOverviewFull";
import {fetchAllProjects, fetchProjectWithId} from "../../helper/cms-helper";
import {useRouter} from "next/router";
import styled from "@emotion/styled";
import {regularMobileMediaQuery} from "../../media";

const H1 = styled.h1`
                    text-align: center;
                    `

const Container = styled.div`
    height: calc(100vh - 500px);
    display: flex;
    margin: 10rem 0; 
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

    return (
        <div className={"container"}>
            <Head>
                <title>Projekt</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Container>
                    <ImageWrapper>
                        {project.attributes.hero_image && <Image alt={"imgAlt"} src={`http://178.128.196.79:1337${project.attributes.hero_image.data.attributes.url}`} layout={"fill"} objectFit={"contain"}/>}
                    </ImageWrapper>
                    <TextContainer>
                        <Title>
                            {project.attributes.title}
                        </Title>
                        <Description>
                            {project.attributes.description}
                        </Description>
                    </TextContainer>




                </Container>
            </main>
        </div>
    )
}


export async function getStaticPaths() {
    const allProjects = await fetchAllProjects();
    console.log(allProjects.map(x => x.id))
    return {
        paths: allProjects.map(x => "/projects/" + x.id + ""),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const projectId = params.id;
    const project = await fetchProjectWithId(projectId);
    return {
        props: { project }
    };
}


export default Project;
