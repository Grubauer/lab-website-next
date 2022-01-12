import styled from "@emotion/styled";
import Image from 'next/image'
import {narrowMediaQuery, regularMobileMediaQuery, tabletMediaQuery} from "../../media";

const Bar = styled.section`
    width: 100%;
`

const List = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    justify-content: center;
    align-items: center; 
    gap: 5rem;
    padding: 0;
    max-width: 1000px;
    margin: auto;
    
    ${regularMobileMediaQuery}{
       grid-template-columns: repeat(2, 1fr);
       height: 50vh;
       margin: 20vh 0;
    } 
`

const CustomerWrapper = styled.li`
    flex: 1;
    height: 5rem;
    position: relative;
`

const imageDirectory = "/assets/customer_logos/";
const imgNames = ["docsced_logo", "guntamatic", "sqooter", "surface_logo"]

export default function CustomerBar()
{
   return <Bar>
       <List>



        {imgNames.map(name =>
            <CustomerWrapper key={name}>
                <Image src={imageDirectory + name + ".png"} layout={"fill"} objectFit={"contain"}/>
            </CustomerWrapper>)}
       </List>
    </Bar>
}