import './ContentSection.scss'
import { Image } from 'minista'
import Button from '@/components/Button'
import clsx from 'clsx'

export default (props) => {
  const {
    title,
    description,
    buttonText,
    imageSrc,
    imagePosition,
    customClass,
  } = props

  const sectionClass = `content-section ${customClass}`
  const innerClass = `content-section__inner container`
  const imgPosition = `content-section__img--${imagePosition}`

  return (
    <section className={sectionClass}>
      <div className={innerClass}>
        <Image
          className={clsx('content-section__img', imgPosition)}
          src={imageSrc}
        />
        <div className='content-section__wrapper'>
          <h2 className='content-section__title'>{title}</h2>
          <p className='content-section__desc'>{description}</p>
          <Button
            className='content-section__link'
            title={buttonText}
            link
            label={buttonText}
            bg
          />
        </div>
      </div>
    </section>
  )
}
