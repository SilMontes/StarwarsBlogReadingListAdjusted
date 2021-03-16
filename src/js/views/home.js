import React from "react";
import "../../styles/home.scss";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";

export const Home = () => (
	<div className="container text-center mt-5">
		<div className="row">
			<h2>Characters</h2>
		</div>
		<div className="d-flex flex-nowrap overflow-auto">
			<CharactersCard />
		</div>
		<div className="row mt-5">
			<h2>Planets</h2>
		</div>
		<div className="d-flex flex-nowrap overflow-auto">
			<PlanetsCard />
		</div>
	</div>
);
