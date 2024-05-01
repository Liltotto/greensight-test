import VacanciesFilter from '../VacanciesFilter/VacanciesFilter';
import VacanciesItem from '../VacanciesItem/VacanciesItem';
import './vacanciesSection.scss';

export default function VacanciesSection() {
	return (
		<div className="vacancies">
			<header className="vacancies__header">
				<h1 className="vacancies__title">List of vacancies</h1>
				<VacanciesFilter />
			</header>
			<VacanciesItem />
		</div>

	)
}
