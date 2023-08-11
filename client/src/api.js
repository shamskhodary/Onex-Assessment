import axios from 'axios'

export const setHeaders = async () => {
  let token = localStorage.getItem('token')

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.defaults.headers.common.Accept = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
  }
}
