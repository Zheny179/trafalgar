import './Section.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, title, titleId, description, children, suptitle } = props

  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className='section__header'>
        {suptitle && (
          <div className='section__suptitle'>
            <p>{suptitle}</p>
          </div>
        )}
        <h2
          className='section__title'
          id={titleId}
        >
          {title}
        </h2>
        {description && (
          <div className='section__desc'>
            <p>{description}</p>
          </div>
        )}
      </header>
      <div className='section__body'>{children}</div>
    </section>
  )
}
