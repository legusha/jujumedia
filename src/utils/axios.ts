import axios from 'axios'

const config = {
  baseURL: process.env.VUE_APP_ROOT_API
}
const axiosInstance = axios.create(config)

export default axiosInstance
