import './Button.scss'
import clsx from 'clsx'

export default (props) => {
  const { link, bg, label, href, submit, className } = props

  return link ? (
    <a
      className={ clsx('button', bg && 'button--black', className) }
      href={ href }
    >
      { label }
    </a>
  ) : (
    <button
      className={ clsx('button', bg && 'button--black', className) }
      type={ submit ? 'submit' : 'button' }
    >
      { label }
    </button>
  )
}
