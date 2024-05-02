

import Footer from "./components/Footer/Footer";
import VacanciesSection from "./components/VacanciesSection/VacanciesSection";
import "./page.scss";

export default function Home() {
	return (
		<div>
			<div className="home">
				<VacanciesSection />
			</div>
			<Footer />
		</div>

	);
}
