import dayjs from 'dayjs'

export interface RootState {
    today: dayjs.Dayjs,
    selectedLanguage: string
}