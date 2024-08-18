import enUs from '../en_us.json'
import zhCn from '../zh_cn.json'
import zhTw from '../zh_tw.json'
import { Locales } from './locales'

export const messages = {
  [Locales.enUs]: enUs,
  [Locales.zhTw]: zhTw,
  [Locales.zhCn]: zhCn,
}

export const defaultLocale = Locales.enUs
