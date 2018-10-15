import React from "react";
import ReactDOM from "react-dom";
import 'index.scss';

const HolaMundo = () => {
	return <h1>Hola mundo</h1>
}


ReactDOM.render(
	<HolaMundo />,
	document.getElementById('root')
);