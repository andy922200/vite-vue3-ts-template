import axios from 'axios'
import 'vite/client'

const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://api.lyrics.ovh/v1/'
// requests settings
const lyricsRequest = axios.create({
    baseURL: BASE_URL
})

export const lyricsAPIs = {
    getASongLyric: (data: Record<string, any>) => {
        return lyricsRequest.get(`${data.artist}/${data.title}`)
    }
}

export default axios