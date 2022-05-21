import queryString from 'querystring'

export default (url = '') => {
    let paymentDetails = queryString.parse(url)
    return Object
        .entries(paymentDetails)
        .reduce((obj, [key = '', value = '']) => {
            obj[key.replace('?', '')] = value
            return obj
        }, {})
}


export const getSearchQuery = (key, location) => {
    const params = new URLSearchParams(location);
    return params.get(key);
}