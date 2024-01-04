import { createI18n } from 'vue-i18n'
import zh from './modules/zh.ts'
import en from './modules/en.ts'
const i18n = createI18n({
  locale: 'zh', // set locale
  messages: {
    zh,
    en,
  }, // set locale messages
})

export default i18n
