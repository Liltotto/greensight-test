'use client'

import { useEffect, useState } from "react";
import Dropdown from "../UI/Dropdown/Dropdown";


export default function VacanciesFilter({ setSelectedOptionFormGlobal, setSelectedOptionPositionGlobal }) {

	const [selectedOptionForm, setSelectedOptionForm] = useState('Not selected');

	const [selectedOptionPosition, setSelectedOptionPosition] = useState('Not selected');

	// useEffect(() => {
	// 	setSelectedOptionFormGlobal(selectedOptionForm);
	// 	setSelectedOptionPositionGlobal(selectedOptionPosition);
	// }, [selectedOptionForm, selectedOptionPosition])

	// const handleSelectChange = (event) => {
	// 	setSelectedOptionForm(event.target.value);
	// };

	const handleClick = () => {
		setSelectedOptionFormGlobal(selectedOptionForm);
		setSelectedOptionPositionGlobal(selectedOptionPosition);
	}

	const handleCLear = () => {
		const not_selected = 'Not selected';
		setSelectedOptionForm(not_selected); 
		setSelectedOptionPosition(not_selected);
		setSelectedOptionFormGlobal(not_selected);
		setSelectedOptionPositionGlobal(not_selected);
	}

	return (
		<div className="vacancies__filter">
			<div className="vacancies__filter-core">
				<div className="vacancies__filter-items">

					<Dropdown type={'Form'} selected={selectedOptionForm} setSelected={setSelectedOptionForm} />
					<Dropdown type={'Position'} selected={selectedOptionPosition} setSelected={setSelectedOptionPosition} />
				</div>

				<button className="vacancies__filter-button" onClick={ handleClick }>Search</button>
			</div>

			{selectedOptionForm != 'Not selected' || selectedOptionPosition != 'Not selected' ?
				<div className="vacancies__filter-clear-wrapper">
					<button className="vacancies__filter-clear" onClick={ handleCLear }>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M12.0203 4.02018C12.2156 3.82492 12.2156 3.50833 12.0203 3.31307C11.825 3.11781 11.5085 3.11781 11.3132 3.31307L7.66675 6.95952L4.0203 3.31307C3.82504 3.11781 3.50846 3.11781 3.31319 3.31307C3.11793 3.50833 3.11793 3.82492 3.31319 4.02018L6.95964 7.66663L3.31319 11.3131C3.11793 11.5083 3.11793 11.8249 3.31319 12.0202C3.50846 12.2154 3.82504 12.2154 4.0203 12.0202L7.66675 8.37373L11.3132 12.0202C11.5085 12.2154 11.825 12.2154 12.0203 12.0202C12.2156 11.8249 12.2156 11.5083 12.0203 11.3131L8.37386 7.66663L12.0203 4.02018Z" fill="#0D7AD9" />
						</svg>


						<span>Clear filters</span>
					</button>
				</div>
				: null}

		</div>
	)
}
