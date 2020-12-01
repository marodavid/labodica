import React from 'react'
import styled from "styled-components";
import {IoIosArrowDropdownCircle} from 'react-icons/io'
// import { ScrollTo } from "react-scroll-to";

import { HashLink} from "react-router-hash-link";


const SeparatorIcon = styled(IoIosArrowDropdownCircle)`
	display: block;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 48px; 
`;

export default class Separator extends React.Component {

	// myRef = React.createRef();
	render() {
		return(
			<HashLink smooth to="/#nuestraHistoria" >
				<SeparatorIcon/>
			</HashLink>

		)
	}


}

