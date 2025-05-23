import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";
//create your first component

const Home = () => {
	const[color, setColor] = useState("red");
	return (
		<div className="card" >
			<div className="card-body" id="light">
				<div onClick={() => setColor('green')} className= {"green" +(color === "green" ? " glow": "")}></div>
				<div onClick={() => setColor('yellow')}  className= {"yellow" +(color === "yellow" ? " glow": "")}></div>
				<div onClick={() => setColor('red')}  className= {"red" +(color === "red" ? " glow": "")}></div>
			</div>
		</div>
	);
};

export default Home;