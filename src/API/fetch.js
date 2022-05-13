import axios from "axios";


const BASE_URL = `${process.env.REACT_APP_API_URL || 'http://localhost:1337'}/api/`

// ---------------------------------------
//  User
// ---------------------------------------

export function fetchNovels  (query) {
    return  axios.get(`${BASE_URL}novels/get?${query}`)
}

export function fetchNovelById  (id, query) {
    return  axios.get(`${BASE_URL}novel-chapters/${id}?${query}`)
}
export function fetchPoems (query) {
    return  axios.get(`${BASE_URL}poems?${query}`)
}

export function fetchPoemById (id, query) {
    return  axios.get(`${BASE_URL}poems/${id}?${query}`)
}

export function fetchWorlds  (query) {
    return  axios.get(`${BASE_URL}worlds?${query}`)
}


export function fetchWorldById (id, query) {
    return  axios.get(`${BASE_URL}worlds/${id}?${query}`)
}

export function fetchShorts (query) {
    return  axios.get(`${BASE_URL}shorts?${query}`)
}

export function fetchConfigs (query) {
    return  axios.get(`${BASE_URL}website?${query}`)
}