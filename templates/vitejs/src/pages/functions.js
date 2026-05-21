import i18nFile from 'assets/i18n'

const initialState = {
  i18n: window.localStorage.getItem('i18n') || i18nFile.defaultLocale
}

export default {
  initialState
}
