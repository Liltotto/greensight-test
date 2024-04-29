import VacanciesFilter from '../VacanciesFilter/VacanciesFilter';
import './vacanciesSection.scss';

export default function VacanciesSection() {
	return (
		<div className="vacancies">
			<header className="vacancies__header">
				<h1 className="vacancies__title">List of vacancies</h1>
				<VacanciesFilter />
			</header>

		</div>

	)
}
