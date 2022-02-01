import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import Hero from "../components/Sections/Hero";
import CustomerBar from "../components/Sections/CustomerBar";
import {PhoneAnimation} from "../components/MagicMaxi/PhoneAnimation";
import ProjectOverviewLimited from "../components/Sections/ProjectOverviewLimited";
import AboutUsOverview from "../components/Sections/AboutUsOverview";
import {Footer} from "../components/Sections/Footer";
import {fetchEmployees, fetchIndexPageProjects} from "../helper/cms-helper";

function Home({projects, employees, heroContent}) {
  return (
    <div className={"container"}>
      <Head>
        <title>lab73</title>
        <link rel="icon" href="/favicon.ico" />
          {/*<meta name="theme-color" content="#1a5d8d"*/}
          {/*      media="(prefers-color-scheme: light)"/>*/}
          {/*    <meta name="theme-color" content="#06568F"*/}
          {/*          media="(prefers-color-scheme: dark)"/>*/}
        <meta name="description" content="Dein Partner für Mobile Apps & Webanwendungen. Durch modernste Technologien & agilem Projektmanagement setzen wir deine Ideen ganz nach deinen Wünschen um."/>
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


    // const heroContent = await fetchHeroContent();
    const heroContent = {attributes: {description: "Wir von lab73 sind ein Team aus Software-Entwicklern & Designern, dass sich auf die Entwicklung von innovativen und kreativen Kundenprojekten wie Apps und Webapps spezialisiert hat."}};
    return {
        props: {projects, employees, heroContent}, // will be passed to the page component as props
    }
}

export default Home;
