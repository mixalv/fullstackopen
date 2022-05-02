import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const createPerson = (person) => {
    return axios
        .post(baseUrl, person)
        .then(response => response.data)
}

const deletePerson = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
}

const updatePerson = (personObject, id) => {
    return axios
            .put(`${baseUrl}/${id}`, personObject)
            .then(response => response.data)
}

const object = {
    getAllPersons,
    createPerson,
    deletePerson,
    updatePerson
}


export default object