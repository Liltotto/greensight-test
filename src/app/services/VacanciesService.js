import axios from "axios";

const useVacanciesService = () => {

    const _apiBase = 'https://api.hh.ru/vacancies'


    const getAllVacancies = async () => {
        const result = await axios.get(_apiBase)
        console.log(result);
        return result.items.map(_transformVacancy)
        //return result
    }


    const _transformVacancy = (vacancy) => {
        return {
            id: vacancy.id,
            name: vacancy.name,
            logo: vacancy.employer.logo_urls.original,
            form: vacancy.employment,
            company: vacancy.employer.name,
            web:  vacancy.employer.url,
            address: vacancy.address.city,
            requirment: vacancy.snippet.requirement,
            responsibility: vacancy.snippet.responsibility
        }
    }

    return { getAllVacancies }
}

export default useVacanciesService