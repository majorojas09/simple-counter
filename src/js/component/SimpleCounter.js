import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const SimpleCounter = props => {
	return (
		<div className="principal">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="second-six">{props.nSix % 10}</div>
			<div className="second-five">{props.nFive % 10}</div>
			<div className="second-four">{props.nFour % 10}</div>
			<div className="second-three">{props.nThree % 10}</div>
			<div className="second-two">{props.nTwo % 10}</div>
			<div className="second-one">{props.nOne % 10}</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	nOne: PropTypes.number,
	nTwo: PropTypes.number,
	nThree: PropTypes.number,
	nFour: PropTypes.number,
	nFive: PropTypes.number,
	nSix: PropTypes.number
};

let cuenta = 0;
setInterval(function() {
	let six = Math.floor(cuenta / 100000);
	let five = Math.floor(cuenta / 10000);
	let four = Math.floor(cuenta / 1000);
	let three = Math.floor(cuenta / 100);
	let two = Math.floor(cuenta / 10);
	let one = Math.floor(cuenta / 1);
	console.log(six, five, four, three, two, one);

	cuenta++;
	ReactDOM.render(
		<SimpleCounter
			nOne={one}
			nTwo={two}
			nThree={three}
			nFour={four}
			nFive={five}
			nSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
