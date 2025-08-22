import "./BurgerButton.scss"
import clsx from "clsx"

export default (props) => {
  const { className, extraAttrs } = props

  const title = "Open menu"

  return (
    <button
      className={clsx("burger-button", className)}
      type="button"
      aria-label={title}
      title={title}
      {...extraAttrs}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
