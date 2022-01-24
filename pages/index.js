import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import Hero from "../components/Sections/Hero";
import CustomerBar from "../components/Sections/CustomerBar";
import {PhoneAnimation} from "../components/MagicMaxi/PhoneAnimation";
import ProjectOverview from "../components/Sections/ProjectOverview";
import {fetchEmployees, fetchIndexPageProjects} from "../helper/cms-helper";
import AboutUsOverview from "../components/Sections/AboutUsOverview";

function Home({projects, employees}) {
  return (
    <div className={"container"}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Hero heroProject={projects.find(project => project.attributes.hero)}/>
          <CustomerBar/>
          <ProjectOverview projects={projects}/>
          <AboutUsOverview employees={employees}/>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
    const projects = await fetchIndexPageProjects();
    const employees = await fetchEmployees();
    return {
        props: {projects, employees}, // will be passed to the page component as props
    }
}

export default Home;
