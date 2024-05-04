// import React from 'react';
'use client'

import { useEffect, useRef, useState } from "react";

// import useVacanciesService from "@/app/services/VacanciesService";
// import { useQuery } from "@tanstack/react-query";

function VacanciesItem({ data }) {

    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef(null);
    const [reducedHeight, setReducedHeight] = useState(null);

    useEffect(() => {
        if(cardRef.current) {
            setReducedHeight(cardRef.current.scrollHeight/1.1);
        }

    }, [cardRef])

    return (
        <div 
        className="vacancies__item"
        ref={cardRef}
        style={{maxHeight: isExpanded ? null : `${reducedHeight}px`}}>
            <div className="vacancies__item-header">
                <div className="vacancies__item-nameAndLogo">
                    <span className="vacancies__item-nameAndLogo-name">{data.name}</span>
                    { data.logo && <img className="vacancies__item-nameAndLogo-logo" src={data.logo} alt="logo" />}
                    
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
                {/* <div className="vacancies__item-requirements-title">Requirements:</div> */}
                <div className="vacancies__item-requirements-info">{data.requirment}</div>
            </div>

            <div className="vacancies__item-responsibilities">
                <div className="vacancies__item-responsibilities-title">Responsibilities:</div>
                <div className="vacancies__item-responsibilities-info">{data.responsibility}</div>
            </div>

            {isExpanded ? (
                <div className="vacancies__item-showLess-wrapper">
                    <button className="vacancies__item-showLess" onClick={() => setIsExpanded(false)}>
                        <span>Less details</span>

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.64645 10.3536C3.84171 10.5488 4.15829 10.5488 4.35355 10.3536L8 6.70711L11.6464 10.3536C11.8417 10.5488 12.1583 10.5488 12.3536 10.3536C12.5488 10.1583 12.5488 9.84171 12.3536 9.64645L8.35355 5.64645C8.15829 5.45118 7.84171 5.45118 7.64645 5.64645L3.64645 9.64645C3.45118 9.84171 3.45118 10.1583 3.64645 10.3536Z" fill="#0D7AD9" />
                        </svg>

                    </button>
                </div>

            ) : (
                <div className="vacancies__item-showMore-wrapper">
                    <button className="vacancies__item-showMore" onClick={() => setIsExpanded(true)}>
                        <span>More details</span>

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.64645 5.64645C3.84171 5.45118 4.15829 5.45118 4.35355 5.64645L8 9.29289L11.6464 5.64645C11.8417 5.45118 12.1583 5.45118 12.3536 5.64645C12.5488 5.84171 12.5488 6.15829 12.3536 6.35355L8.35355 10.3536C8.15829 10.5488 7.84171 10.5488 7.64645 10.3536L3.64645 6.35355C3.45118 6.15829 3.45118 5.84171 3.64645 5.64645Z" fill="#0D7AD9" />
                        </svg>

                    </button>
                </div>

            )}
        </div>
    );
}

export default VacanciesItem;