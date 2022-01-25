import {AnimatedPhoneProject} from "../Objects/AnimatedPhoneProject";
import styled from "@emotion/styled";
import {regularMobileMediaQuery, tabletMediaQuery} from "../../media";
import {useEffect} from "react";
import Image from "next/image";
import StyledButton from "../Button";

const Container = styled.div`
    margin: 10rem 0;
`

const ImagesContainer = styled.div`
 margin: 5rem 0;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
 gap: 5rem;
 
   ${regularMobileMediaQuery} {
    grid-template-columns: 1fr;
  }
`

const EmployeeImageWrapper = styled.div`
    height: 15rem;
    width: 15rem;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 61px rgba(0, 0, 0, 0.17), inset 0px 2px 19px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
  flex-shrink: 0; 
  
 ${regularMobileMediaQuery} {
        width: calc(100vw - 2rem);
        height: calc(100vw - 2rem);
        
    }
    
`

const EmployeeWrapper = styled.div`
    display: flex;
    max-width: 50rem;
    width: 100%;
    gap: 2rem;
    margin: 2rem auto;
    transition: all 0.2s ease-in-out;
    border-radius: 38px;
    
        background: ${props => props.theme.colors.backgroundHovered};
        box-shadow: 0px 2px 61px rgba(0, 0, 0, 0.17), inset 0px 2px 19px rgba(0, 0, 0, 0.25);
    
    
    &.flipped{
        flex-direction: row-reverse;
    }
    
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
`

const EmployeeName = styled.h3`
    font-size: 1.5rem;
`

const EmpNotFound = styled.p`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    
`

export default function AboutUsOverview({employees})
{
    console.log(employees)

    return <Container>
       <h2>
           Ein eingespieltes <span className="primaryColorSpan">Team</span>
       </h2>
        <ImagesContainer>
            {employees.map((employee, i) => {
                return <EmployeeWrapper>
                    <EmployeeImageWrapper key={employee.id}>
                        <Image layout={"fill"} objectFit={"cover"} objectPosition={"top"}  src={`http://localhost:1337${employee.attributes.portrait.data.attributes.url}`}/>
                    </EmployeeImageWrapper>
                    <div>
                        <EmployeeName>{employee.attributes.name}</EmployeeName>
                        <p>{employee.attributes.description}</p>
                    </div>
                </EmployeeWrapper>
            })}
            <EmployeeWrapper>
                <EmployeeImageWrapper>
                    <EmpNotFound>404</EmpNotFound>
                </EmployeeImageWrapper>
                <div>
                    <EmployeeName>Wir suchen dich!</EmployeeName>
                    <p>Du bist ein engagierter Frontend-, Backend- oder Fullstack Developer? Dann melde dich bei uns und werde Teil von lab73!</p>
                </div>
        </EmployeeWrapper>
        </ImagesContainer>
    </Container>
}