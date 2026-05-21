import { useFx } from 'nextia'
import i18nFile from 'assets/i18n'

export default function I18n ({ value, args = [] }) {
  const { context } = useFx()

  try {
    let text = value.split('.').reduce((ac, el) => ac[el], i18nFile)
    text = text[i18nFile.locales.indexOf(context.state.i18n)]

    if (args) {
      text = text.replace(
        /([{}])\\1|[{](.*?)(?:!(.+?))?[}]/g,
        (match, literal, number) => args[number] || match
      )
    }

    return text
  } catch (e) {
    console.error('Error in [il8n] => ' + value)
    return value
  }
}
