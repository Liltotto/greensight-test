'use client'

import { useState } from "react";
import Dropdown from "../UI/Dropdown/Dropdown";


export default function VacanciesFilter() {

	const [selectedOptionForm, setSelectedOptionForm] = useState('Not selected');

	const handleSelectChange = (event) => {
		setSelectedOptionForm(event.target.value);
	};

	return (
		<div className="vacancies__filter">
			<div className="vacancies__filter-items">
				<div className="vacancies__filter-item">
					<label className="select-filter__label" for="form_select"> Form </label>
					<select
						className="select-filter"
						id="form_select"
						value={selectedOptionForm}
						onChange={handleSelectChange} >
						<option
							className="select-filter__item select-filter__item_unselected"
							value=""
							style={{ display: selectedOptionForm ? 'none' : 'block' }}> Not selected </option>
						<option className="select-filter__item" value="1"> Full time </option>
						<option className="select-filter__item" value="2"> Half time </option>
						<option className="select-filter__item" value="3"> Part time </option>
					</select>
				</div>

				<Dropdown selected={selectedOptionForm} setSelected={setSelectedOptionForm} />
				{/* <div className="vacancies__filter-item">
					<label className="select-filter__label" for="position_select"> Position </label>
					<select className="select-filter" id="position_select" >
						<option className="select-filter__item select-filter__item_unselected" value=""> Not selected</option>
					</select>
				</div> */}
			</div>

			<button className="vacancies__filter-button">Search</button>
		</div>
	)
}
