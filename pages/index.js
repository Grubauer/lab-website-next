import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import Hero from "../components/Sections/Hero";
import CustomerBar from "../components/Sections/CustomerBar";
import {PhoneAnimation} from "../components/MagicMaxi/PhoneAnimation";
import ProjectOverviewLimited from "../components/Sections/ProjectOverviewLimited";
import {fetchEmployees, fetchHeroContent, fetchIndexPageProjects} from "../helper/cms-helper";
import AboutUsOverview from "../components/Sections/AboutUsOverview";
import {Footer} from "../components/Sections/Footer";

function Home({projects, employees, heroContent}) {
  return (
    <div className={"container"}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Hero heroContent={heroContent} heroProject={projects.find(project => project.attributes.hero)}/>
          <CustomerBar/>
          <ProjectOverviewLimited projects={projects}/>
          <AboutUsOverview employees={employees}/>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
    const projects = await fetchIndexPageProjects();
    const employees = await fetchEmployees();
    const heroContent = await fetchHeroContent();
    return {
        props: {projects, employees, heroContent}, // will be passed to the page component as props
    }
}

export default Home;
