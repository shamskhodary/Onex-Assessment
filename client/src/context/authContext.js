import axios from 'axios'

async function fetchUser() {
  try {
    const { data } = await axios.get('/api/v1/auth')
    return data.user
  } catch (error) {
    return null
  }
}

export { fetchUser }
