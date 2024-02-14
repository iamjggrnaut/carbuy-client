import React from 'react'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { IoCarSportSharp } from 'react-icons/io5'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container nav-container">
                <div id="logo">
                    <h3 style={{ fontStyle: 'italic', fontWeight: '700', marginBottom: '0' }}>ВЫКУП АВТО</h3>
                    <div style={{ fontSize: '40px' }}>
                        <IoCarSportSharp style={{ marginRight: '8px', fill: 'rgb(36, 150, 162)' }} />
                        <IoCarSportSharp style={{ marginRight: '8px', fill: 'rgb(226, 157, 87)' }} />
                        <IoCarSportSharp style={{ marginRight: '8px', fill: 'darkred' }} />
                    </div>
                </div>
                <div className='d-flex footer-info'>
                    <div className='d-flex flex-column align-items-end me-4 pt-2'>
                        <a style={{ textDecoration: 'none', color: 'white' }} href='tel:+79137406622'>+7-913-740-6622</a>
                        <span>Новосибирск, ул. Октябрьская, 42</span>
                        <span>Часы работы: 8:00-22:00</span>
                    </div>
                    <div className='nav-contact'>
                        <div className="d-flex">
                            <span className='me-2'>
                                <a href="https://wa.me/79137406622"><FaWhatsapp /></a>
                            </span>
                            <span>
                                <a href="https://t.me/+79137406622"><FaTelegram /></a>
                            </span>
                        </div>
                        <button className='prime-btn mb-1'>Заказать звонок</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer