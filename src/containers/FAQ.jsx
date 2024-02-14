import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {


    return (
        <div className='faq'>
            <h3 className="fs-1 mb-4 fw-bold text-center">Часто задаваемые вопросы</h3>
            <div className="container">
                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Какой транспорт вы покупаете?</Accordion.Header>
                        <Accordion.Body>
                            Наша компания покупает все автомобили, различных марок и производителей — абсолютно все! Отечественные и все иномарки.
                            Выкупим любой транспорт и в любом состоянии!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Мне срочно необходимо продать машину!</Accordion.Header>
                        <Accordion.Body>
                            Заполняйте форму или звоните по номеру телефона. Мы все обсудим! Приедем к вам в течении часа.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>У меня проблема с машиной. Как быть?</Accordion.Header>
                        <Accordion.Body>
                            Не страшно! Мы выкупаем автомобили всех направлений сложности!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Как производится оценка?</Accordion.Header>
                        <Accordion.Body>
                            Первоначальная оценка производится по отправленным вами фото и описанием состояния автомобиля. При осмотре автомобиля нашим специалистом оглашается окончательная стоимость и выплачивается вся сумма при оформлении сделки.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Вы выкупаете в городе и области?</Accordion.Header>
                        <Accordion.Body>
                            Да, мы занимаемся выкупом авто с 2008г. – в Новосибирске и по всей области. У нас хорошие условия для каждого клиента и бесплатный эвакуатор.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ