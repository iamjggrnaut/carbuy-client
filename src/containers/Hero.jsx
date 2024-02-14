import React from 'react'
import ApplicationForm from '../components/ApplicationForm'

const Hero = () => {
    return (
        <div id='hero'>
            <div className="dark-overlay"></div>
            <div className="container hero-container">
                <div className='hero-info'>
                    <div>
                        <h1 className='fw-bold secondary-text'>Срочный выкуп автомобилей в Новосибирске</h1>
                        <ul>
                            <li>Рассматриваем к выкупу авто в любом состоянии от 1991 года выпуска</li>
                            <li>Купим сегодня за час</li>
                            <li>Оценим в интересах обеих сторон</li>
                            <li>Выплатим всю сумму на месте сразу после оформления договора</li>
                            <li>Эвакуатор, если нужен, за наш счет</li>
                        </ul>
                    </div>
                    <p>Отправьте заявку на выкуп и за 10 минут узнайте стоимость, которую мы заплатим за Ваш автомобиль.</p>
                </div>
                <div>
                    <ApplicationForm />
                </div>
            </div>
        </div>
    )
}

export default Hero