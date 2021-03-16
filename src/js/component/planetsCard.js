import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function PlanetsCard() {
	const { store, actions } = useContext(Context);
	return (
		<React.Fragment>
			{store.planets.map((planet, index) => {
				return (
					<div className="card custom-card test my-4" key={index}>
						<img
							className="card-img-top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3rDeGqhfMHdVCkogR1csg3lVCVXv5PQ09Q&usqp=CAU"
							style={{ width: "400", height: "200" }}
						/>
						<div className="card-body">
							<h5 className="card-title text-left">{planet.name}</h5>
							<div className="card-text text-left">
								<p>Population: {planet.population}</p>
								<p>Terrain: {planet.terrain}</p>
							</div>
							<div className="d-flex justify-content-between">
								<Link to={`/planet/${index}`}>
									<button className="btn btn-outline-primary">More Details!</button>
								</Link>
								<div className="favoritesContainer">
									<i
										className="fas fa-heart"
										onClick={() => {
											actions.addToFavorites(planet.name);
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</React.Fragment>
	);
}
