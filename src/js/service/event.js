import { baseUrl, Quantity } from '../variables.js'

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${Quantity}`)
    return await response.json()
}

export { getEvents }