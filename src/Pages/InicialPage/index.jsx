import Banner from "../../Components/Banner";
import styled from "styled-components";
import CardContainer from "../../Components/CardContainer";

const ContainerContent = styled.div`
  	width: 1440px;
  	max-width: 100vw;
  	min-height: 100vh;
  	margin: 0 auto;
`;

const Section = styled.section`
    width: 1356px;
    max-width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export default function InicialPage() {
    
    return (
        <ContainerContent>
            <Banner/>
            <Section>
                <CardContainer />
            </Section>
        </ContainerContent>
    )
}