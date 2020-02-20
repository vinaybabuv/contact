import api from './api';

export const fetchContacts = () => {
    return api.get('/list')
        .then(response => {
            return response.data
        })

}
let test = fetchContacts()
console.log(test);