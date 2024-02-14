import used from './assets/used.jpg'
import burning from './assets/burning.jpg'
import blocked from './assets/blocked.jpg'
import notallowed from './assets/notallowed.jpg'
import problem from './assets/problem.jpg'
import ticket from './assets/ticket.jpg'
import zalog from './assets/zalog.jpg'
import crash from './assets/crash.jpg'
import credit from './assets/credit.jpg'

export const data = [
    {
        id: 1,
        name: 'С пробегом',
        image: used
    },
    {
        id: 2,
        name: 'После пожара',
        image: burning
    },
    {
        id: 3,
        name: 'После ДТП',
        image: crash
    },
    {
        id: 4,
        name: 'С тех. проблемами',
        image: problem
    },
    {
        id: 5,
        name: 'Без документов',
        image: ticket
    },
    {
        id: 6,
        name: 'С запретами',
        image: notallowed
    },
    {
        id: 7,
        name: 'В кредите',
        image: credit
    },
    {
        id: 8,
        name: 'В залоге',
        image: zalog
    },
    {
        id: 9,
        name: 'В аресте',
        image: blocked
    },
]