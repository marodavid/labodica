import React from 'react'
import styled from 'styled-components'

function AnchorSpan(){

	const AnchorSpan = styled.span`
		display: block;
		position: relative;
		height: 10px;
		width: 100%;
		visibility: hidden;
		color: black;
	`;

	return <AnchorSpan/>
}

export default AnchorSpan
