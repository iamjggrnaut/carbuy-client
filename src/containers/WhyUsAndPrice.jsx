import React from 'react'
import { AiFillClockCircle, AiFillDollarCircle } from "react-icons/ai";
import { IoCarSportSharp, IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { VscLaw } from "react-icons/vsc";
import { GiTowTruck } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

const WhyUsAndPrice = () => {
    return (
        <div className='whyus'>
            <div className="whyus-wrapper">
                <h3 className="text-center fw-bold fs-1 mb-3">Почему нас выбрали более 2000 продавцов?</h3>
                <div className="reasons-row">
                    <div className='reason'>
                        <AiFillClockCircle />
                        <p className='fw-bold secondary-text'>Связались с продавцомв течение 10 минут с момента обращения</p>
                    </div>
                    <div className='reason'>
                        <IoCarSportSharp />
                        <p className='fw-bold secondary-text'>Приехали на осмотр в день обращения или быстро оценили автомобиль по фото</p>
                    </div>
                    <div className='reason'>
                        <IoCheckmarkDoneCircleSharp />
                        <p className='fw-bold secondary-text'>Оценили честно, с учетом особенностей. До 95% от рыночной стоимости</p>
                    </div>
                </div>
                <div className="reasons-row">
                    <div className='reason'>
                        <VscLaw />
                        <p className='fw-bold secondary-text'>Сработали в интересах обеих сторон</p>
                    </div>
                    <div className='reason'>
                        <GiTowTruck />
                        <p className='fw-bold secondary-text'>Забрали автомобиль на своем эвакуаторе БЕСПЛАТНО</p>
                    </div>
                    <div className='reason'>
                        <AiFillDollarCircle />
                        <p className='fw-bold secondary-text'>Оплатили всю сумму удобным способом в день заключения договора</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="company-options">
                    <div className='option-block'>
                        <div className="option">
                            <div className='me-2 option-icon'><FaStar /></div>
                            <span>Выезд оценщика в Новосибирске</span>
                        </div>
                        <div className="option">
                            <div className='me-2 option-icon'><FaStar /></div>
                            <span>Возможность узнать на сайте рыночную стоимость без осмотра</span>
                        </div>
                    </div>
                    <div className='option-block'>
                        <div className="option">
                            <div className='me-2 option-icon'><FaStar /></div>
                            <span>Осуществление быстрых сделок</span>
                        </div>
                        <div className="option">
                            <div className='me-2 option-icon'><FaStar /></div>
                            <span>Быстрая предварительная оценка</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="price-block">
                    <div className="discount-icon">
                        <CiDiscount1 />
                    </div>
                    <div className="price-description">
                        <h3 className="fs-1 fw-bold mb-2 secondary-text">Цены на выкуп авто в нашей компании выше на 10-15% чем у конкурентов!</h3>
                        <p className='fs-5'>Поэтому обязательно заполните любую заявку на сайте и получите лучшее предложение в Новосибирске</p>
                        <button className="prime-btn fw-bold"
                            onClick={() => { document.getElementById('contact').scrollIntoView(); }}
                        >
                            Получить лучшее предложеие!
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhyUsAndPrice