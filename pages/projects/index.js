import Head from 'next/head'
import Image from 'next/image'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import ProjectOverviewFull from "../../components/Sections/ProjectOverviewFull";
import {getAllProjects} from "../../helper/cms-helper";
import styled from "@emotion/styled";
import {regularMobileMediaQuery} from "../../media";

const Main = styled.main`
    margin-top: 15rem;
    ${regularMobileMediaQuery} {
        margin-top: 0;
    }
`

const H1 = styled.h1`
    text-align: center;
`

function Projects({projects}) {
    return (
        <div className={"container"}>
            <Head>
                <title>Projekte</title>
                <meta name="description" content="Entdecke unsere Projekte." />
            </Head>

            <Main>
                <H1>Unsere <span className="primaryColorSpan">Projekte</span></H1>
                <ProjectOverviewFull projects={projects}/>
            </Main>
        </div>
    )
}

export async function getStaticProps(context) {
    const projects = getAllProjects();
    return {
        props: {projects}, // will be passed to the page component as props
    }
}

export default Projects;
