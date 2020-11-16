import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import './CountDown.css'

function CountDown() {

	const calculateTimeLeft = () => {
		const difference = +new Date("Oct 2, 2021 17:00:00") - +new Date()

		let timeLeft
		console.log(difference)
		if (difference > 0) {
			timeLeft = {
				dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
				horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutos: Math.floor((difference / 1000 / 60) % 60),
				segundos: Math.floor((difference / 1000) % 60)
			};
		} else timeLeft = { days: 0, hours: 0, minutes:0, seconds: 0};
		return timeLeft;
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearTimeout(timer)
	})

	const timerComponents = [];


	Object.keys(timeLeft).forEach((interval) => {
		timerComponents.push(
			<li><span id={interval}>{timeLeft[interval]}</span>{" "}{interval}</li>
		);
	});

	const DivTimer = styled.div`
		flex-grow: 1;	
	`;

	return (
		<DivTimer>
		<div className="container">
			<div id="countdown">
				<ul>
					{timerComponents.length ? timerComponents : <span>Time's up!</span>}
			</ul>
			</div>
		</div>
		</DivTimer>
	)
}

export default CountDown
