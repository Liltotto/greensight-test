'use client'

import useVacanciesService from "@/app/services/VacanciesService";
import VacanciesItem from "../VacanciesItem/VacanciesItem";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


function VacanciesList({ selectedOptionFormGlobal, selectedOptionPositionGlobal }) {

    const { getAllVacancies } = useVacanciesService()

    const { data, isLoading, error, isSuccess } = useQuery({
        queryKey: ['vacancies'],
        queryFn: () => getAllVacancies(),
    })

    const [filteredVacancies, setFilteredVacancies] = useState([])

    const [showedVacancies, setShowedVacancies] = useState(5)

    useEffect(() => {
        if (selectedOptionFormGlobal === 'Not selected') {
            console.log('form ' + selectedOptionFormGlobal);
            setFilteredVacancies(data)
            return
        }

        const filteredData = data.slice(0, showedVacancies).filter(item => item.form === selectedOptionFormGlobal)
       
        setFilteredVacancies(filteredData)

    }, [selectedOptionFormGlobal, isSuccess, data])



    const handleClickShowMore = () => {
        setShowedVacancies((prev) => prev + 5)
    }


    return (
        <div className="vacancies__list">
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>Произошла ошибка</h2>}
            {isSuccess && filteredVacancies && (
                <>
                    {filteredVacancies.slice(0, showedVacancies).map(item => <VacanciesItem key={item.id} data={item} />)}
                    {
                        showedVacancies < filteredVacancies.length && <button className="vacancies__list-btn" onClick={ handleClickShowMore }>Show more</button>
                    }
                </>

            )}



        </div>
    );
}

export default VacanciesList;