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
`
const EmployeeImageWrapper = styled.div`
    height: 15rem;
    width: 15rem;
    position: relative;
    overflow: hidden;
    
    
`

const EmployeeWrapper = styled.div`
    display: flex;
    max-width: 50rem;
    width: 100%;
    gap: 2rem;
    margin: 2rem auto;
    &.flipped{
        flex-direction: row-reverse;
    }
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
                return <EmployeeWrapper className={i % 2 === 0 ? "" : "flipped"}>
                    <EmployeeImageWrapper key={employee.id}>
                        <Image layout={"fill"} objectFit={"cover"} objectPosition={"top"}  src={`http://localhost:1337${employee.attributes.portrait.data.attributes.url}`}/>
                    </EmployeeImageWrapper>
                    <h3>{employee.attributes.name}</h3>
                </EmployeeWrapper>
            })}
        </ImagesContainer>
    </Container>
}