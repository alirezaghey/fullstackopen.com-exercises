import axios from 'axios';
const baseURL = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(baseURL);
    return request.then(res => res.data);
}

const create = newNumber => {
    const request = axios.post(baseURL, newNumber);
    return request.then(res => res.data);
}

const update = (id, newNumber) => {
    const request = axios.put(`${baseURL}/${id}`, newNumber);
    return request.then(res => res.data);
}

const remove = id => {
    const request = axios.delete(`${baseURL}/${id}`);
    return request.then(res => res);
}

export default {
    getAll,
    create,
    update,
    remove
}