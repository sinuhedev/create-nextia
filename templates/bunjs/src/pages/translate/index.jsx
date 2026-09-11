import { Message } from 'components'
import { I18n } from 'nextia'

export default function TranslatePage() {
  return (
    <section>
      <I18n value="page.name" args={['Sinuhe', 'Maceda', 'Bouchan']} />

      <ul>
        <li>
          <I18n value="ui.ok" />
        </li>
        <li>
          <I18n value="ui.back" />
        </li>
        <li>
          <I18n value="page.user.family" />
        </li>
        <li>
          <I18n value="page.module.block.docker" />
        </li>
      </ul>

      <Message />
    </section>
  )
}
