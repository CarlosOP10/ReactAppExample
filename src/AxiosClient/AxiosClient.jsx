import axios from 'axios'

const AxiosClient = axios.create({
  baseURL:'https://pokeapi.co/api/v2'
})

export default AxiosClient
