import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {Controller, Scene} from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';
import Hero from "../components/Sections/Hero";
import CustomerBar from "../components/Sections/CustomerBar";
import {PhoneAnimation} from "../components/MagicMaxi/PhoneAnimation";

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Hero />
          <CustomerBar/>
      </main>
    </div>
  )
}
