import {AnimatedPhoneProject} from "../Objects/AnimatedPhoneProject";
import styled from "@emotion/styled";
import {regularMobileMediaQuery, tabletMediaQuery} from "../../media";
import {useEffect, useState} from "react";
import Image from "next/image";
import StyledButton from "../Button";
import TopicWithImage from "../Objects/TopicWithImage";
import {MagicMaxiController} from "../MagicMaxi/magicmaxicontroller";
import Link from "next/link";

const Container = styled.div`
    margin: 10rem 0;
`

const ImagesContainer = styled.div`
 margin: 2rem 0;
 display: grid;
 grid-template-columns: repeat(auto-fit, 210px);
 gap: 3rem;
 
   ${regularMobileMediaQuery} {
    gap: 1rem;
    justify-content: center;
  }
`

const EmployeeImageWrapper = styled.div`
    height: 210px;
    width: 210px;
     
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 61px rgba(0, 0, 0, 0.17), inset 0px 2px 19px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
  flex-shrink: 0; 
  
 
    
`

const EmployeeWrapper = styled.div`
   
    max-width: 50rem;
    width: 100%;
    gap: 2rem;
    margin: 2rem auto;
    transition: all 0.2s ease-in-out;
    
    border-radius: 38px;
    
        background: ${props => props.theme.colors.backgroundHovered};
        box-shadow: 0px 2px 61px rgba(0, 0, 0, 0.17), inset 0px 2px 19px rgba(0, 0, 0, 0.25);
    
    
  

    
     ${regularMobileMediaQuery} {
        flex-direction: column;
        align-items: center;
    
        div{
            padding: 1rem;
        }
    }
    
    :hover{
        transform: scale(1.05);
        
        
         
    }
    
`

const NameWrapper = styled.h3`
    font-size: 1.1rem;
    width: 100%;
    margin: 0;
    padding: 1rem .5rem;
    text-align: center;
    
    
`

const EmpNotFound = styled.p`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    
`
const Title = styled.h2`
    font-size: 2rem;
`

export default function AboutUsOverview({employees})
{
    const [shuffledEmployees, setShuffledEmployees] = useState([]);


    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    useEffect(() => {
        // console.log("shuffle")
        if(shuffledEmployees.length === 0)
        {
            console.log(shuffle(employees))
            setShuffledEmployees(shuffle(employees));
        }
    }, [shuffledEmployees]);

    useEffect(() => {
        employees.forEach(employee => {
            MagicMaxiController.addNormalImage(employee.name)
        });
    }, []);

    return <Container>
       <Title>
           Ein eingespieltes <span className="primaryColorSpan">Team.</span>
       </Title>
        <ImagesContainer>
            {shuffledEmployees.map((employee, i) => {
                return <EmployeeWrapper key={employee.id}>
                    <EmployeeImageWrapper >
                        <Image onLoad={() => MagicMaxiController.setLoadedStatusForNormalImage(employee.name)} alt={employee.name} priority={true} width={550} height={550} objectPosition={"top"} src={`${employee.img}`}/>
                    </EmployeeImageWrapper>
                    <NameWrapper>
                        {employee.name}
                    </NameWrapper>
                </EmployeeWrapper>
            })}
        {/*    <EmployeeWrapper>*/}
        {/*        <EmployeeImageWrapper>*/}
        {/*            <EmpNotFound>404</EmpNotFound>*/}
        {/*        </EmployeeImageWrapper>*/}
        {/*        <div>*/}
        {/*            <EmployeeName>Wir suchen dich!</EmployeeName>*/}
        {/*            <p>Du bist ein engagierter Frontend-, Backend- oder Fullstack Developer? Dann melde dich bei uns und werde Teil von lab73!</p>*/}
        {/*        </div>*/}
        {/*</EmployeeWrapper>*/}
        </ImagesContainer>
        <TopicWithImage imgSrc={"/assets/storytime.png"} title={"Eine Geschichtsstunde."} description={"lab73 existierte zuerst unter dem Namen \"LonosGames\", denn ursprünglich wollten wir Spiele entwickeln. Diese Passion kam bereits in der ersten Klasse der HTL auf, als wir im Programmierunterricht anfingen mit \"GreenFoot\" zu programmieren. Mit dieser Entwicklungsumgebung wollten wir das Brettspiel \"Talisman\" digitalisieren. Ein Versuch, der zwar kläglich scheiterte aber der im Endeffekt den Grundstein für unsere weitere Zusammenarbeit legte."}/>
        <TopicWithImage imgSrc={"/assets/superman.png"} swapped title={"Warum eigentlich lab73?"} description={<span>Da unser Fokus vom Spiele-Entwickeln schnell auf Apps und Websites fiel, brauchten wir einen besseren Namen. Anfangs trafen wir uns in einer kleinen Gartenhütte, in der wir verschiedenste Ideen entwickelten. Diese Gartenhütte wurde von uns liebevoll &quot;lab&quot; wie &quot;laboratories&quot; genannt. Aber warum die 73 dahinter?
                    <br/>
                    <br/>
                    Weil die 73 die beste Zahl ist!
                    <br/>
                    <br/>
                    <Link href="https://bigbangtheory.fandom.com/wiki/73"><a><span className="primaryColorSpan">Hier erfährst du warum.</span></a></Link>
                </span>}/>
        <TopicWithImage
            title={<span>Werde auch <span className="primaryColorSpan">du</span><br/> ein Teil von <span className="primaryColorSpan">lab73.</span></span>}
            description="Wir sind laufend auf der Suche nach engagierten Entwicklern. Du willst teil eines aufstrebenden Startups werden? Dann sende uns noch heute deine Bewerbung!"
            imgSrc={"/assets/jobs_illustration.png"}
        />
    </Container>
}