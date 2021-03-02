import React from 'react';
import { useParams } from 'react-router-dom';

const Operations = ({ operation}) => {
	let { num1, num2 } = useParams();

	if (operation && num1 && num2) {
		num1 = +num1;
		num2 = +num2;

		if (operation === "add") {
			return (<p>{num1 + num2}</p>)
		}

		if (operation === "subtract") {
			return <p>{num1 - num2}</p>
		}

		if (operation === "multiply") {
			return <p>{num1 * num2}</p>
		}

		if (operation === "divide") {
			return <p>{num1 / num2}</p>
		}
	}

	return null;
}

export default Operations;