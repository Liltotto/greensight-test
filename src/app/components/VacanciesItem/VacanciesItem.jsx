// import React from 'react';
'use client'

// import useVacanciesService from "@/app/services/VacanciesService";
// import { useQuery } from "@tanstack/react-query";

function VacanciesItem({data}) {

    return (
        <div className="vacancies__item">
            <div className="vacancies__item-header">
                <div className="vacancies__item-nameAndLogo">
                    <span>{data.name}</span>
                    <img src={data.logo} alt="logo" />
                </div>
                
                <button className="vacancies__item-respond">Respond</button>
            </div>

            <div className="vacancies__item-subheader">
                <div className="vacancies__item-subheader-item">
                    <div className="vacancies__item-subheader-title">Form</div>
                    <div className="vacancies__item-subheader-info">{data.form}</div>
                </div>
                <div className="vacancies__item-subheader-item">
                    <div className="vacancies__item-subheader-title">Company</div>
                    <div className="vacancies__item-subheader-info">{data.company}</div>
                </div>
                <div className="vacancies__item-subheader-item">
                    <div className="vacancies__item-subheader-title">Web</div>
                    <div className="vacancies__item-subheader-info">{data.web}</div>
                </div>
                <div className="vacancies__item-subheader-item">
                    <div className="vacancies__item-subheader-title">Address</div>
                    <div className="vacancies__item-subheader-info">{data.address}</div>
                </div>
            </div>

            <div className="vacancies__item-requirements"> 
            <div className="vacancies__item-requirements-title">Requirements:</div>
				<div className="vacancies__item-requirements-info">{data.requirment}</div>
            </div>

			<div className="vacancies__item-responsibilities">
				<div className="vacancies__item-responsibilities-title">Responsibilities:</div>
				<div className="vacancies__item-responsibilities-info">{data.responsibility}</div>
			</div>
        </div>
    );
}

export default VacanciesItem;