import React from 'react'
import styled from "styled-components";
import {IoIosArrowDropdownCircle} from 'react-icons/io'


const SeparatorIcon = styled(IoIosArrowDropdownCircle)`
	display: block;
  margin-left: auto;
  margin-right: auto;
  color: white;
  // width: 100%;
  // margin-top: -1.25em;
  // width: 50px;
  // height: 50px;
  font-size: 48px;
  
`;

// const AnchorSpan = styled.div`
// 	display: block;
// 	position: relative;
// 	height: 2em;
// 	width: 100%;
// 	background-color: white;
// 	visibility: hidden;
// 	// border: 3px black;
// 	// color: black;
// `;
// const SeparatorSpan = styled.div`
// 	position: relative;
// 	height: 1px;
// 	margin-left: auto;
// 	margin-right: auto;
// 	// top: calc(-1 * (var(--header-height)));
// `;

export default class Separator extends React.Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		return(
			<>
				{/*<AnchorSpan>*/}
				{/*	<SeparatorIcon htmlColor='white' color='white'/>*/}
				{/*<IoIosArrowDropdownCircle/></SeparatorIcon>*/}
					<SeparatorIcon/>
				{/*</AnchorSpan>*/}
			</>
		)
	}


}

