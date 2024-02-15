const url = 'https://5.35.91.182:5000/api'

export const ServiceFunctions = {

    postNumber: async (number) => {
        const res = await fetch(`${url}/mail/request-call`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ number })
        })
        const data = await res.json()
        return data
    },

    postInfo: async (obj) => {
        const res = await fetch(`${url}/mail/request-price`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(obj)
        })
        const data = await res.json()
        return data
    }

}