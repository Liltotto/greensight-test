// import React from 'react';

function VacanciesItem(props) {
    return (
        <div className="vacancies__item">
            <div className="vacancies__item-header">
                <div className="vacancies__item-nameAndLogo">
                    Название
                </div>

                <button className="vacancies__item-respond">Respond</button>
            </div>

            <div className="vacancies__item-subheader">
                <div className="vacancies__item-subheader-item">
                    <div className="vacancies__item-subheader-title">ААА</div>
                    <div className="vacancies__item-subheader-info">БББ</div>
                </div>
                <div className="vacancies__item-subheader-item">
                    <div className="vacancies__item-subheader-title">ААА</div>
                    <div className="vacancies__item-subheader-info">БББ</div>
                </div>
                <div className="vacancies__item-subheader-item">
                    <div className="vacancies__item-subheader-title">ААА</div>
                    <div className="vacancies__item-subheader-info">БББ</div>
                </div>
                <div className="vacancies__item-subheader-item">
                    <div className="vacancies__item-subheader-title">ААА</div>
                    <div className="vacancies__item-subheader-info">БББ</div>
                </div>
            </div>

            <div className="vacancies__item-requirements"> 
                AAA
            </div>

			<div className="vacancies__item-responsibilities">
				<div className="vacancies__item-responsibilities-title">Success Snapshot:</div>
				<ul>
					{/*  ДОЛЖНЫ БЫТЬ LI ПО КОЛ ВУ ОБЯЗАННОВТСЕЙ */}
				</ul>
			</div>
        </div>
    );
}

export default VacanciesItem;