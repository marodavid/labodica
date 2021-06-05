import React, { useEffect, useState } from 'react'
import './CountDown.css'

function CountDown() {

	const calculateTimeLeft = () => {
		const difference = +new Date("Oct 2, 2021 12:00:00") - +new Date()

		let timeLeft
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
			<li key={interval}><span id={interval}>{timeLeft[interval]}</span>{" "}{interval}</li>
		);
	});

	return (
		// <DivTimer>
		<div id="countdown" className="container">
			<ul key={timerComponents.length}>
				{timerComponents.length ? timerComponents : <span>Ya nos casamos!!</span>}
			</ul>
		</div>
	)
}

export default CountDown
