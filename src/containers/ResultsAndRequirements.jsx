import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bg from '../assets/bg.jpg'
import { bought } from '../bought'
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiArchiveRegister, GiPassport } from "react-icons/gi";



const ResultsAndRequirements = () => {

    return (
        <div className='results'>
            <div className="res-loop">
                <h3 className="fs-1 fw-bold text-center mb-5">
                    Выкупленные нами автомобили
                </h3>
                <Carousel>
                    {
                        bought && bought.map(item => (
                            <Carousel.Item>
                                <img src={bg} alt="" />
                                <Carousel.Caption>
                                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '1rem' }}>
                                        <h3 className='secondary-text'>{item.model}</h3>
                                        <p>Год:&nbsp;{item.year}</p>
                                        <p className='fw-bold prime-text'>Цена:&nbsp;{item.price}</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
            <div className="requirements">
                <h3 className="fs-1 text-center fw-bold">Что необходимо для выкупа авто?</h3>
                <div className="container req-container">
                    <div className='req-el'>
                        <IoDocumentTextOutline className='req-icon' />
                        <p className="fw-bold fs-4 secondary-text mb-1">Паспорт ТС</p>
                        <p>Необязательно при наличии свидетельства о регистрации.</p>
                    </div>
                    <div className='req-el'>
                        <GiArchiveRegister className='req-icon' />
                        <p className="fw-bold fs-4 secondary-text mb-1">Свидетельство о регистрации ТС</p>
                        <p>Необязательно при наличии ПТС.</p>
                    </div>
                    <div className='req-el'>
                        <GiPassport className='req-icon' />
                        <p className="fw-bold fs-4 secondary-text mb-1">Паспорт</p>
                        <p>Необходим для составления договора купли-продажи.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsAndRequirements