import axios from "axios";
//valorantApi = base url
const valorantApi = axios.create({ baseURL: 'https://valorant-api.com/v1' })

async function getAgents() {
   const response = await valorantApi.get('/agents')
    const data = response.data
    return data.data.filter(({fullPortrait})=>fullPortrait)
}

const api = { getAgents: getAgents }
export default api
