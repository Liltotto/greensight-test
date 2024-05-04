import axios from "axios";

const useVacanciesService = () => {

    const _apiBase = 'https://api.hh.ru/vacancies'

    const getAllVacancies = async () => {
        try {
            const result = await axios.get(_apiBase);
            const transformedVacancies = await Promise.all(result.data.items.map(async (item) => {
                return await _transformVacancy(item);
            }));
           
            console.log(transformedVacancies);
            //console.log(result);
            return transformedVacancies;
        } catch (error) {
            console.error('Error fetching vacancies:', error);
            throw error;
        }
    }

    // const getAllVacancies = async () => {
    //     try {
    //         const response = await fetch(_apiBase);
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         const data = await response.json();
    //         console.log('aaaaa');
    //         console.log(data.items);

    //         // const edited_data = [] 
    //         // // const edited_data = data.items.map(_transformVacancy);
    //         // data.items.map(item => {
    //         //     edited_data.push(_transformVacancy(item))
    //         //     return item

    //         // })

    //         // console.log(edited_data);
    //         console.log(_transformVacancy(data.items[0]));

    //         // try {
    //         //     const web_url = 
    //         // } catch (error) {

    //         // }

    //         return edited_data;
    //     } catch (error) {
    //         console.error('There has been a problem with your fetch operation:', error);
    //         throw error;
    //     }
    // }


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