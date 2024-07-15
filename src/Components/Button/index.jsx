/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const BtnStyled = styled(Link)`
  	width: 180px;
  	height: 54px;
  	background-color: rgba(0, 0, 0, 0);
  	color: #ffffff;
  	border: 1px solid #ffffff;
  	border-radius: 10px;
  	font-size: 20px;
	font-family: 'SourceSans3Black';
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
  	&:hover {
    	background-color: rgba(0, 0, 0, 0.9);
    	color: #2271d1;
		border: 1px solid rgba(34, 113, 209, 1);
		box-shadow: inset 0px 0px  15px #2271d1;
  	}
`;

export default function Button(props) {
    return (
        <BtnStyled
			to={props.to}
		>{props.title}</BtnStyled>
    );
}
