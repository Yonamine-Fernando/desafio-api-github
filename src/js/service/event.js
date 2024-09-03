import { baseUrl, Quantity } from '../variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${Quantity}`)
    const envents =  await response.json()
    return envents.filter(element => element.type === 'CreateEvent' || element.type ==='PushEvent').slice(0,Quantity)
}

export { getEvents }