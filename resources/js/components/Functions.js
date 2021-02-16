import axios from 'axios'


export const cajas = () => {
    return axios
        .post('/posicion', {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            //   console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
            return []
        })
}

export const obtener = () => {
    return axios
        .post('/obtener', {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            //   console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
            return []
        })
}

export const solicitar = (fila) => {
    return axios
        .post('/aumentar',fila, {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            //   console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
            return []
        })
}

export const disminuir = () => {
    return axios
        .post('/disminuir', {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
            return []
        })
}

export const mostrar = () => {
    return axios
        .post('/mostrar', {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
            return []
        })
}