import {AnimatedPhoneProject} from "../Objects/AnimatedPhoneProject";
import styled from "@emotion/styled";
import {regularMobileMediaQuery, tabletMediaQuery} from "../../media";
import {useEffect} from "react";
import Image from "next/image";
import StyledButton from "../Button";
import TopicWithImage from "../Objects/TopicWithImage";

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
    
    
  
    
    div{
        padding-right: 1rem;
        padding-bottom: 1rem;
    }
    
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

export default function AboutUsOverview({employees})
{

    return <Container>
       <h2>
           Ein eingespieltes <span className="primaryColorSpan">Team.</span>
       </h2>
        <ImagesContainer>
            {employees.map((employee, i) => {
                return <EmployeeWrapper key={employee.id}>
                    <EmployeeImageWrapper >
                        <Image layout={"fill"} objectFit={"cover"} objectPosition={"top"}  src={`http://178.128.196.79:1337${employee.attributes.portrait.data.attributes.url}`}/>
                    </EmployeeImageWrapper>
                    <NameWrapper>
                        {employee.attributes.name}
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

        <TopicWithImage
            title={<span>Werde auch <span className="primaryColorSpan">du</span><br/> ein Teil von <span className="primaryColorSpan">lab73.</span></span>}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non id tempus, convallis nisl pretium elementum vitae et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            imgSrc={"/assets/jobs_illustration.png"}
        />
    </Container>
}