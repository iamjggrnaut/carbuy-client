import React from 'react'
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = ({ open, close }) => {

    return (
        <div className='navpanel'>
            <div className="container nav-container">
                <div id="logo">
                    <h3 style={{ fontStyle: 'italic', fontWeight: '700', marginBottom: '0' }}>ВЫКУП АВТО</h3>
                    <div style={{ fontSize: '40px' }}>
                        <IoCarSportSharp style={{ marginRight: '8px', fill: 'rgb(36, 150, 162)' }} />
                        <IoCarSportSharp style={{ marginRight: '8px', fill: 'rgb(226, 157, 87)' }} />
                        <IoCarSportSharp style={{ marginRight: '8px', fill: 'darkred' }} />
                    </div>
                </div>
                <div className='d-flex desktop-info'>
                    <div className='d-flex flex-column align-items-end me-4 pt-2'>
                        <a style={{ textDecoration: 'none', color: 'white' }} href='tel:+79137406622'>+7-913-740-6622</a>
                        <span>Новосибирск, ул. Октябрьская, 42</span>
                        <span>Часы работы: 8:00-22:00</span>
                    </div>
                    <div className='nav-contact'>
                        <div className="d-flex">
                            <span className='me-2'>
                                <a href="https://wa.me/79137406622">
                                    <FaWhatsapp
                                        style={{
                                            backgroundColor: 'green',
                                            borderRadius: '100%',
                                            padding: '2px',
                                            fontSize: '32px'
                                        }}
                                    />
                                </a>
                            </span>
                            <span>
                                <a href="https://t.me/+79137406622">
                                    <FaTelegram
                                        style={{
                                            fill: 'rgb(56, 170, 182)',
                                            borderRadius: '100%',
                                            padding: '2px',
                                            border: '1px solid, white',
                                            fontSize: '32px',
                                            backgroundColor: 'white'
                                        }}
                                    />
                                </a>
                            </span>
                        </div>
                        <button className='prime-btn mb-1' onClick={open}>Заказать звонок</button>
                    </div>
                </div>
                {/* <div className='mobile-menu'>
                    <span style={{ fontSize: '32px', cursor: 'pointer' }}><GiHamburgerMenu /></span>
                </div> */}
            </div>
            <div className="submenu">
                <span onClick={() => { document.getElementById('hero').scrollIntoView(); }} className='submenu-item'>Экспресс оценка</span>
                <span onClick={() => { document.getElementById('about').scrollIntoView(); }} className='submenu-item'>О компании</span>
                <span onClick={() => { document.getElementById('contact').scrollIntoView(); }} className='submenu-item'>Контакты</span>
            </div>
        </div>
    )
}

export default Navbar