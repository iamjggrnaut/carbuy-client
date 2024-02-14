import React from 'react'
import { FaWpforms, FaCar } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { GiMoneyStack } from "react-icons/gi";



const Flow = () => {

    return (
        <div className='flow'>
            <div className="flow-description">
                <p className="text-center w-75 fs-5">
                    Наша компания осуществляет выкуп автомобилей в любом состоянии по цене от <span className="prime-text fw-bold">10 000</span> до <span className="prime-text fw-bold">5 000 000 рублей</span>.
                    Мы выкупаем автомобили в Новосибирске с 2008 года и успешно провели более 2000 сделок.
                    Оставляйте заявку для выкупа вашего авто online или звоните по телефону <a className='prime-text fw-bold' href="tel:+79137406622" style={{ textDecoration: 'none' }}>+7-913-740-6622</a>.
                    Наш офис находится по адресу: г. Новосибирск, ул. Октябрьская, 42
                </p>
                <hr style={{ width: '25vw', height: '2px', border: '1px solid lightblue' }} />
            </div>
            <div className="flow-container container">
                <h2 className='text-center fw-bold fs-1'>Порядок выкупа автомобилей</h2>
                <div className="flow-process">
                    <div className='flow-step'>
                        <div className="flow-icon">
                            <FaWpforms />
                        </div>
                        <p>Оставляете свои контакты с помощью любой формы на сайте или звоните/пишете нам</p>
                    </div>
                    <div className='flow-step'>
                        <div className="flow-icon">
                            <HiOutlineDevicePhoneMobile />
                        </div>
                        <p>Предварительно оцениваем автомобиль по оставленным вами данным</p>
                    </div>
                    <div className='flow-step'>
                        <div className="flow-icon">
                            <FaCar />
                        </div>
                        <p>Выезжаем на место осмотра для составления договора и заключения сделки</p>
                    </div>
                    <div className='flow-step'>
                        <div className="flow-icon">
                            <GiMoneyStack />
                        </div>
                        <p>Осуществляем выплату выбранным вами способом наличными или на карту</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flow