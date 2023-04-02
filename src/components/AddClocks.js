import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import ClocksModel from "../models/ClocksModel";

const AddClocks = ({ handleAdd }) => {
	const [form, setForm] = useState({ city: "", offset: "" });

	const handleSubmit = event => {
		event.preventDefault();
		const clocks = new ClocksModel(form.city, form.offset, shortid.generate());
		handleAdd(clocks);
		setForm({ city: "", offset: "" });
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setForm(prevForm => ({ ...prevForm, [name]: value }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div>
					<p className="label" htmlFor="city">Название</p>
					<div>
						<input
							type="text"
							id="city"
							name="city"
							value={form.city}
							onChange={handleChange}
							placeholder="Сеул"
							required
						/>
					</div>
				</div>
				<div>
					<p className="label" htmlFor="distance">Временная зона</p>
					<input
						type="number"
						step={1}
						min={-12}
						max={+12}
						name="offset"
						id="offset"
						value={form.offset}
						onChange={handleChange}
						placeholder="3"
						required
					/>
				</div>
			</div>
			<button className="button" type="submit">Добавить</button>
		</form>
	);
};

AddClocks.propTypes = {
	handleAdd: PropTypes.func.isRequired
};

export default AddClocks;