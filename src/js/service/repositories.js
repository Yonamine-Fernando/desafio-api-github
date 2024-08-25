import { baseUrl, Quantity } from '../variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${Quantity}`)
    return await response.json()
}

export { getRepositories }