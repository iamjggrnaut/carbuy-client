import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';

const position = [55.018803, 82.933952]

const Contact = () => {

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    return (
        <div id='contact'>
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="fw-bold fs-1 mb-4">
                        Контакты
                    </h2>
                    <p className="fs-5">
                        Часы работы: с 8:00 утра до 22:00 вечера.
                        <br />
                        Без выходных.
                    </p>
                    <p style={{ borderTop: '1px solid silver', borderBottom: '1px solid silver', padding: '16px 0', maxWidth: '360px' }}><span className="fw-bold">Адрес:</span> г. Новосибирск, ул. Октябрьская, 42</p>
                    <p style={{ borderTop: '1px solid silver', borderBottom: '1px solid silver', padding: '16px 0', maxWidth: '360px' }}><span className="fw-bold">Телефон:</span> +7-913-740-6622</p>
                    <div className="d-flex gap-4">
                        <span className='me-2'>
                            <a href="https://wa.me/79137406622"><FaWhatsapp /></a>
                        </span>
                        <span>
                            <a href="https://t.me/+79137406622"><FaTelegram /></a>
                        </span>
                    </div>
                    <div>
                        <button style={{ width: '350px' }} className="prime-btn mt-4">Заказать звонок</button>
                    </div>
                </div>
                <div className="contact-map">
                    <MapContainer center={position} zoom={11} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            {/* <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup> */}
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default Contact