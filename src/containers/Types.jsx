import React, { useState } from 'react'
import { data } from '../types'


const Types = () => {

    const [state, setState] = useState()

    return (
        <div className='types'>
            <h2 className="text-center fw-bold fs-1">Виды техники, которую мы выкупаем</h2>
            <div className="container types-container">
                <div className="type-row">
                    {
                        data?.slice(0, 3)?.map(obj => (
                            <div className="type-item" key={obj.id}>
                                <img src={obj.image} alt="" />
                                <h5 className="text-center secondary-text">
                                    {obj.name}
                                </h5>
                            </div>
                        ))
                    }
                </div>
                <div className="type-row">
                    {
                        data?.slice(3, 6)?.map(obj => (
                            <div className="type-item" key={obj.id}>
                                <img src={obj.image} alt="" />
                                <h5 className="text-center secondary-text">
                                    {obj.name}
                                </h5>
                            </div>
                        ))
                    }
                </div>
                <div className="type-row">
                    {
                        data?.slice(6, 9)?.map(obj => (
                            <div className="type-item" key={obj.id}>
                                <img src={obj.image} alt="" />
                                <h5 className="text-center secondary-text">
                                    {obj.name}
                                </h5>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="mt-4 categories">
                <div className="container d-flex justify-content-center">
                    <div className="cat-list" style={{ zIndex: 9999999 }}>
                        <h3 className="fw-bold mb-2">Категории</h3>
                        <ol>
                            <li>Утиль</li>
                            <li>Дорогие авто</li>
                            <li>Китайские</li>
                            <li>Американские</li>
                            <li>Японские</li>
                            <li>После ДТП</li>
                        </ol>
                    </div>
                </div>
                <div className="text-center w-100 pt-5">
                    <button className="prime-btn fs-3" style={{ padding: '8px 50px' }}
                        onClick={() => { document.getElementById('hero').scrollIntoView(); }}
                    >
                        Узнать сумму
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Types