import styled from "styled-components";
import Button from "../Button";
import LogoAlura from "../LogoAlura/LogoAlura";

const HeaderStyled = styled.header`
  	width: 100%;
  	height: 125px;
  	background-color: #262626;
  	border-bottom: 2px solid #2271d1;
  	box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
`;

const ContainerContent = styled.div`
	width: 1440px;
	max-width: 100vw;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 51px;
	box-sizing: border-box;
`;

const ContainerBtn = styled.div`
  	display: flex;
  	align-items: center;
  	gap: 25px;
`;

export default function NavBar() {
  return (
    <HeaderStyled>
      <ContainerContent>
        <LogoAlura />
        <ContainerBtn>
			<Button
				to="/"
				title="Home"
			/>
			<Button
				to="/newvideo"
				title="Novo Video"
			/>
        </ContainerBtn>
      </ContainerContent>
    </HeaderStyled>
  );
}
