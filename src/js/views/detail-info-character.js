import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function DetailInfoCharacters(props) {
	const { store, action } = useContext(Context);
	console.log("******", props.selected.params.thied);
	return (
		<div>
			<div className="row justify-content-md-center">
				<div className="col-md-6 col-lg-5 mb-4">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3rDeGqhfMHdVCkogR1csg3lVCVXv5PQ09Q&usqp=CAU"
						style={{ width: "100%", height: "400px" }}
					/>
				</div>
				<div className="col-md-6 col-lg-5 text-center row mb-4">
					<div className="align-self-center">
						<h5>{store.characters[props.selected.params.theid].name}</h5>
						<p>
							Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
							graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
							century who is thought to have scrambled parts of Cicero&apos;s De Finibus Bonorum et
							Malorum for use in a type specimen book
						</p>
					</div>
				</div>
			</div>
			<div className="dropdown-divider border border-danger" />
			<div className="row text-danger justify-content-md-center text-center mt-4">
				<div className="col-1 mx-2">
					<p>Name</p>
					<p>{store.characters[props.selected.params.theid].name}</p>
				</div>
				<div className="col-1 mx-2">
					<p>Birth Year</p>
					<p>{store.characters[props.selected.params.theid].birth_year}r</p>
				</div>
				<div className="col-1 mx-2">
					<p>Gender</p>
					<p>{store.characters[props.selected.params.theid].gender}</p>
				</div>
				<div className="col-1 mx-2">
					<p>Height</p>
					<p>{store.characters[props.selected.params.theid].height}</p>
				</div>
				<div className="col-1 mx-2">
					<p>Skin Color</p>
					<p>{store.characters[props.selected.params.theid].skin_color}</p>
				</div>
				<div className="col-1 mx-2">
					<p>Eye Color</p>
					<p>{store.characters[props.selected.params.theid].eye_color}</p>
				</div>
			</div>
			<Link to="/">
				<Button variant="dark"> Back Home</Button>
			</Link>
		</div>
	);
}
DetailInfoCharacters.propTypes = {
	selected: PropTypes.object
};
