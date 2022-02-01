import Head from 'next/head'
import Image from 'next/image'
import {fetchAllProcedureSections} from "../helper/cms-helper";
import TopicWithImage from "../components/Objects/TopicWithImage";
import styled from "@emotion/styled";
import {regularMobileMediaQuery} from "../media";

const Main = styled.main`
    margin: 10rem 0;
    
    ${regularMobileMediaQuery} {
    margin: 2rem 0;
  }
`

function Procedure({sections}) {
    function getTitle(rawTitle) {
        const rawParts = rawTitle.split("##");
        const finalParts = rawParts.map(part => {
            if (part.startsWith("!")) {
                return <span className="primaryColorSpan">{part.substring(1)}</span>
            } else {
                return <span>{part}</span>
            }
        });

        return <span>{finalParts}</span>
    }
    return (
        <div className={"container"}>
            <Head>
                <title>Der Ablauf deines Projektes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                {sections.map((section, i) => {
                    console.log(section.attributes.image.data.attributes.url);
                    return <TopicWithImage
                        key={section.id}
                        title={getTitle(section.attributes.title)}
                        imgSrc={section.attributes.image.data.attributes.url}
                        description={section.attributes.description}
                        swapped={i % 2 !== 0}
                    />
                })}
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

export default Procedure;
