import React, { useEffect, useState } from 'react'
import { ServiceFunctions } from '../service'

const ApplicationForm = () => {

    const options = [
        { id: 1, value: 'С автомобилем все в порядке' },
        { id: 2, value: 'Без документов' },
        { id: 3, value: 'В кредите / В залоге / В лизинге' },
        { id: 4, value: 'Не на учете' },
        { id: 5, value: 'Под разбор / На запчасти' },
    ]

    const response = [
        { id: 1, value: 'По телефону' },
        { id: 2, value: 'По Telegram' },
        { id: 3, value: "По WhatsApp" },
    ]

    const [state, setState] = useState()
    const [respType, setRespType] = useState()
    useEffect(() => {
        setState(options[0].value)
        setRespType(response[0].value)
    }, [])

    const [number, setNumber] = useState()
    const [model, setModel] = useState()
    const [year, setYear] = useState()

    const handlePostInfo = e => {
        if (!number) {
            e.preventDefault()
        } else {
            ServiceFunctions.postInfo({
                state: state,
                contact: respType,
                phone: number,
                model: model,
                year: year
            })
        }
    }




    return (
        <div className='application-form'>
            <div className="">
                <h4 className='fw-bold text-center'>Заявка на выкуп</h4>
                <div className="d-flex mb-2">
                    <div className='me-2 col'>
                        <label htmlFor="" className='mb-2'>Марка</label>
                        <input type="text" className="form-control" onChange={e => setModel(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="" className='mb-2'>Год</label>
                        <input type="number" className="form-control" onChange={e => setYear(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className='mb-2'>Состояние</label>
                    <select name="" id="" className='form-control' onChange={e => setState(e.target.value)}>
                        {
                            options?.map((el, i) => (
                                <option key={i} value={el.value}>{el.value}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='mt-2'>
                    <label htmlFor="" className='mb-2'>Как сообщить Вам сумму выкупа?</label>
                    <select name="" id="" className='form-control' onChange={e => setRespType(e.target.value)}>
                        {
                            response?.map((el, i) => (
                                <option key={i} value={el.value}>{el.value}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='mt-2'>
                    <label htmlFor="" className='mb-2'>Номер для связи*</label>
                    <input type="number" className='form-control' onChange={e => setNumber(e.target.value)} />
                </div>
                <div className="mt-3 col">
                    <button className="prime-btn" style={{ width: '100%', height: '40px' }}>
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm