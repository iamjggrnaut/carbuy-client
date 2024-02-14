import React from 'react'
import cash from '../assets/cash.jpg'
import broken from '../assets/broken.jpg'
import suit from '../assets/suit.jpg'
import truck from '../assets/truck.jpg'

const Advantages = () => {

    return (
        <div className='advantages'>
            <div className="advantage-header">
                <div className="dark-overlay"></div>
                <h3 className='prime-text fs-1 fw-bold' style={{ zIndex: 999999 }}>Преимущества выкупа авто с нами</h3>
            </div>
            <div className="container advantage-container">
                <div className="adv-row">
                    <div className="adv-item-left">
                        <img src={suit} alt="" className="adv-img" />
                        <p className="adv-text">Индивидуальный подход к каждому клиенту.</p>
                    </div>
                    <div className="adv-item-right">
                        <img src={truck} alt="" className="adv-img" />
                        <p className="adv-text">Можем забрать автомобиль на собственном транспорте.</p>
                    </div>
                </div>
                <div className="adv-row">
                    <div className="adv-item-left">
                        <img src={broken} alt="" className="adv-img" />
                        <p className="adv-text">Скупаем любой транспорт (независимо от марки и технического состояния).</p>
                    </div>
                    <div className="adv-item-right">
                        <img src={cash} alt="" className="adv-img" />
                        <p className="adv-text">Немедленная оплата наличными.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages