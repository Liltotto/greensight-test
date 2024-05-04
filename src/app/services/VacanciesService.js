import axios from "axios";

const useVacanciesService = () => {

    const _apiBase = 'https://api.hh.ru/vacancies'

    const getAllVacancies = async () => {
        const result = await axios.get(_apiBase);
        const transformedVacancies = await Promise.all(result.data.items.map(async (item) => {
            return await _transformVacancy(item);
        }));
        return transformedVacancies;

    }



    const _transformVacancy = async (vacancy) => {

        const res = await axios.get(vacancy.employer.url);
        const site_url = res.data.site_url;

        let edited_form = '';

        switch (vacancy.employment.id) {
            case 'full':
                edited_form = 'Full time';
                break;
            case 'part':
                edited_form = 'Part time';
                break;
            case 'half':
                edited_form = 'Half time';
                break;
            default:
                break;
        }

        return {
            id: vacancy.id,
            name: vacancy.name,
            logo: vacancy.employer.logo_urls?.original,
            form: edited_form,
            company: vacancy.employer.name,
            web: site_url ? site_url : 'null',
            address: vacancy.address?.city ? vacancy.address.city : 'null',
            requirment: vacancy.snippet.requirement,
            responsibility: vacancy.snippet.responsibility
        }
    }

    return { getAllVacancies }
}

export default useVacanciesService