'use client'

import { useState } from 'react';
import VacanciesFilter from '../VacanciesFilter/VacanciesFilter';
import VacanciesList from '../VacanciesList/VacanciesList';
import './vacanciesSection.scss';

export default function VacanciesSection() {

	const [selectedOptionFormGlobal, setSelectedOptionFormGlobal] = useState('Not selected');

	const [selectedOptionPositionGlobal, setSelectedOptionPositionGlobal] = useState('Not selected');

	return (
		<div className="vacancies">
			<header className="vacancies__header">
				<h1 className="vacancies__title">List of vacancies</h1>
				<VacanciesFilter setSelectedOptionFormGlobal={setSelectedOptionFormGlobal} setSelectedOptionPositionGlobal={setSelectedOptionPositionGlobal} />
			</header>
			<VacanciesList selectedOptionFormGlobal={selectedOptionFormGlobal} selectedOptionPositionGlobal={selectedOptionPositionGlobal}/>
		</div>

	)
}
