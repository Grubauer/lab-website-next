import Head from 'next/head'
import Image from 'next/image'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import ProjectOverviewFull from "../../components/Sections/ProjectOverviewFull";
import {fetchAllProjects} from "../../helper/cms-helper";


function Projects({projects}) {
    return (
        <div className={"container"}>
            <Head>
                <title>Projekte</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <ProjectOverviewFull projects={projects}/>
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const projects = await fetchAllProjects();
    return {
        props: {projects}, // will be passed to the page component as props
    }
}

export default Projects;
