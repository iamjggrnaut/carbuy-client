import React from 'react'
import NsoMap from '../components/NsoMap';


const districts = [
    {
        "name": "Баганский район"
    },
    {
        "name": "Барабинский район"
    },
    {
        "name": "Болотнинский район"
    },
    {
        "name": "Венгеровский район"
    },
    {
        "name": "Доволенский район"
    },
    {
        "name": "Здвинский район"
    },
    {
        "name": "Искитимский район"
    },
    {
        "name": "Карасукский район"
    },
    {
        "name": "Каргатский район"
    },
    {
        "name": "Колыванский район"
    },
    {
        "name": "Коченевский район"
    },
    {
        "name": "Кочковский район"
    },
    {
        "name": "Краснозерский район"
    },
    {
        "name": "Куйбышевский район"
    },
    {
        "name": "Купинский район"
    },
    {
        "name": "Кыштовский район"
    },
    {
        "name": "Маслянинский район"
    },
    {
        "name": "Мошковский район"
    },
    {
        "name": "Ордынский район"
    },
    {
        "name": "Северный район"
    },
    {
        "name": "Татарский район"
    },
    {
        "name": "Тогучинский район"
    },
    {
        "name": "Убинский район"
    },
    {
        "name": "Усть-Таркский район"
    },
    {
        "name": "Черепановский район"
    },
    {
        "name": "Чистоозерный район"
    },
    {
        "name": "Чулымский район"
    }
]



const Map = () => {

    console.log(districts.length);

    return (
        <div className='nsomap'>
            <h3 className="fw-bold fs-1 text-center mb-4">Районы выкупа в Новосибирской области</h3>
            <div className="container">
                <div className="map-image">
                    <NsoMap />
                </div>
                <div className="places">
                    <div>
                        {districts?.slice(0, 9)?.map((el, i) => <p key={i}>{el.name}</p>)}
                    </div>
                    <div>
                        {districts?.slice(9, 18)?.map((el, i) => <p key={i}>{el.name}</p>)}
                    </div>
                    <div>
                        {districts?.slice(18, 27)?.map((el, i) => <p key={i}>{el.name}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map