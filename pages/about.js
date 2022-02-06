import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TopicWithImage from "../components/Objects/TopicWithImage";
import styled from "@emotion/styled";
import {regularMobileMediaQuery} from "../media";

const Main = styled.main`
    margin: 10rem 0;
    
    ${regularMobileMediaQuery} {
    margin: 2rem 0;
  }
`

function About({sections}) {

    return (
        <div className={"container"}>
            <Head>
                <title>Über uns</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <TopicWithImage imgSrc={"/assets/storytime.png"} title={"Eine Geschichtsstunde."} description={"lab73 existierte zuerst unter dem Namen \"LonosGames\", denn ursprünglich wollten wir Spiele entwickeln. Diese Passion kam bereits in der ersten Klasse der HTL auf, als wir im Programmierunterricht anfingen mit \"GreenFoot\" zu programmieren. Mit dieser Entwicklungsumgebung wollten wir das Brettspiel \"Talisman\" digitalisieren. Ein Versuch, der zwar kläglich scheiterte aber der im Endeffekt den Grundstein für unsere weitere Zusammenarbeit legte."}/>
                <TopicWithImage imgSrc={"/assets/superman.png"} swapped title={"Warum eigentlich lab73?"} description={<span>Da unser Fokus vom Spiele-Entwickeln schnell auf Apps und Websites fiel, brauchten wir einen besseren Namen. Anfangs trafen wir uns in einer kleinen Gartenhütte, in der wir verschiedenste Ideen entwickelten. Diese Gartenhütte wurde von uns liebevoll &quot;lab&quot; wie &quot;laboratories&quot; genannt. Aber warum die 73 dahinter?
                    <br/>
                    <br/>
                    Weil die 73 die beste Zahl ist!
                    <br/>
                    <br/>
                    <Link href="https://bigbangtheory.fandom.com/wiki/73"><a><span className="primaryColorSpan">Hier erfährst du warum.</span></a></Link>
                </span>}/>
            </Main>
        </div>
    )
}

export async function getStaticProps(context) {
    // const sections = await fetchAllProcedureSections();

    return {
        props: {sections: []}, // will be passed to the page component as props
    }
}

export default About;
