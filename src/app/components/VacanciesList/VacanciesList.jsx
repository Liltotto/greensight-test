'use client'

import useVacanciesService from "@/app/services/VacanciesService";
import VacanciesItem from "../VacanciesItem/VacanciesItem";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


function VacanciesList(props) {

    const { getAllVacancies } = useVacanciesService()

    const { data , isLoading , error } = useQuery({
        queryKey: ['vacancies'],
        queryFn: getAllVacancies,
        })


    useEffect(() => {
        console.log(data);
    },[])
    return (
        <div className="vacancies__list">
            {/* {error && <h1>Произошла ошибка</h1>} */}
            {data.map(item=> <VacanciesItem key={item.id} data={item} />)}
            
        </div>
    );
}

export default VacanciesList;