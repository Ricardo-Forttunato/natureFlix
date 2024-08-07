/* eslint-disable react/prop-types */
import { useState } from 'react';
import {styled} from 'styled-components';

const Div = styled.div`
	width: 432px;
	display: flex;
	flex-direction: column;
`

const CardContainer = styled.div`
	width: 432px;
	height: 261px;
	border-top: 4px solid var(--color-natureza-selvagem);
	border-left: 4px solid var(--color-natureza-selvagem);
	border-right: 4px solid var(--color-natureza-selvagem);
	border-radius: 4px 4px 0px 0px;
	box-shadow: 0px 0px 17px 8px #6BD1FF inset;
	cursor: pointer;
	&& img {
		width: 432px;
		height: 261px;
		border-radius: 4px 4px 0px 0px;
	}
`;

const CardFooter = styled.div`
	width: 432px;
	height: 59px;
	border-bottom: 4px solid var(--color-natureza-selvagem);
	border-left: 4px solid var(--color-natureza-selvagem);
	border-right: 4px solid var(--color-natureza-selvagem);
	border-radius: 0px 0px 15px 15px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: var(--color-black-dark);
`;

const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	&& img {
		width: 25px;
		height: 28px;
		cursor: pointer;
	}
	&& p {
		font-size: 18px;
		font-weight: 800;
		color: var(--color-white);
		text-transform: uppercase;
	}
`;

export default function Card({ id, title, image, categories, cardDelete, openModal }) {

    return (
        <Div>
			<CardContainer
				style={{
					borderTop:` 4px solid var(--color-${categories})`,
					borderLeft:` 4px solid var(--color-${categories})`,
					borderRight:` 4px solid var(--color-${categories})`,
					boxShadow: `0px 0px 17px 8px var(--color-${categories}) inset`
			}}>
				<img src={image} alt={title} />   
			</CardContainer>
			<CardFooter
				style={{
					borderBottom:` 4px solid var(--color-${categories})`,
					borderLeft:` 4px solid var(--color-${categories})`,
					borderRight:` 4px solid var(--color-${categories})`,
			}}>
				<FooterContainer>
					<img 
						src="/icones/delete.png" 
						alt="icone de lixeira"
						onClick={cardDelete}
					/>
					<p>Deletar</p>
				</FooterContainer>
				<FooterContainer>
					<img 
						src="/icones/edit.png" 
						alt="icone de lapis"
						onClick={openModal}
					/>
					<p>Editar</p>
				</FooterContainer>
			</CardFooter>
        </Div>
	);
}