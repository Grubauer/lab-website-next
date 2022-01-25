import Head from 'next/head'
import Image from 'next/image'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import ProjectOverviewFull from "../../components/Sections/ProjectOverviewFull";
import {fetchAllProjects, fetchProjectWithId} from "../../helper/cms-helper";
import {useRouter} from "next/router";
import styled from "@emotion/styled";


function Project({project}) {

    const router = useRouter()

    const Container = styled.div`
            min-height: 100vh;
           margin: 10rem 0; 
           
        
        `

    return (
        <div className={"container"}>
            <Head>
                <title>Projekt</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Container>
                    <h1>
                        {project.attributes.title}
                    </h1>


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
